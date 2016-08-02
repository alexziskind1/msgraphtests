"use strict";
//import * as uuid from 'node-uuid';
var tns_oauth_1 = require('./tns-oauth');
var frameModule = require('ui/frame');
var authPage = require('./auth-page');
// The application registration (must match Azure AD config)
exports.credentials = {
    authority: 'https://login.microsoftonline.com/common',
    authorize_endpoint: '/oauth2/v2.0/authorize',
    token_endpoint: '/oauth2/v2.0/token',
    client_id: 'e392f6aa-da5c-434d-a42d-a0e0a27d3964',
    redirect_uri: 'urn:ietf:wg:oauth:2.0:oob',
    scope: 'Files.ReadWrite%20offline_access'
};
function loginViaAuthorizationCodeFlow(successPage) {
    return new Promise(function (resolve, reject) {
        authPage.checkInterceptError = function (webView, error) {
            var retStr = '';
            try {
                if (error && error.userInfo && error.userInfo.allValues && error.userInfo.allValues.count > 0) {
                    retStr = error.userInfo.allValues[0].absoluteString;
                }
            }
            catch (er) {
                console.error('retStr error occurred...');
                console.dir(er);
            }
            if (retStr.indexOf('code=') > 0) {
                var idx1 = retStr.indexOf('code=');
                var idx2 = retStr.indexOf('&');
                var codeStr = retStr.substring(idx1 + 5, idx2);
                try {
                    getTokenFromCode(codeStr, function (e, accessToken, refreshToken) {
                        if (e) {
                            reject(e);
                        }
                        else {
                            if (successPage) {
                                var navEntry = {
                                    moduleName: successPage,
                                    clearHistory: true
                                };
                                frameModule.topmost().navigate(navEntry);
                            }
                            else {
                                frameModule.topmost().goBack();
                            }
                            var ret = {
                                accessToken: accessToken,
                                refreshToken: refreshToken
                            };
                            resolve(ret);
                        }
                    });
                }
                catch (er) {
                    console.error('getOAuthAccessToken error occurred...');
                    console.dir(er);
                    reject(er);
                }
            }
        };
        frameModule.topmost().navigate(authPage.loginPageFunc);
    });
}
exports.loginViaAuthorizationCodeFlow = loginViaAuthorizationCodeFlow;
/**
 * Generate a fully formed uri to use for authentication based on the supplied resource argument
 * @return {string} a fully formed uri with which authentication can be completed
 */
function getAuthUrl() {
    return exports.credentials.authority + exports.credentials.authorize_endpoint +
        '?client_id=' + exports.credentials.client_id +
        '&response_type=code' +
        '&redirect_uri=' + exports.credentials.redirect_uri +
        '&scope=' + exports.credentials.scope +
        '&response_mode=query' +
        '&nonce=' + 'aaf77e7d-21ad-4e61-9ec7-d8c403bd6054' +
        '&state=abcd';
}
exports.getAuthUrl = getAuthUrl;
/**
 * Gets a token for a given resource.
 * @param {string} code An authorization code returned from a client.
 * @param {AcquireTokenCallback} callback The callback function.
 */
function getTokenFromCode(code, callback) {
    var oauth2 = new tns_oauth_1.TnsOAuth(exports.credentials.client_id, exports.credentials.authority, exports.credentials.authorize_endpoint, exports.credentials.token_endpoint);
    oauth2.getOAuthAccessToken(code, {
        grant_type: 'authorization_code',
        redirect_uri: exports.credentials.redirect_uri,
        response_mode: 'form_post',
        nonce: 'aaf77e7d-21ad-4e61-9ec7-d8c403bd6055',
        state: 'abcd'
    }, function (e, accessToken, refreshToken) {
        callback(e, accessToken, refreshToken);
    });
}
exports.getTokenFromCode = getTokenFromCode;
/**
 * Gets a new access token via a previously issued refresh token.
 * @param {string} refreshToken A refresh token returned in a token response
 *                       from a previous result of an authentication flow.
 * @param {AcquireTokenCallback} callback The callback function.
 */
function getTokenFromRefreshToken(refreshToken, callback) {
    var oauth2 = new tns_oauth_1.TnsOAuth(exports.credentials.client_id, exports.credentials.authority, exports.credentials.authorize_endpoint, exports.credentials.token_endpoint);
    oauth2.getOAuthAccessToken(refreshToken, {
        grant_type: 'refresh_token',
        redirect_uri: exports.credentials.redirect_uri,
        response_mode: 'form_post',
        nonce: 'aaf77e7d-21ad-4e61-9ec7-d8c403bd6056',
        state: 'abcd'
    }, function (e, accessToken) {
        callback(e, accessToken);
    });
}
exports.getTokenFromRefreshToken = getTokenFromRefreshToken;
exports.ACCESS_TOKEN_CACHE_KEY = 'ACCESS_TOKEN_CACHE_KEY';
exports.REFRESH_TOKEN_CACHE_KEY = 'REFRESH_TOKEN_CACHE_KEY';
//# sourceMappingURL=auth-helper2.js.map
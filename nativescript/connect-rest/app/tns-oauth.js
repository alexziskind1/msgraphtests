"use strict";
var querystring = require('querystring');
var URL = require('url');
var http = require('http');
var frameModule = require('ui/frame');
var uuid = require('./tns-oauth-uuid');
var tns_oauth_page_provider_1 = require('./tns-oauth-page-provider');
exports.ACCESS_TOKEN_CACHE_KEY = 'ACCESS_TOKEN_CACHE_KEY';
exports.REFRESH_TOKEN_CACHE_KEY = 'REFRESH_TOKEN_CACHE_KEY';
/**
 * Gets a token for a given resource.
 */
function getTokenFromCode(credentials, code) {
    var oauth2 = new TnsOAuth(credentials.clientId, credentials.clientSecret, credentials.authority, credentials.tokenEndpointBase, credentials.authorizeEndpoint, credentials.tokenEndpoint);
    var oauthParams = {
        grant_type: 'authorization_code',
        redirect_uri: credentials.redirectUri,
        response_mode: 'form_post',
        nonce: uuid.doit(),
        state: 'abcd'
    };
    return oauth2.getOAuthAccessToken(code, oauthParams);
}
/**
 * Gets a new access token via a previously issued refresh token.
 */
function getTokenFromRefreshToken(credentials, refreshToken) {
    var oauth2 = new TnsOAuth(credentials.clientId, credentials.clientSecret, credentials.authority, credentials.tokenEndpointBase, credentials.authorizeEndpoint, credentials.tokenEndpoint);
    var oauthParams = {
        grant_type: 'refresh_token',
        redirect_uri: credentials.redirectUri,
        response_mode: 'form_post',
        nonce: uuid.doit(),
        state: 'abcd'
    };
    return oauth2.getOAuthAccessToken(refreshToken, oauthParams);
}
exports.getTokenFromRefreshToken = getTokenFromRefreshToken;
/**
 * Generate a fully formed uri to use for authentication based on the supplied resource argument
 * @return {string} a fully formed uri with which authentication can be completed
 */
function getAuthUrl(credentials) {
    return credentials.authority + credentials.authorizeEndpoint +
        '?client_id=' + credentials.clientId +
        '&response_type=code' +
        '&redirect_uri=' + credentials.redirectUri +
        '&scope=' + credentials.scope +
        '&response_mode=query' +
        '&nonce=' + uuid.doit() +
        '&state=abcd';
}
exports.getAuthUrl = getAuthUrl;
function loginViaAuthorizationCodeFlow(credentials, successPage) {
    return new Promise(function (resolve, reject) {
        var navCount = 0;
        var checkCodeIntercept = function (webView, error) {
            var retStr = '';
            if (error && error.userInfo && error.userInfo.allValues && error.userInfo.allValues.count > 0) {
                retStr = error.userInfo.allValues[0].absoluteString;
            }
            else {
                retStr = webView.request.URL.absoluteString;
            }
            var qsObj = querystring.parse(URL.parse(retStr).query);
            var codeStr = qsObj['code'] ? qsObj['code'] : qsObj['xsrfsign'];
            if (codeStr) {
                try {
                    getTokenFromCode(credentials, codeStr)
                        .then(function (response) {
                        if (successPage && navCount === 0) {
                            var navEntry = {
                                moduleName: successPage,
                                clearHistory: true
                            };
                            frameModule.topmost().navigate(navEntry);
                        }
                        else {
                            frameModule.topmost().goBack();
                        }
                        navCount++;
                        resolve(response);
                    })
                        .catch(function (er) {
                        reject(er);
                    });
                }
                catch (er) {
                    console.error('getOAuthAccessToken error occurred...');
                    console.dir(er);
                    reject(er);
                }
            }
        };
        /*
                let checkApproval = (webView) => {
                    var retStr = webView.request.URL.absoluteString;
                    var codeStr = '';
        
                    if (retStr.indexOf('code=') > 0) {
                        var idx1 = retStr.indexOf('code=');
                        var idx2 = retStr.indexOf('&');
                        codeStr = retStr.substring(idx1 + 5, idx2);
                    }
        
                    if (retStr.indexOf('xsrfsign=') > 0) {
                        var idx1 = retStr.indexOf('xsrfsign=');
                        codeStr = retStr.substring(idx1 + 9, retStr.length);
                    }
        
                    if (codeStr != '') {
                        try {
                            getTokenFromCode(credentials, codeStr)
                            .then((response: TnsOAuthTokenResult)=>{
                                if (successPage && navCount === 0) {
                                    let navEntry: frameModule.NavigationEntry = {
                                        moduleName: successPage,
                                      clearHistory: true
                                    };
                                    frameModule.topmost().navigate(navEntry);
                                } else {
                                    frameModule.topmost().goBack();
                                }
                                navCount++;
                                resolve(response);
                            })
                            .catch((er)=>{
                                reject(er);
                            });
        
                        } catch(er) {
                            console.error('getOAuthAccessToken error occurred...');
                            console.dir(er);
                            reject(er);
                        }
                    }
                };
        
                let checkInterceptError = (webView, error) => {
                    var retStr = '';
                    try {
                        if (error && error.userInfo && error.userInfo.allValues && error.userInfo.allValues.count > 0) {
                            retStr = error.userInfo.allValues[0].absoluteString;
                        }
                    }
                    catch(er) {
                        console.error('retStr error occurred...');
                        console.dir(er);
                    }
        
                    if (retStr.indexOf('code=') > 0) {
                        var idx1 = retStr.indexOf('code=');
                        var idx2 = retStr.indexOf('&');
                        var codeStr = retStr.substring(idx1 + 5, idx2);
                        
                        try {
                          getTokenFromCode(credentials, codeStr)
                            .then((response: TnsOAuthTokenResult)=>{
                                if (successPage && navCount === 0) {
                                  let navEntry: frameModule.NavigationEntry = {
                                      moduleName: successPage,
                                      clearHistory: true
                                  };
                                  frameModule.topmost().navigate(navEntry);
                                } else {
                                  frameModule.topmost().goBack();
                                }
                                navCount++;
                                resolve(response);
                            })
                            .catch((er)=>{
                              reject(er);
                            });
        
                        } catch(er) {
                            console.error('getOAuthAccessToken error occurred...');
                            console.dir(er);
                            reject(er);
                        }
                    }
                };
                */
        var authPage = new tns_oauth_page_provider_1.TnsOAuthPageProvider(checkCodeIntercept, getAuthUrl(credentials));
        frameModule.topmost().navigate(function () { return authPage.loginPageFunc(); });
    });
}
exports.loginViaAuthorizationCodeFlow = loginViaAuthorizationCodeFlow;
var TnsOAuth = (function () {
    function TnsOAuth(clientId, clientSecret, baseSite, baseSiteToken, authorizePath, accessTokenPath, customHeaders) {
        this._clientId = clientId;
        this._clientSecret = clientSecret;
        this._baseSite = baseSite;
        this._baseSiteToken = baseSiteToken;
        this._authorizeUrl = authorizePath || "/oauth/authorize";
        this._accessTokenUrl = accessTokenPath || "/oauth/access_token";
        this._accessTokenName = "access_token";
        this._authMethod = "Bearer";
        this._customHeaders = customHeaders || {};
        this._useAuthorizationHeaderForGET = false;
    }
    Object.defineProperty(TnsOAuth.prototype, "accessTokenUrl", {
        get: function () {
            if (this._baseSiteToken && this._baseSiteToken != '') {
                return this._baseSiteToken + this._accessTokenUrl;
            }
            else {
                return this._baseSite + this._accessTokenUrl; /* + "?" + querystring.stringify(params); */
            }
        },
        enumerable: true,
        configurable: true
    });
    // This 'hack' method is required for sites that don't use
    // 'access_token' as the name of the access token (for requests).
    // ( http://tools.ietf.org/html/draft-ietf-oauth-v2-16#section-7 )
    // it isn't clear what the correct value should be atm, so allowing
    // for specific (temporary?) override for now.
    TnsOAuth.prototype.setAccessTokenName = function (name) {
        this._accessTokenName = name;
    };
    // Sets the authorization method for Authorization header.
    // e.g. Authorization: Bearer <token>  # "Bearer" is the authorization method.
    TnsOAuth.prototype.setAuthMethod = function (authMethod) {
        this._authMethod = authMethod;
    };
    ;
    // If you use the OAuth2 exposed 'get' method (and don't construct your own _request call )
    // this will specify whether to use an 'Authorize' header instead of passing the access_token as a query parameter
    TnsOAuth.prototype.useAuthorizationHeaderforGET = function (useIt) {
        this._useAuthorizationHeaderForGET = useIt;
    };
    // Build the authorization header. In particular, build the part after the colon.
    // e.g. Authorization: Bearer <token>  # Build "Bearer <token>"
    TnsOAuth.prototype.buildAuthHeader = function (token) {
        return this._authMethod + ' ' + token;
    };
    ;
    TnsOAuth.prototype.getAuthorizeUrl = function (params) {
        var params = params || {};
        params['client_id'] = this._clientId;
        return this._baseSite + this._authorizeUrl + "?" + querystring.stringify(params);
    };
    TnsOAuth.prototype.getOAuthAccessToken = function (code, params) {
        var _this = this;
        console.log('called TnsOAuth.getOAuthAccessToken');
        var params = params || {};
        params['client_id'] = this._clientId;
        if (this._clientSecret && this._clientSecret != '') {
            params['client_secret'] = this._clientSecret;
        }
        var codeParam = (params.grant_type === 'refresh_token') ? 'refresh_token' : 'code';
        params[codeParam] = code;
        var post_data = querystring.stringify(params);
        var post_headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        };
        return new Promise(function (resolve, reject) {
            _this._request("POST", _this.accessTokenUrl, post_headers, post_data, null)
                .then(function (response) {
                var results;
                try {
                    // As of http://tools.ietf.org/html/draft-ietf-oauth-v2-07
                    // responses should be in JSON
                    results = response.content.toJSON();
                }
                catch (e) {
                    // .... However both Facebook + Github currently use rev05 of the spec
                    // and neither seem to specify a content-type correctly in their response headers :(
                    // clients of these services will suffer a *minor* performance cost of the exception
                    // being thrown
                    results = querystring.parse(response.content.toString());
                }
                var access_token = results["access_token"];
                var refresh_token = results["refresh_token"];
                delete results["refresh_token"];
                resolve({ accessToken: access_token, refreshToken: refresh_token });
            })
                .catch(function (er) {
                reject(er);
            });
        });
    };
    TnsOAuth.prototype._request = function (method, url, headers, post_body, access_token) {
        var parsedUrl = URL.parse(url, true);
        var realHeaders = {};
        for (var key in this._customHeaders) {
            realHeaders[key] = this._customHeaders[key];
        }
        if (headers) {
            for (var key in headers) {
                realHeaders[key] = headers[key];
            }
        }
        realHeaders['Host'] = parsedUrl.host;
        if (access_token && !('Authorization' in realHeaders)) {
            if (!parsedUrl.query) {
                parsedUrl.query = {};
            }
            parsedUrl.query[this._accessTokenName] = access_token;
        }
        var queryStr = querystring.stringify(parsedUrl.query);
        if (queryStr) {
            queryStr = "?" + queryStr;
        }
        var options = {
            host: parsedUrl.hostname,
            port: parsedUrl.port,
            path: parsedUrl.pathname + queryStr,
            method: method,
            headers: realHeaders
        };
        return this._executeRequest(options, url, post_body);
    };
    TnsOAuth.prototype._executeRequest = function (options, url, post_body) {
        var promise = http.request({
            url: url,
            method: options.method,
            headers: options.headers,
            content: post_body
        });
        return promise;
    };
    return TnsOAuth;
}());
//# sourceMappingURL=tns-oauth.js.map
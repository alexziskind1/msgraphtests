//import * as uuid from 'node-uuid';
import { TnsOAuth } from './tns-oauth';
import { TokenResult } from './auth-interfaces';
import * as frameModule from 'ui/frame';
import * as authPage from './auth-page';

// The application registration (must match Azure AD config)
export var credentials = {
  authority: 'https://login.microsoftonline.com/common',
  authorize_endpoint: '/oauth2/v2.0/authorize',
  token_endpoint: '/oauth2/v2.0/token',
  client_id: 'e392f6aa-da5c-434d-a42d-a0e0a27d3964',
  redirect_uri: 'urn:ietf:wg:oauth:2.0:oob',
  scope: 'Files.ReadWrite%20offline_access'
};


export function loginViaAuthorizationCodeFlow(successPage?: string) {
    return new Promise((resolve, reject) => {
        authPage.checkInterceptError = (webView, error) => {
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
                    getTokenFromCode(codeStr, (e, accessToken: string, refreshToken: string)=>{
                      if (e) {
                        reject(e);
                      } else {
                        if (successPage) {
                          let navEntry: frameModule.NavigationEntry = {
                              moduleName: successPage,
                             clearHistory: true
                          };

                          frameModule.topmost().navigate(navEntry);
                        } else {
                          frameModule.topmost().goBack();
                        }

                        var ret: TokenResult = {
                            accessToken: accessToken,
                            refreshToken: refreshToken
                        };

                        resolve(ret);
                      }

                    });
                } catch(er) {
                    console.error('getOAuthAccessToken error occurred...');
                    console.dir(er);
                    reject(er);
                }

            } 
        };

        frameModule.topmost().navigate(authPage.loginPageFunc);
    });
}

/**
 * Generate a fully formed uri to use for authentication based on the supplied resource argument
 * @return {string} a fully formed uri with which authentication can be completed
 */
export function getAuthUrl() {
  return credentials.authority + credentials.authorize_endpoint +
    '?client_id=' + credentials.client_id +
    '&response_type=code' +
    '&redirect_uri=' + credentials.redirect_uri +
    '&scope=' + credentials.scope +
    '&response_mode=query' +
    '&nonce=' + 'aaf77e7d-21ad-4e61-9ec7-d8c403bd6054' +
    '&state=abcd';
}

/**
 * Gets a token for a given resource.
 * @param {string} code An authorization code returned from a client.
 * @param {AcquireTokenCallback} callback The callback function.
 */
export function getTokenFromCode(code, callback) {
  var oauth2 = new TnsOAuth(
    credentials.client_id,
    credentials.authority,
    credentials.authorize_endpoint,
    credentials.token_endpoint
  );

  oauth2.getOAuthAccessToken(
    code,
    {
      grant_type: 'authorization_code',
      redirect_uri: credentials.redirect_uri,
      response_mode: 'form_post',
      nonce: 'aaf77e7d-21ad-4e61-9ec7-d8c403bd6055',
      state: 'abcd'
    },
    (e, accessToken, refreshToken) => {
      callback(e, accessToken, refreshToken);
    }
  );
}

/**
 * Gets a new access token via a previously issued refresh token.
 * @param {string} refreshToken A refresh token returned in a token response
 *                       from a previous result of an authentication flow.
 * @param {AcquireTokenCallback} callback The callback function.
 */
export function getTokenFromRefreshToken(refreshToken, callback) {
  var oauth2 = new TnsOAuth(
    credentials.client_id,
    credentials.authority,
    credentials.authorize_endpoint,
    credentials.token_endpoint
  );

  oauth2.getOAuthAccessToken(
    refreshToken,
    {
      grant_type: 'refresh_token',
      redirect_uri: credentials.redirect_uri,
      response_mode: 'form_post',
      nonce: 'aaf77e7d-21ad-4e61-9ec7-d8c403bd6056',
      state: 'abcd'
    },
    (e, accessToken) => {
      callback(e, accessToken);
    }
  );
}

export var ACCESS_TOKEN_CACHE_KEY = 'ACCESS_TOKEN_CACHE_KEY';
export var REFRESH_TOKEN_CACHE_KEY = 'REFRESH_TOKEN_CACHE_KEY';
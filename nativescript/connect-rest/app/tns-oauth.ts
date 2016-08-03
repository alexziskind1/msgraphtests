import * as querystring from 'querystring';
import * as URL from 'url';
import * as http from 'http';
import * as trace from "trace";
import * as frameModule from 'ui/frame';
import * as uuid from './auth-uuid';

import { TnsOAuthCredentials, TnsOAuthTokenResult } from './tns-oauth-interfaces';
import { TnsOAuthPageProvider } from './tns-oauth-page-provider';

export var ACCESS_TOKEN_CACHE_KEY = 'ACCESS_TOKEN_CACHE_KEY';
export var REFRESH_TOKEN_CACHE_KEY = 'REFRESH_TOKEN_CACHE_KEY';

/**
 * Gets a token for a given resource.
 */
function getTokenFromCode(credentials: TnsOAuthCredentials, code: string) : Promise<TnsOAuthTokenResult> {
  let oauth2 = new TnsOAuth(
    credentials.clientId,
    credentials.authority,
    credentials.authorizeEndpoint,
    credentials.tokenEndpoint
  );

  let oauthParams = {
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
export function getTokenFromRefreshToken(credentials: TnsOAuthCredentials, refreshToken: string) : Promise<TnsOAuthTokenResult> {
  var oauth2 = new TnsOAuth(
    credentials.clientId,
    credentials.authority,
    credentials.authorizeEndpoint,
    credentials.tokenEndpoint
  );

  let oauthParams = {
      grant_type: 'refresh_token',
      redirect_uri: credentials.redirectUri,
      response_mode: 'form_post',
      nonce: uuid.doit(),
      state: 'abcd'
  };

  return oauth2.getOAuthAccessToken(refreshToken, oauthParams);
}

/**
 * Generate a fully formed uri to use for authentication based on the supplied resource argument
 * @return {string} a fully formed uri with which authentication can be completed
 */
export function getAuthUrl(credentials: TnsOAuthCredentials) : string {
  return credentials.authority + credentials.authorizeEndpoint +
    '?client_id=' + credentials.clientId +
    '&response_type=code' +
    '&redirect_uri=' + credentials.redirectUri +
    '&scope=' + credentials.scope +
    '&response_mode=query' +
    '&nonce=' + uuid.doit() +
    '&state=abcd';
}

export function loginViaAuthorizationCodeFlow(credentials: TnsOAuthCredentials, successPage?: string) : Promise<TnsOAuthTokenResult> {
    return new Promise((resolve, reject) => {
        var navCount = 0;
      
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

        let authPage = new TnsOAuthPageProvider(checkInterceptError, getAuthUrl(credentials));
        frameModule.topmost().navigate(()=>{return authPage.loginPageFunc()});
    });
}

class TnsOAuth {
    private _clientId: string;
    private _baseSite: string;
    private _authorizeUrl: string;
    private _accessTokenUrl: string;
    private _accessTokenName: string;
    private _authMethod: string;
    private _customHeaders: any;
    private _useAuthorizationHeaderForGET: boolean;

    constructor(clientId: string, 
                baseSite: string, 
                authorizePath: string, 
                accessTokenPath: string, 
                customHeaders?: any) {
        this._clientId= clientId;
        this._baseSite= baseSite;
        this._authorizeUrl= authorizePath || "/oauth/authorize";
        this._accessTokenUrl= accessTokenPath || "/oauth/access_token";
        this._accessTokenName= "access_token";
        this._authMethod= "Bearer";
        this._customHeaders = customHeaders || {};
        this._useAuthorizationHeaderForGET= false;
    }

    get accessTokenUrl(): string {
        return this._baseSite + this._accessTokenUrl; /* + "?" + querystring.stringify(params); */
    }

    // This 'hack' method is required for sites that don't use
    // 'access_token' as the name of the access token (for requests).
    // ( http://tools.ietf.org/html/draft-ietf-oauth-v2-16#section-7 )
    // it isn't clear what the correct value should be atm, so allowing
    // for specific (temporary?) override for now.
    public setAccessTokenName(name) {
        this._accessTokenName = name;
    }

    // Sets the authorization method for Authorization header.
    // e.g. Authorization: Bearer <token>  # "Bearer" is the authorization method.
    public setAuthMethod(authMethod) {
        this._authMethod = authMethod;
    };

    // If you use the OAuth2 exposed 'get' method (and don't construct your own _request call )
    // this will specify whether to use an 'Authorize' header instead of passing the access_token as a query parameter
    public useAuthorizationHeaderforGET(useIt) {
        this._useAuthorizationHeaderForGET = useIt;
    }

    // Build the authorization header. In particular, build the part after the colon.
    // e.g. Authorization: Bearer <token>  # Build "Bearer <token>"
    public buildAuthHeader(token) {
        return this._authMethod + ' ' + token;
    };

    public getAuthorizeUrl(params) {
        var params= params || {};
        params['client_id'] = this._clientId;
        return this._baseSite + this._authorizeUrl + "?" + querystring.stringify(params);
    }

    public getOAuthAccessToken(code, params) : Promise<TnsOAuthTokenResult> {
        console.log('called TnsOAuth.getOAuthAccessToken');
        var params= params || {};
        params['client_id'] = this._clientId;

        var codeParam = (params.grant_type === 'refresh_token') ? 'refresh_token' : 'code';
        params[codeParam]= code;

        var post_data= querystring.stringify( params );
        var post_headers= {
            'Content-Type': 'application/x-www-form-urlencoded'
        };

        return new Promise<TnsOAuthTokenResult>((resolve, reject)=>{
            this._request("POST", this.accessTokenUrl, post_headers, post_data, null)
            .then((response:http.HttpResponse)=>{
                var results;
                try {
                    // As of http://tools.ietf.org/html/draft-ietf-oauth-v2-07
                    // responses should be in JSON
                    results = response.content.toJSON();
                }
                catch(e) {
                    // .... However both Facebook + Github currently use rev05 of the spec
                    // and neither seem to specify a content-type correctly in their response headers :(
                    // clients of these services will suffer a *minor* performance cost of the exception
                    // being thrown
                    results = querystring.parse(response.content.toString());
                }
                var access_token = results["access_token"];
                var refresh_token = results["refresh_token"];
                delete results["refresh_token"];
                resolve({accessToken: access_token, refreshToken: refresh_token});
            })
            .catch((er)=>{
                reject(er);
            });
        });
    }

    private _request(method, url, headers, post_body, access_token) : Promise<http.HttpResponse> {
        var parsedUrl = URL.parse(url, true);

        var realHeaders= {};
        for (var key in this._customHeaders) {
            realHeaders[key] = this._customHeaders[key];
        }
        if (headers) {
            for(var key in headers) {
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
            queryStr =  "?" + queryStr;
        }
        var options = {
            host: parsedUrl.hostname,
            port: parsedUrl.port,
            path: parsedUrl.pathname + queryStr,
            method: method,
            headers: realHeaders
        };

        return this._executeRequest(options, url, post_body);
    }

    private _executeRequest(options, url, post_body) : Promise<http.HttpResponse> {
        var promise = http.request({
            url: url,
            method: options.method,
            headers: options.headers,
            content: post_body
        });
        return promise;
    }
}
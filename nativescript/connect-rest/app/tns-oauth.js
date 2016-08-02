"use strict";
var querystring = require('querystring');
var URL = require('url');
var http = require('http');
var TnsOAuth = (function () {
    function TnsOAuth(clientId, baseSite, authorizePath, accessTokenPath, customHeaders) {
        this._clientId = clientId;
        this._baseSite = baseSite;
        this._authorizeUrl = authorizePath || "/oauth/authorize";
        this._accessTokenUrl = accessTokenPath || "/oauth/access_token";
        this._accessTokenName = "access_token";
        this._authMethod = "Bearer";
        this._customHeaders = customHeaders || {};
        this._useAuthorizationHeaderForGET = false;
    }
    Object.defineProperty(TnsOAuth.prototype, "accessTokenUrl", {
        get: function () {
            return this._baseSite + this._accessTokenUrl; /* + "?" + querystring.stringify(params); */
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
    TnsOAuth.prototype.getOAuthAccessToken = function (code, params, callback) {
        console.log('called TnsOAuth.getOAuthAccessToken');
        var params = params || {};
        params['client_id'] = this._clientId;
        var codeParam = (params.grant_type === 'refresh_token') ? 'refresh_token' : 'code';
        params[codeParam] = code;
        var post_data = querystring.stringify(params);
        var post_headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        };
        this._request("POST", this.accessTokenUrl, post_headers, post_data, null, function (error, data, response) {
            if (error) {
                callback(error);
            }
            else {
                var results;
                try {
                    // As of http://tools.ietf.org/html/draft-ietf-oauth-v2-07
                    // responses should be in JSON
                    results = JSON.parse(data);
                }
                catch (e) {
                    // .... However both Facebook + Github currently use rev05 of the spec
                    // and neither seem to specify a content-type correctly in their response headers :(
                    // clients of these services will suffer a *minor* performance cost of the exception
                    // being thrown
                    results = querystring.parse(data);
                }
                var access_token = results["access_token"];
                var refresh_token = results["refresh_token"];
                delete results["refresh_token"];
                callback(null, access_token, refresh_token, results); // callback results =-=
            }
        });
    };
    TnsOAuth.prototype._request = function (method, url, headers, post_body, access_token, callback) {
        var parsedUrl = URL.parse(url, true);
        /*
        if( parsedUrl.protocol == "https:" && !parsedUrl.port ) {
            parsedUrl.port= 443;
        }*/
        //var http_library = this._chooseHttpLibrary( parsedUrl );
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
        /*
        if (!realHeaders['User-Agent']) {
            realHeaders['User-Agent'] = 'tns-oauth';
        }
        */
        /*
        if (post_body) {
            if (Buffer.isBuffer(post_body)) {
                realHeaders["Content-Length"]= post_body.length;
            } else {
                realHeaders["Content-Length"]= Buffer.byteLength(post_body);
            }
        } else {
            realHeaders["Content-length"]= 0;
        }
        */
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
        this._executeRequest(options, post_body, callback);
    };
    TnsOAuth.prototype._executeRequest = function (options, post_body, callback) {
        var callbackCalled = false;
        var request = http.request({
            url: this.accessTokenUrl,
            method: options.method,
            headers: options.headers,
            content: post_body
        })
            .then(function (response) {
            callback(response);
        })
            .catch(function (er) {
            callbackCalled = true;
            callback(er);
        });
    };
    return TnsOAuth;
}());
exports.TnsOAuth = TnsOAuth;
//# sourceMappingURL=tns-oauth.js.map
"use strict";
var common = require("ui/web-view");
var trace = require("trace");
var querystring = require('querystring');
var URL = require('url');
var authHelper2Module = require('./auth-helper2');
var http = require('http');
var MyWebViewDelegateImpl = (function (_super) {
    __extends(MyWebViewDelegateImpl, _super);
    function MyWebViewDelegateImpl(customHeaders) {
        _super.call(this);
        this._clientId = authHelper2Module.credentials.client_id;
        this._baseSite = authHelper2Module.credentials.authority;
        this._authorizeUrl = authHelper2Module.credentials.authorize_endpoint;
        this._accessTokenUrl = authHelper2Module.credentials.token_endpoint;
        this._accessTokenName = "access_token";
        this._authMethod = "Bearer";
        this._customHeaders = customHeaders || {};
        this._useAuthorizationHeaderForGET = false;
    }
    MyWebViewDelegateImpl.initWithOwner = function (owner) {
        var delegate = new MyWebViewDelegateImpl();
        delegate._owner = owner;
        delegate.oldDelegate = owner.get().ios.delegate;
        return delegate;
        /*
        let delegate2 = <MyWebViewDelegateImpl>MyWebViewDelegateImpl.new();
        delegate2._owner = owner;
        return delegate2;
        */
    };
    MyWebViewDelegateImpl.prototype.webViewShouldStartLoadWithRequestNavigationType = function (webView, request, navigationType) {
        var owner = this._owner.get();
        if (owner && request.URL) {
            var navTypeIndex = common.WebView.navigationTypes.indexOf("other");
            switch (navigationType) {
                case UIWebViewNavigationType.LinkClicked:
                    navTypeIndex = common.WebView.navigationTypes.indexOf("linkClicked");
                    break;
                case UIWebViewNavigationType.FormSubmitted:
                    navTypeIndex = common.WebView.navigationTypes.indexOf("formSubmitted");
                    break;
                case UIWebViewNavigationType.BackForward:
                    navTypeIndex = common.WebView.navigationTypes.indexOf("backForward");
                    break;
                case UIWebViewNavigationType.Reload:
                    navTypeIndex = common.WebView.navigationTypes.indexOf("reload");
                    break;
                case UIWebViewNavigationType.FormResubmitted:
                    navTypeIndex = common.WebView.navigationTypes.indexOf("formResubmitted");
                    break;
            }
            if (trace.enabled) {
                trace.write("UIWebViewDelegateClass.webViewShouldStartLoadWithRequestNavigationType(" + request.URL.absoluteString + ", " + navigationType + ")", trace.categories.Debug);
            }
            owner._onLoadStarted(request.URL.absoluteString, common.WebView.navigationTypes[navTypeIndex]);
        }
        return true;
    };
    MyWebViewDelegateImpl.prototype.webViewDidStartLoad = function (webView) {
        if (trace.enabled) {
            trace.write("UIWebViewDelegateClass.webViewDidStartLoad(" + webView.request.URL + ")", trace.categories.Debug);
        }
    };
    MyWebViewDelegateImpl.prototype.webViewDidFinishLoad = function (webView) {
        console.log('webViewDidFinishLoad');
        if (trace.enabled) {
            trace.write("UIWebViewDelegateClass.webViewDidFinishLoad(" + webView.request.URL + ")", trace.categories.Debug);
        }
        var owner = this._owner.get();
        if (owner) {
            owner._onLoadFinished(webView.request.URL.absoluteString);
        }
    };
    MyWebViewDelegateImpl.prototype.webViewDidFailLoadWithError = function (webView, error) {
        console.log('webViewDidFailLoadWithError');
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
                this.getOAuthAccessToken(codeStr, null, function () {
                    console.log('got token called');
                });
            }
            catch (er) {
                console.error('getOAuthAccessToken error occurred...');
                console.dir(er);
            }
        }
        else {
            var owner = this._owner.get();
            if (owner) {
                var url = owner.url;
                if (webView.request && webView.request.URL) {
                    url = webView.request.URL.absoluteString;
                }
                if (trace.enabled) {
                    trace.write("UIWebViewDelegateClass.webViewDidFailLoadWithError(" + error.localizedDescription + ")", trace.categories.Debug);
                }
                if (owner) {
                    owner._onLoadFinished(url, error.localizedDescription);
                }
            }
        }
    };
    MyWebViewDelegateImpl.prototype.getAccessTokenUrl = function () {
        //return this._baseSite + this._accessTokenUrl; /* + "?" + querystring.stringify(params); */
        return authHelper2Module.credentials.authority +
            authHelper2Module.credentials.token_endpoint;
    };
    MyWebViewDelegateImpl.prototype.getOAuthAccessToken = function (code, params, callback) {
        var params = params || {};
        params['grant_type'] = 'authorization_code';
        params['client_id'] = authHelper2Module.credentials.client_id;
        //params['client_secret'] = authHelper2Module.credentials.client_secret;
        params['redirect_uri'] = authHelper2Module.credentials.redirect_uri;
        var codeParam = (params.grant_type === 'refresh_token') ? 'refresh_token' : 'code';
        params[codeParam] = code;
        var post_data = querystring.stringify(params);
        var post_headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        };
        this.request("POST", this.getAccessTokenUrl(), post_headers, post_data, null, function (error, data, response) {
            if (error)
                callback(error);
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
    MyWebViewDelegateImpl.prototype.request = function (method, url, headers, post_body, access_token, callback) {
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
        if (!realHeaders['User-Agent']) {
            realHeaders['User-Agent'] = 'Node-oauth';
        }
        /*
        if( post_body ) {
            if ( Buffer.isBuffer(post_body) ) {
                realHeaders["Content-Length"]= post_body.length;
            } else {
                realHeaders["Content-Length"]= Buffer.byteLength(post_body);
            }
        } else {
            realHeaders["Content-length"]= 0;
        }
        */
        if (access_token && !('Authorization' in realHeaders)) {
            if (!parsedUrl.query)
                parsedUrl.query = {};
            parsedUrl.query[this._accessTokenName] = access_token;
        }
        var queryStr = querystring.stringify(parsedUrl.query);
        if (queryStr)
            queryStr = "?" + queryStr;
        var options = {
            host: parsedUrl.hostname,
            port: parsedUrl.port,
            path: parsedUrl.pathname + queryStr,
            method: method,
            headers: realHeaders
        };
        this.executeRequest(options, post_body, callback);
    };
    MyWebViewDelegateImpl.prototype.executeRequest = function (options, post_body, callback) {
        var result;
        http.request({
            url: this.getAccessTokenUrl(),
            method: options.method,
            headers: options.headers,
            content: post_body
        }).then(function (response) {
            // result = response.content.toJSON();
            console.log(result);
        }, function (e) {
            console.log("Error occurred " + e);
        });
    };
    MyWebViewDelegateImpl.ObjCProtocols = [UIWebViewDelegate];
    return MyWebViewDelegateImpl;
}(NSObject));
exports.MyWebViewDelegateImpl = MyWebViewDelegateImpl;
//# sourceMappingURL=my-webview-delegate.js.map
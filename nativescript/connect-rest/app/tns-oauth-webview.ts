import * as trace from "trace";
import { WebView  } from 'ui/web-view';


export class TnsOAuthWebViewDelegateImpl extends NSObject implements UIWebViewDelegate {
    public static ObjCProtocols = [UIWebViewDelegate];

    private _owner: WeakRef<WebView>;
    private oldDelegate;
    private _checkInterceptError;

    public static initWithOwner(owner: WeakRef<WebView>, checkInterceptError): TnsOAuthWebViewDelegateImpl {
        let delegate = new TnsOAuthWebViewDelegateImpl();
        delegate._owner = owner;
        delegate.oldDelegate = owner.get().ios.delegate;
        delegate._checkInterceptError = checkInterceptError;
        return delegate;
    }

    public webViewShouldStartLoadWithRequestNavigationType(webView: UIWebView, request: NSURLRequest, navigationType: number) {
        let owner = this._owner.get();

        if (owner && request.URL) {
            var navTypeIndex = WebView.navigationTypes.indexOf("other");

            switch (navigationType) {
                case UIWebViewNavigationType.LinkClicked:
                    navTypeIndex = WebView.navigationTypes.indexOf("linkClicked");
                    break;
                case UIWebViewNavigationType.FormSubmitted:
                    navTypeIndex = WebView.navigationTypes.indexOf("formSubmitted");
                    break;
                case UIWebViewNavigationType.BackForward:
                    navTypeIndex = WebView.navigationTypes.indexOf("backForward");
                    break;
                case UIWebViewNavigationType.Reload:
                    navTypeIndex = WebView.navigationTypes.indexOf("reload");
                    break;
                case UIWebViewNavigationType.FormResubmitted:
                    navTypeIndex = WebView.navigationTypes.indexOf("formResubmitted");
                    break;
            }

            if (trace.enabled) {
                trace.write("UIWebViewDelegateClass.webViewShouldStartLoadWithRequestNavigationType(" + request.URL.absoluteString + ", " + navigationType + ")", trace.categories.Debug);
            }
            (<any>owner)._onLoadStarted(request.URL.absoluteString, WebView.navigationTypes[navTypeIndex]);
        }

        return true;
    }

    public webViewDidStartLoad(webView: UIWebView) {
        if (trace.enabled) {
            trace.write("UIWebViewDelegateClass.webViewDidStartLoad(" + webView.request.URL + ")", trace.categories.Debug);
        }
    }

    public webViewDidFinishLoad(webView: UIWebView) {
        console.log('webViewDidFinishLoad');
        if (trace.enabled) {
            trace.write("UIWebViewDelegateClass.webViewDidFinishLoad(" + webView.request.URL + ")", trace.categories.Debug);
        }
        let owner = this._owner.get();
        if (owner) {
            (<any>owner)._onLoadFinished(webView.request.URL.absoluteString);
        }
    }

    public webViewDidFailLoadWithError(webView: UIWebView, error: NSError) {
        if (this._checkInterceptError(webView, error)) {
            if (trace.enabled) {
                trace.write("UIWebViewDelegateClass.webViewDidFailLoadWithError(" + error.localizedDescription + ")", trace.categories.Debug);
                trace.write("UIWebViewDelegateClass.webViewDidFailLoadWithError(checkInterceptError - intercepting)", trace.categories.Debug);
            }
        } else {
            let owner = this._owner.get();
            if (owner) {
                var url = owner.url;
                if (webView.request && webView.request.URL) {
                    url = webView.request.URL.absoluteString;
                }

                if (trace.enabled) {
                    trace.write("UIWebViewDelegateClass.webViewDidFailLoadWithError(" + error.localizedDescription + ")", trace.categories.Debug);
                }
                if (owner) {
                    (<any>owner)._onLoadFinished(url, error.localizedDescription);
                }
            }
        }
    }

/*
    public getAccessTokenUrl() {
        //return this._baseSite + this._accessTokenUrl; 

        return authHelper2Module.credentials.authority + 
                    authHelper2Module.credentials.token_endpoint;
    }
    */

/*
    public getOAuthAccessToken(code, params, callback) {
        var params= params || {};
        params['grant_type'] = 'authorization_code';
        params['client_id'] = authHelper2Module.credentials.client_id;
        //params['client_secret'] = authHelper2Module.credentials.client_secret;
        params['redirect_uri'] = authHelper2Module.credentials.redirect_uri;
        var codeParam = (params.grant_type === 'refresh_token') ? 'refresh_token' : 'code';
        params[codeParam]= code;

        var post_data = querystring.stringify( params );
        var post_headers= {
            'Content-Type': 'application/x-www-form-urlencoded'
        };


        this.request("POST", this.getAccessTokenUrl(), post_headers, post_data, null, function(error, data, response) {
            if( error )  callback(error);
            else {
            var results;
            try {
                // As of http://tools.ietf.org/html/draft-ietf-oauth-v2-07
                // responses should be in JSON
                results= JSON.parse( data );
            }
            catch(e) {
                // .... However both Facebook + Github currently use rev05 of the spec
                // and neither seem to specify a content-type correctly in their response headers :(
                // clients of these services will suffer a *minor* performance cost of the exception
                // being thrown
                results= querystring.parse( data );
            }
            var access_token= results["access_token"];
            var refresh_token= results["refresh_token"];
            delete results["refresh_token"];
            callback(null, access_token, refresh_token, results); // callback results =-=
            }
        });
    }
    */

/*
    public request(method, url, headers, post_body, access_token, callback) {
        var parsedUrl= URL.parse( url, true );

        var realHeaders= {};
        for( var key in this._customHeaders ) {
            realHeaders[key]= this._customHeaders[key];
        }
        if( headers ) {
            for(var key in headers) {
            realHeaders[key] = headers[key];
            }
        }
        realHeaders['Host']= parsedUrl.host;

        if (!realHeaders['User-Agent']) {
            realHeaders['User-Agent'] = 'Node-oauth';
        }
        /*

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
/*
        if( access_token && !('Authorization' in realHeaders)) {
            if( ! parsedUrl.query ) parsedUrl.query= {};
            parsedUrl.query[this._accessTokenName]= access_token;
        }

        var queryStr= querystring.stringify(parsedUrl.query);
        if( queryStr ) queryStr=  "?" + queryStr;
        var options = {
            host:parsedUrl.hostname,
            port: parsedUrl.port,
            path: parsedUrl.pathname + queryStr,
            method: method,
            headers: realHeaders
        };

        this.executeRequest(options, post_body, callback);
    }
    */

/*
    public executeRequest(options, post_body, callback) {
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
    }*/

}
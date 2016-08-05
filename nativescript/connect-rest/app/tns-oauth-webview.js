"use strict";
var TnsOAuthWebViewDelegateImpl = (function (_super) {
    __extends(TnsOAuthWebViewDelegateImpl, _super);
    function TnsOAuthWebViewDelegateImpl() {
        _super.apply(this, arguments);
    }
    //private _checkApproval;
    //private _checkInterceptError;
    TnsOAuthWebViewDelegateImpl.initWithOwner = function (owner, checkCodeIntercept) {
        var delegate = new TnsOAuthWebViewDelegateImpl();
        delegate._owner = owner;
        delegate._origDelegate = owner.get()._delegate;
        delegate._checkCodeIntercept = checkCodeIntercept;
        //delegate._checkApproval = checkApproval;
        //delegate._checkInterceptError = checkInterceptError;
        return delegate;
    };
    TnsOAuthWebViewDelegateImpl.prototype.webViewShouldStartLoadWithRequestNavigationType = function (webView, request, navigationType) {
        return this._origDelegate.webViewShouldStartLoadWithRequestNavigationType(webView, request, navigationType);
        /*
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
        */
    };
    TnsOAuthWebViewDelegateImpl.prototype.webViewDidStartLoad = function (webView) {
        this._origDelegate.webViewDidStartLoad(webView);
        /*
        if (trace.enabled) {
            trace.write("UIWebViewDelegateClass.webViewDidStartLoad(" + webView.request.URL + ")", trace.categories.Debug);
        }
        */
    };
    TnsOAuthWebViewDelegateImpl.prototype.webViewDidFinishLoad = function (webView) {
        this._checkCodeIntercept(webView, null);
        this._origDelegate.webViewDidFinishLoad(webView);
        /*
        if (trace.enabled) {
            trace.write("UIWebViewDelegateClass.webViewDidFinishLoad(" + webView.request.URL + ")", trace.categories.Debug);
        }
        let owner = this._owner.get();
        if (owner) {
            if (this._checkCodeIntercept(webView, null)) {
                if (trace.enabled) {
                    trace.write("UIWebViewDelegateClass.webViewDidFinishLoad(checkApproval- intercepting)", trace.categories.Debug);
                }
            }
            (<any>owner)._onLoadFinished(webView.request.URL.absoluteString);
        }
        */
    };
    TnsOAuthWebViewDelegateImpl.prototype.webViewDidFailLoadWithError = function (webView, error) {
        this._checkCodeIntercept(webView, error);
        this._origDelegate.webViewDidFailLoadWithError(webView, error);
        /*
        if (this._checkCodeIntercept(webView, error)) {
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
        */
    };
    TnsOAuthWebViewDelegateImpl.ObjCProtocols = [UIWebViewDelegate];
    return TnsOAuthWebViewDelegateImpl;
}(NSObject));
exports.TnsOAuthWebViewDelegateImpl = TnsOAuthWebViewDelegateImpl;
//# sourceMappingURL=tns-oauth-webview.js.map
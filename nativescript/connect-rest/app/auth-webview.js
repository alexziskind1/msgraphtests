"use strict";
var common = require("ui/web-view");
var trace = require("trace");
var TnsOAuthWebViewDelegateImpl = (function (_super) {
    __extends(TnsOAuthWebViewDelegateImpl, _super);
    function TnsOAuthWebViewDelegateImpl() {
        _super.apply(this, arguments);
    }
    TnsOAuthWebViewDelegateImpl.initWithOwner = function (owner, checkInterceptError) {
        var delegate = new TnsOAuthWebViewDelegateImpl();
        delegate._owner = owner;
        delegate.oldDelegate = owner.get().ios.delegate;
        delegate._checkInterceptError = checkInterceptError;
        return delegate;
    };
    TnsOAuthWebViewDelegateImpl.prototype.webViewShouldStartLoadWithRequestNavigationType = function (webView, request, navigationType) {
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
    TnsOAuthWebViewDelegateImpl.prototype.webViewDidStartLoad = function (webView) {
        if (trace.enabled) {
            trace.write("UIWebViewDelegateClass.webViewDidStartLoad(" + webView.request.URL + ")", trace.categories.Debug);
        }
    };
    TnsOAuthWebViewDelegateImpl.prototype.webViewDidFinishLoad = function (webView) {
        console.log('webViewDidFinishLoad');
        if (trace.enabled) {
            trace.write("UIWebViewDelegateClass.webViewDidFinishLoad(" + webView.request.URL + ")", trace.categories.Debug);
        }
        var owner = this._owner.get();
        if (owner) {
            owner._onLoadFinished(webView.request.URL.absoluteString);
        }
    };
    TnsOAuthWebViewDelegateImpl.prototype.webViewDidFailLoadWithError = function (webView, error) {
        if (this._checkInterceptError(webView, error)) {
            if (trace.enabled) {
                trace.write("UIWebViewDelegateClass.webViewDidFailLoadWithError(" + error.localizedDescription + ")", trace.categories.Debug);
                trace.write("UIWebViewDelegateClass.webViewDidFailLoadWithError(checkInterceptError - intercepting)", trace.categories.Debug);
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
    TnsOAuthWebViewDelegateImpl.ObjCProtocols = [UIWebViewDelegate];
    return TnsOAuthWebViewDelegateImpl;
}(NSObject));
exports.TnsOAuthWebViewDelegateImpl = TnsOAuthWebViewDelegateImpl;
//# sourceMappingURL=auth-webview.js.map
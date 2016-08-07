"use strict";
var TnsOAuthWebViewDelegateImpl = (function (_super) {
    __extends(TnsOAuthWebViewDelegateImpl, _super);
    function TnsOAuthWebViewDelegateImpl() {
        _super.apply(this, arguments);
    }
    TnsOAuthWebViewDelegateImpl.initWithOwner = function (owner, checkCodeIntercept) {
        var delegate = new TnsOAuthWebViewDelegateImpl();
        delegate._owner = owner;
        delegate._origDelegate = owner.get()._delegate;
        delegate._checkCodeIntercept = checkCodeIntercept;
        return delegate;
    };
    TnsOAuthWebViewDelegateImpl.prototype.webViewShouldStartLoadWithRequestNavigationType = function (webView, request, navigationType) {
        return this._origDelegate.webViewShouldStartLoadWithRequestNavigationType(webView, request, navigationType);
    };
    TnsOAuthWebViewDelegateImpl.prototype.webViewDidStartLoad = function (webView) {
        this._origDelegate.webViewDidStartLoad(webView);
    };
    TnsOAuthWebViewDelegateImpl.prototype.webViewDidFinishLoad = function (webView) {
        this._checkCodeIntercept(webView, null);
        this._origDelegate.webViewDidFinishLoad(webView);
    };
    TnsOAuthWebViewDelegateImpl.prototype.webViewDidFailLoadWithError = function (webView, error) {
        this._checkCodeIntercept(webView, error);
        this._origDelegate.webViewDidFailLoadWithError(webView, error);
    };
    TnsOAuthWebViewDelegateImpl.ObjCProtocols = [UIWebViewDelegate];
    return TnsOAuthWebViewDelegateImpl;
}(NSObject));
exports.TnsOAuthWebViewDelegateImpl = TnsOAuthWebViewDelegateImpl;
//# sourceMappingURL=tns-oauth-webview.js.map
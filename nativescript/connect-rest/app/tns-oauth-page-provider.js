"use strict";
var page_1 = require('ui/page');
var grid_layout_1 = require('ui/layouts/grid-layout');
var stack_layout_1 = require('ui/layouts/stack-layout');
var web_view_1 = require('ui/web-view');
var tns_oauth_webview_1 = require('./tns-oauth-webview');
var TnsOAuthPageProvider = (function () {
    function TnsOAuthPageProvider(checkInterceptError, authUrl) {
        this._checkInterceptError = checkInterceptError;
        this._authUrl = authUrl;
    }
    TnsOAuthPageProvider.prototype.loginPageFunc = function () {
        var wv = new web_view_1.WebView();
        wv._delegate = tns_oauth_webview_1.TnsOAuthWebViewDelegateImpl.initWithOwner(new WeakRef(wv), this._checkInterceptError);
        var grid = new grid_layout_1.GridLayout();
        grid.addChild(wv);
        var stack = new stack_layout_1.StackLayout();
        stack.addChild(grid);
        var page = new page_1.Page();
        page.content = stack;
        wv.url = this._authUrl;
        return page;
    };
    ;
    return TnsOAuthPageProvider;
}());
exports.TnsOAuthPageProvider = TnsOAuthPageProvider;
/*
export function loginPageFunc() {
    let wv = new WebView();
    (<any>wv)._delegate = TnsOAuthWebViewDelegateImpl.initWithOwner(new WeakRef(wv), checkInterceptError);

    let grid = new GridLayout();
    grid.addChild(wv);

    let stack = new StackLayout();
    stack.addChild(grid);

    let page = new Page();
    page.content = stack;

    wv.url = authHelper2Module.getAuthUrl();

    return page;
};
*/ 
//# sourceMappingURL=tns-oauth-page-provider.js.map
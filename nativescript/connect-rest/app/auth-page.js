"use strict";
var page_1 = require('ui/page');
var grid_layout_1 = require('ui/layouts/grid-layout');
var stack_layout_1 = require('ui/layouts/stack-layout');
var web_view_1 = require('ui/web-view');
var auth_webview_1 = require('./auth-webview');
var authHelper2Module = require('./auth-helper2');
function loginPageFunc() {
    var wv = new web_view_1.WebView({ src: 'https://www.github.com' });
    //wv.id = 'tnsoauthWebView';
    //wv.src = 'https://www.github.com';
    wv._delegate = auth_webview_1.TnsOAuthWebViewDelegateImpl.initWithOwner(new WeakRef(wv), exports.checkInterceptError);
    /*
        wv.on(WebView.loadFinishedEvent, (args: LoadEventData) => {
            console.log('webview loadFinishedEvent');
            console.log('webview url: ' + wv.src);
            if (!args.error) {
                this.message = "WebView fnished loading " + args.url;
            } else {
                this.message = "Error loading " + args.url + ": " + args.error;
            }
        });
        */
    var grid = new grid_layout_1.GridLayout();
    grid.addChild(wv);
    /*
        let lbl = new Label();
        lbl.text = 'login';
    */
    var stack = new stack_layout_1.StackLayout();
    //stack.addChild(lbl);
    stack.addChild(grid);
    var page = new page_1.Page();
    page.content = stack;
    /*
    page.on('navigatedTo', (args: EventData)=>{
        console.log('page navigated to');
        let thePage = <Page>args.object;
        let theWv = <WebView>thePage.getViewById('tnsoauthWebView');
        theWv.src = 'https://www.google.com';
        theWv.reload();
    });
    */
    wv.url = authHelper2Module.getAuthUrl();
    return page;
}
exports.loginPageFunc = loginPageFunc;
;
//# sourceMappingURL=auth-page.js.map
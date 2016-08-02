import { Page } from 'ui/page';
import { GridLayout } from 'ui/layouts/grid-layout';
import { StackLayout } from 'ui/layouts/stack-layout';
import { WebView, LoadEventData } from 'ui/web-view';
import { Label } from 'ui/label';
import { EventData } from 'data/observable';
import { TnsOAuthWebViewDelegateImpl } from './auth-webview';
import * as authHelper2Module from './auth-helper2';


//export var success;
//export var error;
export var checkInterceptError;


export function loginPageFunc() {
    let wv = new WebView({ src: 'https://www.github.com' });
    //wv.id = 'tnsoauthWebView';
    //wv.src = 'https://www.github.com';
    (<any>wv)._delegate = TnsOAuthWebViewDelegateImpl.initWithOwner(new WeakRef(wv), checkInterceptError);

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

    let grid = new GridLayout();
    grid.addChild(wv);

/*
    let lbl = new Label();
    lbl.text = 'login';
*/
    let stack = new StackLayout();
    //stack.addChild(lbl);
    stack.addChild(grid);

    let page = new Page();
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
};
import { Page } from 'ui/page';
import { GridLayout } from 'ui/layouts/grid-layout';
import { StackLayout } from 'ui/layouts/stack-layout';
import { WebView } from 'ui/web-view';
import { TnsOAuthWebViewDelegateImpl } from './tns-oauth-webview';


export class TnsOAuthPageProvider {
    private _checkInterceptError: ()=>{};
    private _authUrl: string;

    constructor(checkInterceptError, authUrl) {
        this._checkInterceptError = checkInterceptError;
        this._authUrl = authUrl;
    }

    public loginPageFunc() {
        let wv = new WebView();
        (<any>wv)._delegate = TnsOAuthWebViewDelegateImpl.initWithOwner(new WeakRef(wv), this._checkInterceptError);

        let grid = new GridLayout();
        grid.addChild(wv);

        let stack = new StackLayout();
        stack.addChild(grid);

        let page = new Page();
        page.content = stack;

        wv.url = this._authUrl;

        return page;
    };
}

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
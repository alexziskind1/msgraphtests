import { Page } from 'ui/page';
import { GridLayout } from 'ui/layouts/grid-layout';
import { StackLayout } from 'ui/layouts/stack-layout';
import { WebView } from 'ui/web-view';
import { TnsOAuthWebViewDelegateImpl } from './tns-oauth-webview';


export class TnsOAuthPageProvider {
    private _checkCodeIntercept: ()=>{};
    //private _checkApproval: ()=>{};
    //private _checkInterceptError: ()=>{};
    private _authUrl: string;

    constructor(checkCodeIntercept, authUrl) {
        this._checkCodeIntercept = checkCodeIntercept;
        //this._checkApproval = checkApproval;
        //this._checkInterceptError = checkInterceptError;
        this._authUrl = authUrl;
    }

    public loginPageFunc() {
        let wv = new WebView();
        (<any>wv)._delegate = TnsOAuthWebViewDelegateImpl.initWithOwner(new WeakRef(wv), this._checkCodeIntercept);

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
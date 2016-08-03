import { EventData, Observable } from "data/observable";
import { Page } from "ui/page";
import { WebView, LoadEventData } from "ui/web-view";
//import * as authHelperModule from './auth-helper';
import * as o365AuthHelper from './o365-auth-helper';
import * as tnsOauth from './tns-oauth';
import { MyWebViewDelegateImpl } from './my-webview-delegate';
import * as trace from "trace";


export class LoginPageModel extends Observable {
    private _counter: number;
    private _message: string;
    private _webView: any;

    get message(): string {
        return this._message;
    }
    set message(value: string) {
        if (this._message !== value) {
            this._message = value;
            this.notifyPropertyChange("message", value)
        }
    }

    constructor() {
        super();

        // Initialize default values.
        this._counter = 42;
        //this.updateMessage();

    }

/*
    public login(req, res) {
        if (req.query.code !== undefined) {
            authHelperModule.getTokenFromCode(req.query.code, function (e, accessToken, refreshToken) {
                if (e === null) {
                    // cache the refresh token in a cookie and go back to index
                    res.cookie(authHelperModule.ACCESS_TOKEN_CACHE_KEY, accessToken);
                    res.cookie(authHelperModule.REFRESH_TOKEN_CACHE_KEY, refreshToken);
                    res.redirect('/');
                } else {
                    console.log(JSON.parse(e.data).error_description);
                    res.status(500);
                    res.send();
                }
            });
        } else {
            res.render('login', { auth_url: authHelperModule.getAuthUrl() });
        }
    }
    */


    public onTap() {
        console.log('onTap called');
        this._webView.url = tnsOauth.getAuthUrl(o365AuthHelper.office365Credentials);

    }

    public navigatingTo(args: EventData) {
        console.log('nav to called');
        
        // Get the event sender
        var page = <Page>args.object;
        page.bindingContext = this;

        this._webView = <any> page.getViewById('mywebview'); 

        this._webView._delegate = MyWebViewDelegateImpl.initWithOwner(new WeakRef(this._webView));

        console.log('webview id: ' + this._webView.id);

        this._webView.on(WebView.loadFinishedEvent, (args: LoadEventData) => {

            console.log('webview loadFinishedEvent');
            console.log('webview url: ' + this._webView.url);
            
            if (!args.error) {
                this.message = "WebView finished loading " + args.url;
            }
            else {
                this.message = "Error loading " + args.url + ": " + args.error;
            }

        });
             
        this._webView.on('propertyChange', function (changeArgs) {
            console.log('url prop changed');
            
            console.dir(changeArgs); 
            // Do something with the URL here.
            // E.g. extract the token and hide the WebView.

        });
    }

    
}

var mpm  = new LoginPageModel();
export var navigatingTo = (args) => mpm.navigatingTo(args);
export var onTap = () => mpm.onTap();

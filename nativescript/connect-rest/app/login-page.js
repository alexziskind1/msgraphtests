"use strict";
var observable_1 = require("data/observable");
var web_view_1 = require("ui/web-view");
//import * as authHelperModule from './auth-helper';
var authHelper2Module = require('./auth-helper2');
var my_webview_delegate_1 = require('./my-webview-delegate');
var LoginPageModel = (function (_super) {
    __extends(LoginPageModel, _super);
    function LoginPageModel() {
        _super.call(this);
        // Initialize default values.
        this._counter = 42;
        //this.updateMessage();
    }
    Object.defineProperty(LoginPageModel.prototype, "message", {
        get: function () {
            return this._message;
        },
        set: function (value) {
            if (this._message !== value) {
                this._message = value;
                this.notifyPropertyChange("message", value);
            }
        },
        enumerable: true,
        configurable: true
    });
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
    LoginPageModel.prototype.onTap = function () {
        console.log('onTap called');
        this._webView.url = authHelper2Module.getAuthUrl();
    };
    LoginPageModel.prototype.navigatingTo = function (args) {
        var _this = this;
        console.log('nav to called');
        // Get the event sender
        var page = args.object;
        page.bindingContext = this;
        this._webView = page.getViewById('mywebview');
        this._webView._delegate = my_webview_delegate_1.MyWebViewDelegateImpl.initWithOwner(new WeakRef(this._webView));
        console.log('webview id: ' + this._webView.id);
        this._webView.on(web_view_1.WebView.loadFinishedEvent, function (args) {
            console.log('webview loadFinishedEvent');
            console.log('webview url: ' + _this._webView.url);
            if (!args.error) {
                _this.message = "WebView finished loading " + args.url;
            }
            else {
                _this.message = "Error loading " + args.url + ": " + args.error;
            }
        });
        this._webView.on('propertyChange', function (changeArgs) {
            console.log('url prop changed');
            console.dir(changeArgs);
            // Do something with the URL here.
            // E.g. extract the token and hide the WebView.
        });
    };
    return LoginPageModel;
}(observable_1.Observable));
exports.LoginPageModel = LoginPageModel;
var mpm = new LoginPageModel();
exports.navigatingTo = function (args) { return mpm.navigatingTo(args); };
exports.onTap = function () { return mpm.onTap(); };
//# sourceMappingURL=login-page.js.map
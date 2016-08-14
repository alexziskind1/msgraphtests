"use strict";
var observable = require("data/observable");
var SDKHelper_1 = require('./SDKHelper');
var tnsOAuthModule = require('nativescript-oauth');
var HelloWorldModel = (function (_super) {
    __extends(HelloWorldModel, _super);
    function HelloWorldModel() {
        _super.call(this);
    }
    HelloWorldModel.prototype.onTapLogin = function () {
        tnsOAuthModule.login('main-page');
    };
    HelloWorldModel.prototype.onTapGetData = function () {
        this.msGraphClient = SDKHelper_1.SDKHelper.GetAuthenticatedClient();
        //this.msGraphClient.Me.Drive.Root;
        //this.msGraphClient.Me.Request().Select("mail,userPrincipalName").GetAsync();
        var user = this.msGraphClient.Me.Request().Get();
    };
    return HelloWorldModel;
}(observable.Observable));
exports.HelloWorldModel = HelloWorldModel;
//# sourceMappingURL=main-view-model.js.map
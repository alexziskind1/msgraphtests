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
        //var drive = this.msGraphClient.Me.Drive.Request().Get();
        //var driveRoot = this.msGraphClient.Me.Drive.Root.Request().Expand('children').Get();
        var itemId = '012FEALTTQVOQKFSLV2BEKNZN3Y5SC65QM';
        var driveRoot = this.msGraphClient.Me.Drive.Items.Item(itemId).Request().Expand('children').Get();
        //this.msGraphClient.Me.Request().Select("mail,userPrincipalName").GetAsync();
        //var user = this.msGraphClient.Me.Request().Get();
    };
    return HelloWorldModel;
}(observable.Observable));
exports.HelloWorldModel = HelloWorldModel;
//# sourceMappingURL=main-view-model.js.map
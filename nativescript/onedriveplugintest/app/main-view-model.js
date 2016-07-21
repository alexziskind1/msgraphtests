"use strict";
var observable_1 = require('data/observable');
var office365_service_1 = require('./office365-service');
var applicationModule = require("application");
var frameModule = require("ui/frame");
var clientId = "fe3ebdc0-f108-4cea-9757-95cc0638787e"; //client id for application (GUID)
var scopes = ["Files.ReadWrite"];
var HelloWorldModel = (function (_super) {
    __extends(HelloWorldModel, _super);
    function HelloWorldModel() {
        _super.call(this);
    }
    HelloWorldModel.prototype.onTap = function () {
        var rootController = applicationModule.ios.rootController;
        office365_service_1.office365.login(clientId, scopes)
            .then(function () {
            console.log('logged in');
            frameModule.topmost().navigate('explorer');
        })
            .catch(function (er) {
            console.log(er);
        });
    };
    return HelloWorldModel;
}(observable_1.Observable));
exports.HelloWorldModel = HelloWorldModel;
//# sourceMappingURL=main-view-model.js.map
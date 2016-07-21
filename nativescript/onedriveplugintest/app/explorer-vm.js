"use strict";
var observable = require("data/observable");
var observable_array_1 = require("data/observable-array");
var office365_service_1 = require('./office365-service');
var httpModule = require("http");
var ExplorerModel = (function (_super) {
    __extends(ExplorerModel, _super);
    function ExplorerModel() {
        _super.call(this);
        this.children = new observable_array_1.ObservableArray([]);
        this.loadChildren();
    }
    ExplorerModel.prototype.loadChildren = function () {
        var _this = this;
        console.log('loading children');
        var req = {
            method: "GET",
            url: "https://graph.microsoft.com/v1.0/me/drive/items/root?expand=children",
            headers: {
                Authorization: "Bearer " + office365_service_1.office365.accessToken
            }
        };
        httpModule.getJSON(req)
            .then(function (response) {
            _this.processChildren(response.children);
        })
            .catch(function (er) {
            console.log(er);
        });
    };
    ExplorerModel.prototype.processChildren = function (children) {
        for (var i = 0; i < children.length; i++) {
            this.children.push(children[i]);
        }
    };
    return ExplorerModel;
}(observable.Observable));
exports.ExplorerModel = ExplorerModel;
//# sourceMappingURL=explorer-vm.js.map
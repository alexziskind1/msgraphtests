"use strict";
var observable_1 = require("data/observable");
var msGraphModule = require('../../shared/ms-graph');
var httpModule = require('http');
var constantsModule = require('../../shared/constants');
var MePageViewModel = (function (_super) {
    __extends(MePageViewModel, _super);
    function MePageViewModel() {
        _super.call(this);
        this.name = 'hello';
    }
    MePageViewModel.prototype.onLoadMeTap = function (args) {
        console.log('on loadme tap');
        this.loadMeHttp();
    };
    MePageViewModel.prototype.loadMeHttp = function () {
        var _this = this;
        var req = {
            url: constantsModule.GRAPH_RESOURCE + 'v1.0/me',
            method: "GET",
            headers: {
                Authorization: "Bearer " + msGraphModule.accessToken
            }
        };
        httpModule.getJSON(req)
            .then(function (a1) {
            console.log('ok');
            console.log(a1);
            _this.set("name", a1.displayName);
        })
            .catch(function (er) {
            console.log(er);
        });
    };
    return MePageViewModel;
}(observable_1.Observable));
exports.MePageViewModel = MePageViewModel;
//# sourceMappingURL=me-page-vm.js.map
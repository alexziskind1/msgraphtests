"use strict";
var observable_1 = require("data/observable");
var msGraphModule = require('../../shared/ms-graph');
var httpModule = require('http');
var constantsModule = require('../../shared/constants');
var ContentPageViewModel = (function (_super) {
    __extends(ContentPageViewModel, _super);
    function ContentPageViewModel(explorerModel) {
        _super.call(this);
        this.explorerModel = explorerModel;
        this.set('imgContentSrc', "https://www.google.com/images/errors/logo_sm_2.png");
    }
    ContentPageViewModel.prototype.loadContent = function () {
        var _this = this;
        var url = constantsModule.GRAPH_RESOURCE + 'v1.0/me/drive/items/' + this.explorerModel.id + '/content';
        console.log('loading content for url: ' + url);
        var req = {
            url: url,
            method: "GET",
            headers: {
                Authorization: "Bearer " + msGraphModule.accessToken
            }
        };
        return msGraphModule.login()
            .then(function () {
            return new Promise(function (resolve, reject) {
                if (msGraphModule.accessTokenExpired()) {
                    var er = 'access token expired';
                    _this.showErrorAlert(er);
                    reject(er);
                }
                else {
                    httpModule.getImage(req)
                        .then(function (response) {
                        console.log('got response');
                        console.log(response);
                        _this.set('imgContentSrc', response);
                        resolve();
                    })
                        .catch(function (error) {
                        console.error('got error');
                        _this.showErrorAlert(error);
                        reject(error);
                    });
                }
            });
        });
    };
    ContentPageViewModel.prototype.showErrorAlert = function (error) {
        //confirm(error);
        console.error(error);
    };
    return ContentPageViewModel;
}(observable_1.Observable));
exports.ContentPageViewModel = ContentPageViewModel;
//# sourceMappingURL=content-page-vm.js.map
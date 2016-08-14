"use strict";
var observable_1 = require("data/observable");
var ContentPageViewModel = (function (_super) {
    __extends(ContentPageViewModel, _super);
    function ContentPageViewModel(explorerModel) {
        _super.call(this);
        this.explorerModel = explorerModel;
        this.set('imgContentSrc', "https://www.google.com/images/errors/logo_sm_2.png");
    }
    ContentPageViewModel.prototype.loadContent = function () {
        /*
        var url = constantsModule.GRAPH_RESOURCE + 'v1.0/me/drive/items/' + this.explorerModel.id + '/content';
        console.log('loading content for url: ' + url);
        var req : httpModule.HttpRequestOptions = {
            url: url,
            method: "GET",
            headers: {
                Authorization: "Bearer " + msGraphModule.accessToken
            }
        };

        return msGraphModule.login()
            .then(()=>{
                return new Promise<void>((resolve, reject)=>{
                    if (msGraphModule.accessTokenExpired()) {
                        var er = 'access token expired';
                        this.showErrorAlert(er);
                        reject(er);
                    } else {
                        httpModule.getImage(req)
                            .then((response:ImageSource)=>{
                                console.log('got response');
                                console.log(response);
                                this.set('imgContentSrc', response);

                                resolve();
                            })
                            .catch((error)=>{
                                console.error('got error');
                                this.showErrorAlert(error);
                                reject(error);
                            });
                    }
                });
            });
            */
    };
    ContentPageViewModel.prototype.showErrorAlert = function (error) {
        alert(error);
        console.error(error);
    };
    return ContentPageViewModel;
}(observable_1.Observable));
exports.ContentPageViewModel = ContentPageViewModel;
//# sourceMappingURL=content-page-vm.js.map
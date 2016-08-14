"use strict";
var observable_1 = require("data/observable");
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
        /*
        var req : httpModule.HttpRequestOptions = {
            url: constantsModule.GRAPH_RESOURCE + 'v1.0/me',
            method: "GET",
            headers: {
                Authorization: "Bearer " + msGraphModule.accessToken
            }
        };
        

        httpModule.getJSON(req)
            .then((a1:any)=>{
                console.log('ok');
                console.log(a1);
                this.set("name", a1.displayName);
            })
            .catch((er)=>{
                console.log(er);
            });
            */
    };
    return MePageViewModel;
}(observable_1.Observable));
exports.MePageViewModel = MePageViewModel;
//# sourceMappingURL=me-page-vm.js.map
"use strict";
var observable_1 = require("data/observable");
var explorer_page_vm_1 = require('../../pages/explorer-page/explorer-page-vm');
var navigationModule = require('../../shared/navigation');
var folderData = require('../../shared/folder-data');
var nativescript_msgraph_1 = require('nativescript-msgraph');
var LoginPageViewModel = (function (_super) {
    __extends(LoginPageViewModel, _super);
    function LoginPageViewModel() {
        _super.call(this);
    }
    LoginPageViewModel.prototype.onMicrosoftTap = function () {
        nativescript_msgraph_1.SDKHelper.SignInClient()
            .then(function () {
            folderData.clear();
            navigationModule.goToExplorerPage(new explorer_page_vm_1.ExplorerPageViewModel('root', null), true);
        })
            .catch(function (er) {
            alert('Error: ' + er);
        });
    };
    return LoginPageViewModel;
}(observable_1.Observable));
exports.LoginPageViewModel = LoginPageViewModel;
//# sourceMappingURL=login-page-vm.js.map
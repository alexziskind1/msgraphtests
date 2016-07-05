"use strict";
var observable_1 = require("data/observable");
var navigationModule = require('../../shared/navigation');
var msAuthModule = require('../../shared/ms-auth');
var LoginPageViewModel = (function (_super) {
    __extends(LoginPageViewModel, _super);
    function LoginPageViewModel() {
        _super.call(this);
    }
    LoginPageViewModel.prototype.onMicrosoftTap = function () {
        //console.log('ms login tap');
        msAuthModule.login()
            .then(function () {
            navigationModule.goToExplorerPage(null, true);
        })
            .catch(function (er) {
            alert('Error: ' + er);
        });
    };
    return LoginPageViewModel;
}(observable_1.Observable));
exports.LoginPageViewModel = LoginPageViewModel;
//# sourceMappingURL=login-page-vm.js.map
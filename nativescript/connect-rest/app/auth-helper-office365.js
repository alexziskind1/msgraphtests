"use strict";
var tnsOauth = require('./tns-oauth');
var auth_helper_1 = require('./auth-helper');
var AuthHelperOffice365 = (function (_super) {
    __extends(AuthHelperOffice365, _super);
    function AuthHelperOffice365(clientId, scope) {
        _super.call(this);
        var scopeStr = scope.join('%20');
        this.credentials = {
            authority: 'https://login.microsoftonline.com/common',
            authorizeEndpoint: '/oauth2/v2.0/authorize',
            tokenEndpoint: '/oauth2/v2.0/token',
            clientId: clientId,
            redirectUri: 'urn:ietf:wg:oauth:2.0:oob',
            scope: scopeStr
        };
    }
    AuthHelperOffice365.prototype.login = function (successPage) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            tnsOauth.loginViaAuthorizationCodeFlow(_this.credentials, successPage)
                .then(function (response) {
                _this.tokenResult = response;
                resolve();
            })
                .catch(function () {
                reject();
            });
        });
    };
    AuthHelperOffice365.logout = function (successPage) {
        var cookieDomains = ["login.microsoftonline.com", ".live.com"];
        return auth_helper_1.AuthHelper.logout(successPage, cookieDomains);
    };
    return AuthHelperOffice365;
}(auth_helper_1.AuthHelper));
exports.AuthHelperOffice365 = AuthHelperOffice365;
//# sourceMappingURL=auth-helper-office365.js.map
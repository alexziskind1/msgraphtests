"use strict";
var tnsOauth = require('./tns-oauth');
var auth_helper_1 = require('./auth-helper');
var AuthHelperGoogle = (function (_super) {
    __extends(AuthHelperGoogle, _super);
    function AuthHelperGoogle(clientId, scope) {
        _super.call(this);
        var scopeStr = scope.join('%20');
        this.credentials = {
            authority: 'https://accounts.google.com/o',
            authorizeEndpoint: '/oauth2/v2/auth',
            tokenEndpoint: '/oauth2/v2.0/token',
            clientId: clientId,
            redirectUri: 'urn:ietf:wg:oauth:2.0:oob',
            scope: scopeStr
        };
    }
    AuthHelperGoogle.prototype.login = function (successPage) {
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
    AuthHelperGoogle.logout = function (successPage) {
        var cookieDomains = [".google.com"]; //need to check this
        return auth_helper_1.AuthHelper.logout(successPage, cookieDomains);
    };
    return AuthHelperGoogle;
}(auth_helper_1.AuthHelper));
exports.AuthHelperGoogle = AuthHelperGoogle;
//# sourceMappingURL=auth-helper-google.js.map
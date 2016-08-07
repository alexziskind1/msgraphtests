"use strict";
var tnsOauth = require('./tns-oauth');
var auth_helper_1 = require('./auth-helper');
var AuthHelperFacebook = (function (_super) {
    __extends(AuthHelperFacebook, _super);
    function AuthHelperFacebook(clientId, clientSecret, scope) {
        _super.call(this);
        var scopeStr = scope.join('%20');
        this.credentials = {
            authority: 'https://www.facebook.com/dialog',
            tokenEndpointBase: 'https://graph.facebook.com',
            authorizeEndpoint: '/oauth',
            tokenEndpoint: '/v2.3/oauth/access_token',
            clientId: clientId,
            clientSecret: clientSecret,
            redirectUri: 'https://www.facebook.com/connect/login_success.html',
            scope: scopeStr
        };
    }
    AuthHelperFacebook.prototype.login = function (successPage) {
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
    AuthHelperFacebook.logout = function (successPage) {
        var cookieDomains = [".facebook.com"]; //need to check this
        return auth_helper_1.AuthHelper.logout(successPage, cookieDomains);
    };
    return AuthHelperFacebook;
}(auth_helper_1.AuthHelper));
exports.AuthHelperFacebook = AuthHelperFacebook;
//# sourceMappingURL=auth-helper-facebook.js.map
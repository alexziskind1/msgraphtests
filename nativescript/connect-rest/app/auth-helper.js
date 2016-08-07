"use strict";
var tnsOauth = require('./tns-oauth');
var AuthHelper = (function () {
    function AuthHelper() {
    }
    AuthHelper.logout = function (successPage, cookieDomains) {
        return new Promise(function (resolve, reject) {
            try {
                tnsOauth.logout(cookieDomains, successPage);
                resolve();
            }
            catch (er) {
                reject(er);
            }
        });
    };
    return AuthHelper;
}());
exports.AuthHelper = AuthHelper;
//# sourceMappingURL=auth-helper.js.map
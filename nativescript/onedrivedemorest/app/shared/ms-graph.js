"use strict";
var applicationModule = require('application');
var constantsModule = require('./constants');
var utils = require('utils/utils');
function login() {
    var iosApp = applicationModule.ios;
    NXOAuth2AuthenticationProvider.setClientIdScopes(constantsModule.CLIENT_ID, utils.ios.collections.jsArrayToNSArray(constantsModule.FILES_READWRITE_SCOPES));
    return new Promise(function (resolve, reject) {
        if (tryLoginSilent()) {
            //MSGraphClient.setAuthenticationProvider(NXOAuth2AuthenticationProvider.sharedAuthProvider());
            //client = MSGraphClient.client();
            printAccessToken();
            resolve();
        }
        else {
            NXOAuth2AuthenticationProvider.sharedAuthProvider().loginWithViewControllerCompletion(iosApp.rootController, function (er) {
                if (er != null) {
                    reject(er);
                }
                else {
                    //MSGraphClient.setAuthenticationProvider(NXOAuth2AuthenticationProvider.sharedAuthProvider());
                    //client = MSGraphClient.client();
                    printAccessToken();
                    resolve();
                }
            });
        }
    });
}
exports.login = login;
function tryLoginSilent() {
    return NXOAuth2AuthenticationProvider.sharedAuthProvider().loginSilent();
}
exports.tryLoginSilent = tryLoginSilent;
function logout() {
    return new Promise(function (resolve, reject) {
        try {
            NXOAuth2AuthenticationProvider.sharedAuthProvider().logout();
            resolve();
        }
        catch (er) {
            reject(er);
        }
    });
}
exports.logout = logout;
function printAccessToken() {
    var accounts = NXOAuth2AccountStore.sharedStore().accountsWithAccountType("MSGraph");
    if (accounts.count > 0) {
        var account = accounts[0];
        exports.accessToken = account.accessToken.accessToken;
        console.log('accessToken is: ' + account.accessToken.hasExpired);
    }
}
exports.printAccessToken = printAccessToken;
function accessTokenExpired() {
    var accounts = NXOAuth2AccountStore.sharedStore().accountsWithAccountType("MSGraph");
    if (accounts.count > 0) {
        var account = accounts[0];
        var hasExpired = account.accessToken.hasExpired;
        return hasExpired;
    }
    return true;
}
exports.accessTokenExpired = accessTokenExpired;
//# sourceMappingURL=ms-graph.js.map
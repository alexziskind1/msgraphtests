"use strict";
var applicationModule = require('application');
var constantsModule = require('./constants');
var utils = require('utils/utils');
function login() {
    var iosApp = applicationModule.ios;
    NXOAuth2AuthenticationProvider.setClientIdScopes(constantsModule.CLIENT_ID, utils.ios.collections.jsArrayToNSArray(constantsModule.FILES_READWRITE_SCOPES));
    return new Promise(function (resolve, reject) {
        if (NXOAuth2AuthenticationProvider.sharedAuthProvider().loginSilent()) {
            MSGraphClient.setAuthenticationProvider(NXOAuth2AuthenticationProvider.sharedAuthProvider());
            exports.client = MSGraphClient.client();
            printAccessToken();
            resolve();
        }
        else {
            NXOAuth2AuthenticationProvider.sharedAuthProvider().loginWithViewControllerCompletion(iosApp.rootController, function (er) {
                if (er != null) {
                    reject(er);
                }
                else {
                    MSGraphClient.setAuthenticationProvider(NXOAuth2AuthenticationProvider.sharedAuthProvider());
                    exports.client = MSGraphClient.client();
                    printAccessToken();
                    resolve();
                }
            });
        }
    });
}
exports.login = login;
function printAccessToken() {
    var accounts = NXOAuth2AccountStore.sharedStore().accountsWithAccountType("MSGraph");
    if (accounts.count > 0) {
        var account = accounts[0];
        console.log('accessToken is: ' + account.accessToken.accessToken);
    }
}
exports.printAccessToken = printAccessToken;
//# sourceMappingURL=ms-graph.js.map
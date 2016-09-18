"use strict";
var GraphServiceClient_1 = require('./GraphServiceClient');
var DelegateAuthenticationProvider_1 = require('./DelegateAuthenticationProvider');
var HttpProvider_1 = require('./HttpProvider');
var tnsOAuthModule = require('nativescript-oauth');
var baseUrl = 'https://graph.microsoft.com/v1.0';
var SDKHelper = (function () {
    function SDKHelper() {
    }
    SDKHelper.Initialize = function (p_clientId, p_scope) {
        var options = {
            clientId: p_clientId,
            scope: p_scope
        };
        this._initialized = true;
        return tnsOAuthModule.initOffice365(options);
    };
    // Get an authenticated Microsoft Graph Service client.
    SDKHelper.GetAuthenticatedClient = function () {
        if (!this._initialized) {
            throw new Error('The SDKHelper was not initialized');
        }
        var graphClient = new GraphServiceClient_1.GraphServiceClient(new DelegateAuthenticationProvider_1.DelegateAuthenticationProvider(function (requestMessage) {
            return new Promise(function (resolve, reject) {
                tnsOAuthModule.ensureValidToken()
                    .then(function (accessToken) {
                    requestMessage.headers["Authorization"] = "bearer " + accessToken;
                    resolve(requestMessage);
                })
                    .catch(function (er) {
                    reject(er);
                });
                //let accessToken:string = SampleAuthProvider.Instance.GetUserAccessToken();
            });
        }), new HttpProvider_1.HttpProvider(), baseUrl);
        return graphClient;
    };
    SDKHelper.SignOutClient = function (returnPage) {
        this.graphClient = null;
        tnsOAuthModule.logout(returnPage);
    };
    SDKHelper.graphClient = null;
    SDKHelper._initialized = false;
    return SDKHelper;
}());
exports.SDKHelper = SDKHelper;
//# sourceMappingURL=SDKHelper.js.map
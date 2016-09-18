"use strict";
var tnsOAuthModule = require('nativescript-oauth');
var SampleAuthProvider = (function () {
    function SampleAuthProvider() {
    }
    Object.defineProperty(SampleAuthProvider, "Instance", {
        get: function () {
            return SampleAuthProvider.instance;
        },
        enumerable: true,
        configurable: true
    });
    // Gets an access token. First tries to get the token from the token cache.
    SampleAuthProvider.prototype.GetUserAccessToken = function () {
        return tnsOAuthModule.ensureValidToken();
    };
    SampleAuthProvider.prototype.AuthenticateRequest = function (request) {
        return null;
    };
    SampleAuthProvider.instance = new SampleAuthProvider();
    return SampleAuthProvider;
}());
exports.SampleAuthProvider = SampleAuthProvider;
//# sourceMappingURL=SampleAuthProvider.js.map
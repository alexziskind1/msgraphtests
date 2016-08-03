"use strict";
var tnsOauth = require('./tns-oauth');
// The application registration (must match Azure AD config)
exports.office365Credentials = {
    authority: 'https://login.microsoftonline.com/common',
    authorizeEndpoint: '/oauth2/v2.0/authorize',
    tokenEndpoint: '/oauth2/v2.0/token',
    clientId: 'e392f6aa-da5c-434d-a42d-a0e0a27d3964',
    redirectUri: 'urn:ietf:wg:oauth:2.0:oob',
    scope: 'Files.ReadWrite%20offline_access'
};
exports.office365TokenSet = { accessToken: null, refreshToken: null };
function login(successPage) {
    return new Promise(function (resolve, reject) {
        tnsOauth.loginViaAuthorizationCodeFlow(exports.office365Credentials, successPage)
            .then(function (response) {
            exports.office365TokenSet = response;
            resolve();
        })
            .catch(function () {
            reject();
        });
    });
}
exports.login = login;
//# sourceMappingURL=o365-auth-helper.js.map
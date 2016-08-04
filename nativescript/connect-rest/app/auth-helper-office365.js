"use strict";
var tnsOauth = require('./tns-oauth');
var AuthHelperOffice365 = (function () {
    function AuthHelperOffice365(clientId, scope) {
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
    return AuthHelperOffice365;
}());
exports.AuthHelperOffice365 = AuthHelperOffice365;
/*
// The application registration (must match Azure AD config)
export var credentials: TnsOAuthCredentials = {
  authority: 'https://login.microsoftonline.com/common',
  authorizeEndpoint: '/oauth2/v2.0/authorize',
  tokenEndpoint: '/oauth2/v2.0/token',
  clientId: 'e392f6aa-da5c-434d-a42d-a0e0a27d3964',
  redirectUri: 'urn:ietf:wg:oauth:2.0:oob',
  scope: 'Files.ReadWrite%20offline_access'
};

export var tokenSet: TnsOAuthTokenResult = { accessToken: null, refreshToken: null };


export function login(successPage?: string) {
    return new Promise((resolve, reject)=>{
        tnsOauth.loginViaAuthorizationCodeFlow(credentials, successPage)
          .then((response: TnsOAuthTokenResult)=>{
            tokenSet = response;
            resolve();
          })
          .catch(()=>{
            reject();
          });
    });
}
*/ 
//# sourceMappingURL=auth-helper-office365.js.map
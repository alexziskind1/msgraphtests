"use strict";
var tnsOauth = require('./tns-oauth');
var AuthHelperGoogle = (function () {
    function AuthHelperGoogle(clientId, scope) {
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
    return AuthHelperGoogle;
}());
exports.AuthHelperGoogle = AuthHelperGoogle;
/*
export var credentials: TnsOAuthCredentials = {
  authority: 'https://accounts.google.com/o',
  authorizeEndpoint: '/oauth2/v2/auth',
  tokenEndpoint: '/oauth2/v2.0/token',
  clientId: '527078129340-1b55k2qeb177r1b1n6apmvaqd4mpv7q2.apps.googleusercontent.com',
  redirectUri: 'urn:ietf:wg:oauth:2.0:oob',
  scope: 'email%20profile'
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
//# sourceMappingURL=auth-helper-google.js.map
"use strict";
var tnsOauth = require('./tns-oauth');
var AuthHelperFacebook = (function () {
    function AuthHelperFacebook(clientId, clientSecret, scope) {
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
    return AuthHelperFacebook;
}());
exports.AuthHelperFacebook = AuthHelperFacebook;
/*
// The application registration (must match Azure AD config)
export var credentials: TnsOAuthCredentials = {
  authority: 'https://www.facebook.com/dialog',
  tokenEndpointBase: 'https://graph.facebook.com',
  authorizeEndpoint: '/oauth',
  tokenEndpoint: '/v2.3/oauth/access_token',
  clientId: '1819818654921817',
  clientSecret: 'b7e58f212b51e4d639bed857171c992a',
  redirectUri: 'https://www.facebook.com/connect/login_success.html',
  scope: 'email'
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
//# sourceMappingURL=auth-helper-facebook.js.map
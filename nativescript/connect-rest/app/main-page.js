"use strict";
var auth_helper_office365_1 = require('./auth-helper-office365');
var auth_helper_facebook_1 = require('./auth-helper-facebook');
var auth_helper_google_1 = require('./auth-helper-google');
function navigatingTo(args) {
    var page = args.object;
}
exports.navigatingTo = navigatingTo;
function onTapO365() {
    var clientId = 'e392f6aa-da5c-434d-a42d-a0e0a27d3964';
    var scope = ['Files.ReadWrite', 'offline_access'];
    var authHelper = new auth_helper_office365_1.AuthHelperOffice365(clientId, scope);
    onLoginTap(authHelper);
}
exports.onTapO365 = onTapO365;
function onTapGoogle() {
    var clientId = '527078129340-1b55k2qeb177r1b1n6apmvaqd4mpv7q2.apps.googleusercontent.com';
    var scope = ['email', 'profile'];
    var authHelper = new auth_helper_google_1.AuthHelperGoogle(clientId, scope);
    onLoginTap(authHelper);
}
exports.onTapGoogle = onTapGoogle;
function onTapFacebook() {
    var clientId = '1819818654921817';
    var clientSecret = 'b7e58f212b51e4d639bed857171c992a';
    var scope = ['email'];
    var authHelper = new auth_helper_facebook_1.AuthHelperFacebook(clientId, clientSecret, scope);
    onLoginTap(authHelper);
}
exports.onTapFacebook = onTapFacebook;
function onLoginTap(authHelper) {
    authHelper.login('main-page')
        .then(function () {
        console.log('login successful');
        console.dir(authHelper.tokenResult);
    })
        .catch(function (er) {
        console.error('login failed');
        console.dir(er);
    });
}
//# sourceMappingURL=main-page.js.map
"use strict";
var main_view_model_1 = require("./main-view-model");
var authHelper2Module = require('./auth-helper2');
// Event handler for Page "navigatingTo" event attached in main-page.xml
function navigatingTo(args) {
    // Get the event sender
    var page = args.object;
    page.bindingContext = new main_view_model_1.HelloWorldModel();
}
exports.navigatingTo = navigatingTo;
function onTap() {
    authHelper2Module.loginViaAuthorizationCodeFlow('main-page')
        .then(function (result) {
        var accessToken = result.accessToken;
        var refreshToken = result.refreshToken;
        console.dir(result);
    })
        .catch(function (er) {
        console.error('login failed');
        console.dir(er);
    });
    //frameModule.topmost().navigate('login-page');
}
exports.onTap = onTap;
//# sourceMappingURL=main-page.js.map
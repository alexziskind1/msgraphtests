"use strict";
var main_view_model_1 = require("./main-view-model");
var o365AuthHelper = require('./o365-auth-helper');
// Event handler for Page "navigatingTo" event attached in main-page.xml
function navigatingTo(args) {
    // Get the event sender
    var page = args.object;
    page.bindingContext = new main_view_model_1.HelloWorldModel();
}
exports.navigatingTo = navigatingTo;
function onTap() {
    o365AuthHelper.login('main-page')
        .then(function () {
        console.error('login successful');
        console.dir(o365AuthHelper.office365TokenSet);
    })
        .catch(function (er) {
        console.error('login failed');
        console.dir(er);
    });
}
exports.onTap = onTap;
//# sourceMappingURL=main-page.js.map
"use strict";
var main_view_model_1 = require("./main-view-model");
var frameModule = require('ui/frame');
// Event handler for Page "navigatingTo" event attached in main-page.xml
function navigatingTo(args) {
    // Get the event sender
    var page = args.object;
    page.bindingContext = new main_view_model_1.HelloWorldModel();
}
exports.navigatingTo = navigatingTo;
function onTap() {
    frameModule.topmost().navigate('login-page');
}
exports.onTap = onTap;
//# sourceMappingURL=main-page.js.map
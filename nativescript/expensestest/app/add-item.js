"use strict";
var add_item_vm_1 = require("./add-item.vm");
// Event handler for Page "navigatingTo" event attached in main-page.xml
function navigatingTo(args) {
    // Get the event sender
    var page = args.object;
    page.bindingContext = new add_item_vm_1.AddItemModel();
}
exports.navigatingTo = navigatingTo;
//# sourceMappingURL=add-item.js.map
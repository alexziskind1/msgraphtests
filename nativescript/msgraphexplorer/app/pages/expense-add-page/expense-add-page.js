"use strict";
var expense_add_page_vm_1 = require("./expense-add-page-vm");
// Event handler for Page "navigatingTo" event attached in main-page.xml
function navigatingTo(args) {
    // Get the event sender
    var page = args.object;
    page.bindingContext = new expense_add_page_vm_1.AddItemModel();
}
exports.navigatingTo = navigatingTo;
var a = 1;
//# sourceMappingURL=expense-add-page.js.map
"use strict";
var expenses_vm_1 = require("./expenses.vm");
// Event handler for Page "navigatingTo" event attached in main-page.xml
function navigatingTo(args) {
    // Get the event sender
    var page = args.object;
    var vm = new expenses_vm_1.ExpensesModel();
    page.bindingContext = vm;
    vm.init();
}
exports.navigatingTo = navigatingTo;
//# sourceMappingURL=expenses-page.js.map
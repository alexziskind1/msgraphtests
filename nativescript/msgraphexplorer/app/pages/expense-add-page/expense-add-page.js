"use strict";
var expense_add_page_vm_1 = require("./expense-add-page-vm");
var vm;
var page;
function pageLoaded(args) {
    page = args.object;
    var navModel = null;
    if (page.navigationContext) {
        navModel = page.navigationContext;
        vm = new expense_add_page_vm_1.AddItemModel(navModel);
    }
    page.bindingContext = vm;
}
exports.pageLoaded = pageLoaded;
//# sourceMappingURL=expense-add-page.js.map
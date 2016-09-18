"use strict";
var expenses_page_vm_1 = require("./expenses-page-vm");
var vm;
var page;
function pageLoaded(args) {
    page = args.object;
    var navModel = null;
    if (page.navigationContext) {
        navModel = page.navigationContext;
        vm = new expenses_page_vm_1.ExpensesModel(navModel);
        vm.init();
    }
    page.bindingContext = vm;
    page.actionBar.title = navModel.name;
}
exports.pageLoaded = pageLoaded;
//# sourceMappingURL=expenses-page.js.map
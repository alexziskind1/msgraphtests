"use strict";
var expenses_page_vm_1 = require("./expenses-page-vm");
var dialogModule = require("ui/dialogs");
var navigationModule = require('../../shared/navigation');
var nativescript_msgraph_1 = require('nativescript-msgraph');
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
function onActionTap(args) {
    var options = ["Logout"];
    dialogModule.action("Make a Selection", "Cancel", options).then(function (result) {
        console.log("Dialog result: " + result);
        switch (result) {
            case 'Logout':
                nativescript_msgraph_1.SDKHelper.SignOutClient(navigationModule.loginPage());
                break;
        }
    });
}
exports.onActionTap = onActionTap;
//# sourceMappingURL=expenses-page.js.map
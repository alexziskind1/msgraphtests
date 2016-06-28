"use strict";
var login_page_vm_1 = require('./login-page-vm');
var vm = new login_page_vm_1.LoginPageViewModel();
var page;
function pageLoaded(args) {
    page = args.object;
    page.bindingContext = vm;
}
exports.pageLoaded = pageLoaded;
//# sourceMappingURL=login-page.js.map
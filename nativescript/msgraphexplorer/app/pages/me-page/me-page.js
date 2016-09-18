"use strict";
var me_page_vm_1 = require('./me-page-vm');
var vm = new me_page_vm_1.MePageViewModel();
var page;
function pageLoaded(args) {
    page = args.object;
    page.bindingContext = vm;
}
exports.pageLoaded = pageLoaded;
//# sourceMappingURL=me-page.js.map
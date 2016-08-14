"use strict";
var content_page_vm_1 = require('./content-page-vm');
var vm;
var page;
function pageLoaded(args) {
    page = args.object;
    var navModel = null;
    if (page.navigationContext) {
        navModel = page.navigationContext;
        vm = new content_page_vm_1.ContentPageViewModel(navModel);
        vm.loadContent();
    }
    page.bindingContext = vm;
    page.actionBar.title = navModel.name;
}
exports.pageLoaded = pageLoaded;
//# sourceMappingURL=content-page.js.map
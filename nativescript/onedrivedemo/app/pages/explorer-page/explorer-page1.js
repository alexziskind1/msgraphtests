"use strict";
var explorer_page_vm_1 = require('./explorer-page-vm');
var PAGE_ID = 1;
var vm;
var page;
function onNavigatingTo(args) {
    page = args.object;
    console.log('onNavigatingTo called');
    console.log('vm is null');
    var driveItemModel = null;
    if (args.context) {
        driveItemModel = args.context;
        driveItemModel.pageId = PAGE_ID;
    }
    vm = new explorer_page_vm_1.ExplorerPageViewModel(driveItemModel);
    page.bindingContext = vm;
    vm.loadChildren(page);
}
exports.onNavigatingTo = onNavigatingTo;
function onLoaded(args) {
}
exports.onLoaded = onLoaded;
//# sourceMappingURL=explorer-page1.js.map
"use strict";
var explorer_page_vm_1 = require('./explorer-page-vm');
var PAGE_ID = 2;
var vm;
var page;
function onNavigatingTo(args) {
    page = args.object;
    console.log('onNavigatingTo called');
    if (vm == null) {
        console.log('vm is null');
        var driveItemModel = args.context;
        driveItemModel.pageId = PAGE_ID;
        vm = new explorer_page_vm_1.ExplorerPageViewModel(driveItemModel);
        page.bindingContext = vm;
        vm.loadChildren(page);
    }
    else {
        console.log('vm is NOT null');
    }
}
exports.onNavigatingTo = onNavigatingTo;
function onLoaded(args) {
}
exports.onLoaded = onLoaded;
//# sourceMappingURL=explorer-page2.js.map
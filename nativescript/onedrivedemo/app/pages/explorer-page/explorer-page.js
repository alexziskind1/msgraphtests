"use strict";
var explorer_page_vm_1 = require('./explorer-page-vm');
var vm = new explorer_page_vm_1.ExplorerPageViewModel();
var page;
function onNavigatingTo(args) {
    page = args.object;
    page.bindingContext = vm;
    vm.loadChildren(page);
}
exports.onNavigatingTo = onNavigatingTo;
//# sourceMappingURL=explorer-page.js.map
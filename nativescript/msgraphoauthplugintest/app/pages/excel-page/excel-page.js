"use strict";
var excel_page_vm_1 = require('./excel-page-vm');
var vm;
var page;
function pageLoaded(args) {
    page = args.object;
    vm = new excel_page_vm_1.ExcelPageViewModel();
    //vm.loadWorkbook();
    page.bindingContext = vm;
}
exports.pageLoaded = pageLoaded;
//# sourceMappingURL=excel-page.js.map
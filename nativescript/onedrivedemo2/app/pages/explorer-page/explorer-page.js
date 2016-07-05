"use strict";
var folderData = require('../../shared/folder-data');
var navigationModule = require('../../shared/navigation');
var vm;
var page;
function onLoaded(args) {
    page = args.object;
    var navModel = null;
    if (page.navigationContext) {
        if (vm == null) {
            vm = page.navigationContext;
        }
        navModel = page.navigationContext;
        if (vm.entityId != navModel.entityId) {
            folderData.lastVm = vm;
            vm = folderData.getExplorerPageViewModelById(navModel);
        }
    }
    else {
        vm = folderData.lastVm;
    }
    if (vm.children.length < 1) {
        vm.loadChildren();
    }
    page.bindingContext = vm;
    page.actionBar.title = vm.name;
}
exports.onLoaded = onLoaded;
function driveItemTap(args) {
    var layout = args.object;
    var dim = layout.bindingContext;
    navigationModule.goToExplorerPage(dim);
}
exports.driveItemTap = driveItemTap;
function refreshList(args) {
    var pullRefresh = args.object;
    vm.loadChildren()
        .then(function () {
        pullRefresh.refreshing = false;
    })
        .catch(function (er) {
        console.log('error ' + er);
        pullRefresh.refreshing = false;
    });
}
exports.refreshList = refreshList;
//# sourceMappingURL=explorer-page.js.map
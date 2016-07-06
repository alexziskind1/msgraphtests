"use strict";
var folderData = require('../../shared/folder-data');
var navigationModule = require('../../shared/navigation');
var dialogModule = require("ui/dialogs");
var msGraphModule = require('../../shared/ms-graph');
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
function onActionTap(args) {
    dialogModule.action("Your message", "Cancel", ["Create Folder", "Select", "Logout"]).then(function (result) {
        console.log("Dialog result: " + result);
        switch (result) {
            case 'Logout':
                msGraphModule.logout()
                    .then(function () {
                    navigationModule.goToLoginPage(true);
                })
                    .catch(function (er) {
                    console.log('failed to logout: ' + er);
                });
                break;
            case 'Select':
                vm.toggleSelectMode();
                var rep = page.getViewById('itemsRepeater');
                rep.refresh();
                break;
        }
    });
}
exports.onActionTap = onActionTap;
function driveItemTap(args) {
    var layout = args.object;
    var dim = layout.bindingContext;
    var inSelectMode = vm.get('inSelectMode');
    if (inSelectMode) {
        dim.toggleSelected();
    }
    else {
        navigationModule.goToExplorerPage(dim);
    }
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
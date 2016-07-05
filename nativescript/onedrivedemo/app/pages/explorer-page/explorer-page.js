"use strict";
var explorer_page_vm_1 = require('./explorer-page-vm');
var folderData = require('../../shared/folder-data');
var vm;
var page;
function onNavigatingTo(args) {
    page = args.object;
    /*
    if (vm) {
        if (vm.currentItem) {
            //console.log('onNavigatingTo called id: ' + vm.currentItem.name);
        }
    }




    var driveItemModel: DriveItemModel = null;
    if (args.context) {
        //console.log('onNavigatingTo args.context exists')
        driveItemModel = <DriveItemModel>args.context;
    } else {
        //console.log('onNavigatingTo args.context IS MISSING')
    }

    if (vm) {
    //if (folderData.vmMap[driveItemModel.entityId]) {
    //    vm = folderData.vmMap[driveItemModel.entityId]
        //this.updateDriveItemModelsView(folderData.map[itemId]);
    } else {
        vm = new ExplorerPageViewModel(driveItemModel);
        vm.loadChildren();
        //folderData.vmMap[driveItemModel.entityId] = vm;
    }
    */
    //page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;
function onNavigatedTo(args) {
    var localPage = args.object;
    //console.log('onNavigatedTo called');
    //console.log('page.navigationContext ' + page.navigationContext);
}
exports.onNavigatedTo = onNavigatedTo;
function onLoaded(args) {
    page = args.object;
    var driveItemModel = null;
    if (vm) {
        if (page.navigationContext) {
            driveItemModel = page.navigationContext;
            if (driveItemModel) {
                if (vm.currentItem) {
                    if (vm.currentItem.entityId != driveItemModel.entityId) {
                        vm = folderData.getExplorerPageViewModelById(driveItemModel);
                    }
                }
                else {
                    vm = new explorer_page_vm_1.ExplorerPageViewModel(driveItemModel);
                    vm.loadChildren();
                }
            }
        }
    }
    else {
        if (page.navigationContext) {
            driveItemModel = page.navigationContext;
            vm = folderData.getExplorerPageViewModelById(driveItemModel);
            console.log('dim id: ' + driveItemModel.entityId);
        }
        else {
            vm = new explorer_page_vm_1.ExplorerPageViewModel(driveItemModel);
            vm.loadChildren();
        }
    }
    page.bindingContext = vm;
    if (page.frame) {
        if (page.frame.backStack) {
            console.log('backstack length: ' + page.frame.backStack.length);
            for (var i = 0; i < page.frame.backStack.length; i++) {
                var backEntry = page.frame.backStack[i];
                var navEntry = backEntry.entry;
                if (navEntry && navEntry.context) {
                    var navEntryContext = navEntry.context;
                    console.log('NavEntry context: ' + navEntryContext.entityId);
                }
            }
        }
        else {
            console.log('backstack is null');
        }
    }
    else {
        console.log('frame is null');
    }
}
exports.onLoaded = onLoaded;
function driveItemTap(args) {
    var layout = args.object;
    var dim = layout.bindingContext;
    //console.log('drive item tap ' + dim.entityId);
}
exports.driveItemTap = driveItemTap;
function refreshList(args) {
    //console.log('refresh list');
    // Get reference to the PullToRefresh;
    var pullRefresh = args.object;
    // Do work here... and when done call set refreshing property to false to stop the refreshing
    vm.loadChildren()
        .then(function () {
        pullRefresh.refreshing = false;
    })
        .catch(function (er) {
        console.log('error ' + er);
        pullRefresh.refreshing = false;
    });
    /*
    .then(function (resp) {
        // ONLY USING A TIMEOUT TO SIMULATE/SHOW OFF THE REFRESHING
        setTimeout(function () {
            pullRefresh.refreshing = false;
        }, 1000);
    }, function (err) {
        pullRefresh.refreshing = false;
    });
    */
}
exports.refreshList = refreshList;
//# sourceMappingURL=explorer-page.js.map
import { EventData } from "data/observable";
import { Page, NavigatedData } from 'ui/page';
import { ExplorerPageViewModel } from './explorer-page-vm';
import { StackLayout } from 'ui/layouts/stack-layout';
import { Repeater } from 'ui/repeater';
import * as folderData from '../../shared/folder-data';
import * as navigationModule from '../../shared/navigation';
import * as dialogModule from "ui/dialogs";
import * as tnsOAuthModule from 'nativescript-oauth';

//import * as msGraphModule from '../../shared/ms-graph';

var vm: ExplorerPageViewModel;
var page: Page;


export function onLoaded(args: EventData) {
    page = <Page>args.object;
    var navModel: ExplorerPageViewModel = null;
    
    if (page.navigationContext) {
        if (vm == null) {
            vm = page.navigationContext;
        }
        navModel = <ExplorerPageViewModel>page.navigationContext;
        if (vm.entityId != navModel.entityId) {
            folderData.lastVm = vm;
            vm = folderData.getExplorerPageViewModelById(navModel);
        }
    } else {
        vm = folderData.lastVm;
    }
    if (vm.children.length < 1) {
        vm.loadChildren();
    }
    page.bindingContext = vm;
    page.actionBar.title = vm.name;
}

export function onActionTap(args: EventData) {
    var options = ["Create Folder", "Select", "Logout"];
    var inSelectMode = <boolean>vm.get('inSelectMode');
    var selChildren = vm.selectedChildren();
    if (selChildren.length > 0) {
        options.push('Delete');
    }

    dialogModule.action("Make a Selection", "Cancel", options).then(function (result) {
        console.log("Dialog result: " + result)
        switch(result) {
            case 'Logout':
                tnsOAuthModule.logout(navigationModule.loginPage());
                /*
                msGraphModule.logout()
                    .then(()=>{
                        navigationModule.goToLoginPage(true);
                    })
                    .catch((er)=>{
                        console.log('failed to logout: ' + er);
                        navigationModule.goToLoginPage(true);
                    });
                    */

                break;
            case 'Delete':
                var options = {
                    title: "Deletion",
                    message: "Are you sure you want to delete these items?",
                    okButtonText: "Yes",
                    cancelButtonText: "No",
                    neutralButtonText: "Cancel"
                };
                dialogModule.confirm(options).then((result: boolean) => {
                    if (result) {
                        vm.deleteSelectedItems();
                    }
                });
                break;
            case 'Select':
                vm.toggleSelectMode();
                var rep = <Repeater>page.getViewById('itemsRepeater');
                rep.refresh();
                break;
        }
    });
}
    
export function driveItemTap(args: EventData) {
    var layout = <StackLayout>args.object;
    var dim = <ExplorerPageViewModel>layout.bindingContext;
    var inSelectMode = <boolean>vm.get('inSelectMode');

    if (inSelectMode) {
        dim.toggleSelected();
    } else {
        if (dim.isFolder) {
            navigationModule.goToExplorerPage(dim);
        } else {
            navigationModule.goToContentPage(dim);
        }
    }
}

export function refreshList(args) {
    var pullRefresh = args.object;

    vm.loadChildren()
        .then(()=>{
            pullRefresh.refreshing = false;
        })
        .catch((er)=>{
            console.log('error ' + er);
            pullRefresh.refreshing = false;
        });
}

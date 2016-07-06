import { EventData } from "data/observable";
import { Page, NavigatedData } from 'ui/page';
import { ExplorerPageViewModel } from './explorer-page-vm';
import { StackLayout } from 'ui/layouts/stack-layout';
import { Repeater } from 'ui/repeater';
import * as folderData from '../../shared/folder-data';
import * as navigationModule from '../../shared/navigation';
import * as dialogModule from "ui/dialogs";
import * as msGraphModule from '../../shared/ms-graph';

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
    dialogModule.action("Your message", "Cancel", ["Create Folder", "Select", "Logout"]).then(function (result) {
        console.log("Dialog result: " + result)
        switch(result) {
            case 'Logout': 
                msGraphModule.logout()
                    .then(()=>{
                        navigationModule.goToLoginPage(true);
                    })
                    .catch((er)=>{
                        console.log('failed to logout: ' + er);
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
        
        navigationModule.goToExplorerPage(dim);
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

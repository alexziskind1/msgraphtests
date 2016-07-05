import { EventData } from "data/observable";
import { Page, NavigatedData } from 'ui/page';
import { ExplorerPageViewModel } from './explorer-page-vm';
import { StackLayout } from 'ui/layouts/stack-layout';
import * as folderData from '../../shared/folder-data';
import * as navigationModule from '../../shared/navigation';

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

    
export function driveItemTap(args: EventData) {
    var layout = <StackLayout>args.object;
    var dim = <ExplorerPageViewModel>layout.bindingContext;
    navigationModule.goToExplorerPage(dim);
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

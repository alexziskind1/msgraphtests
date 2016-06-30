import { EventData } from "data/observable";
import { Page, NavigatedData } from 'ui/page';
import { ExplorerPageViewModel } from './explorer-page-vm';
import { DriveItemModel } from '../../shared/models';

var PAGE_ID = 2;

var vm: ExplorerPageViewModel;
var page: Page;

export function onNavigatingTo(args: NavigatedData) {
    page = <Page>args.object;
    console.log('onNavigatingTo called');
    if (vm == null) {
        console.log('vm is null');
        var driveItemModel = <DriveItemModel>args.context;
        driveItemModel.pageId = PAGE_ID;
        vm = new ExplorerPageViewModel(driveItemModel);
        page.bindingContext = vm;
        vm.loadChildren(page);
    } else {
        console.log('vm is NOT null');
    }
}

export function onLoaded(args: EventData) {

}

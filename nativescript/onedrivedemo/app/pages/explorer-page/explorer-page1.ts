import { EventData } from "data/observable";
import { Page, NavigatedData } from 'ui/page';
import { ExplorerPageViewModel } from './explorer-page-vm';
import { DriveItemModel } from '../../shared/models';

var PAGE_ID = 1;

var vm: ExplorerPageViewModel;
var page: Page;

export function onNavigatingTo(args: NavigatedData) {
    page = <Page>args.object;
    console.log('onNavigatingTo called');

        console.log('vm is null');
        var driveItemModel: DriveItemModel = null;
        if (args.context) {
            driveItemModel = <DriveItemModel>args.context;
            driveItemModel.pageId = PAGE_ID;
        }
        vm = new ExplorerPageViewModel(driveItemModel);
        page.bindingContext = vm;
        vm.loadChildren(page);

}

export function onLoaded(args: EventData) {

}

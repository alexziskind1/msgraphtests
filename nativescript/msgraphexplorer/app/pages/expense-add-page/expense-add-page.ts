import { EventData } from "data/observable";
import { Page } from "ui/page";
import { AddItemModel } from "./expense-add-page-vm";
import { ExplorerPageViewModel } from '../explorer-page/explorer-page-vm';

var vm: AddItemModel;
var page: Page;


export function pageLoaded(args: EventData) {
    page = <Page>args.object;
    var navModel: ExplorerPageViewModel = null;
    
    if (page.navigationContext) {
        navModel = <ExplorerPageViewModel>page.navigationContext;
        vm = new AddItemModel(navModel);
    } 

    page.bindingContext = vm;
}
import { EventData } from "data/observable";
import { Page } from "ui/page";
import { ExpensesModel } from "./expenses-page-vm";
import { ExplorerPageViewModel } from '../explorer-page/explorer-page-vm';

var vm: ExpensesModel;
var page: Page;


export function pageLoaded(args: EventData) {
    page = <Page>args.object;
    var navModel: ExplorerPageViewModel = null;
    
    if (page.navigationContext) {
        navModel = <ExplorerPageViewModel>page.navigationContext;
        vm = new ExpensesModel(navModel);
        vm.init();
    } 

    page.bindingContext = vm;
    page.actionBar.title = navModel.name;
}
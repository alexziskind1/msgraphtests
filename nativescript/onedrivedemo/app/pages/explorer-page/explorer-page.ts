import { EventData } from "data/observable";
import { Page, NavigatedData } from 'ui/page';
import { ExplorerPageViewModel } from './explorer-page-vm';


var vm = new ExplorerPageViewModel();
var page: Page;

export function onNavigatingTo(args: NavigatedData) {
    page = <Page>args.object;
    page.bindingContext = vm;
    vm.loadChildren();
}

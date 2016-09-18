import { EventData } from "data/observable";
import { Page, NavigatedData } from 'ui/page';
import { ContentPageViewModel } from './content-page-image-vm';
import { ExplorerPageViewModel } from '../explorer-page/explorer-page-vm';

var vm: ContentPageViewModel;
var page: Page;


export function pageLoaded(args: EventData) {
    page = <Page>args.object;
    var navModel: ExplorerPageViewModel = null;
    
    if (page.navigationContext) {
        navModel = <ExplorerPageViewModel>page.navigationContext;
        vm = new ContentPageViewModel(navModel);
        vm.loadContent();
    } 

    page.bindingContext = vm;
    page.actionBar.title = navModel.name;
}
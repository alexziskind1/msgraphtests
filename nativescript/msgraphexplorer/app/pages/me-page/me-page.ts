import { EventData } from "data/observable";
import { Page, NavigatedData } from 'ui/page';
import { MePageViewModel } from './me-page-vm';

var vm = new MePageViewModel();
var page: Page;

export function pageLoaded(args: EventData) {
    page = <Page>args.object;
    page.bindingContext = vm;
}

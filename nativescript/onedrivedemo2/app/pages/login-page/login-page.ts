import { EventData } from "data/observable";
import { Page, NavigatedData } from 'ui/page';
import { LoginPageViewModel } from './login-page-vm';

var vm = new LoginPageViewModel();
var page: Page;

export function pageLoaded(args: EventData) {
    page = <Page>args.object;
    page.bindingContext = vm;
}

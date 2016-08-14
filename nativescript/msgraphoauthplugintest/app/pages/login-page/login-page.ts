import { EventData } from "data/observable";
import { Page, NavigatedData } from 'ui/page';
import { LoginPageViewModel } from './login-page-vm';
import { ExplorerPageViewModel } from '../../pages/explorer-page/explorer-page-vm';
import * as tnsOAuthModule from 'nativescript-oauth';
import * as navigationModule from '../../shared/navigation';

var vm = new LoginPageViewModel();
var page: Page;

export function pageLoaded(args: EventData) {
    if (!tnsOAuthModule.accessTokenExpired()) {
        navigationModule.goToExplorerPage(new ExplorerPageViewModel('root', null), true);
    } else {
        page = <Page>args.object;
        page.bindingContext = vm;
    }
}

import { EventData } from "data/observable";
import { Page, NavigatedData } from 'ui/page';
import { LoginPageViewModel } from './login-page-vm';
import { ExplorerPageViewModel } from '../../pages/explorer-page/explorer-page-vm';
import * as navigationModule from '../../shared/navigation';
import {SDKHelper} from 'nativescript-msgraph';

var vm = new LoginPageViewModel();
var page: Page;

export function pageLoaded(args: EventData) {
    if (!SDKHelper.AccessTokenExpired()) {
        navigationModule.goToExplorerPage(new ExplorerPageViewModel('root', null), true);
    } else {
        page = <Page>args.object;
        page.bindingContext = vm;
    }
}

import { ExplorerPageViewModel } from '../pages/explorer-page/explorer-page-vm';
import * as frameModule from 'ui/frame';
import * as tnsOAuthModule from 'nativescript-oauth';

export function	explorerPage() {
    return 'pages/explorer-page/explorer-page';
}

export function	contentPage() {
    return 'pages/content-page/content-page';
}

export function	loginPage() {
    return 'pages/login-page/login-page';
}

export function	mePage() {
    return 'pages/me-page/me-page';
}


export function checkAuthGoToPage(clearHistory?: boolean) {
    if (tnsOAuthModule.accessTokenExpired() && tnsOAuthModule.instance.refreshTokenExpired()) {
        goToLoginPage(clearHistory);
    } else {
        goToExplorerPage(new ExplorerPageViewModel('root', null), true);
    }
}

export function	goToLoginPage(clearHistory?: boolean) {
    var ePage = loginPage();
    var navEntry: frameModule.NavigationEntry = {
        moduleName: ePage,
        clearHistory: clearHistory
    };
    
    frameModule.topmost().navigate(navEntry);
}

export function	goToExplorerPage(vm: ExplorerPageViewModel, clearHistory?: boolean) {
    var ePage = explorerPage();
    var navEntry: frameModule.NavigationEntry = {
        moduleName: ePage,
        context: vm,
        clearHistory: clearHistory
    };
    
    frameModule.topmost().navigate(navEntry);
}

export function goToContentPage(vm: ExplorerPageViewModel) {
    var ePage = contentPage();
    var navEntry: frameModule.NavigationEntry = {
        moduleName: ePage,
        context: vm
    };
    
    frameModule.topmost().navigate(navEntry);
}

export function	goToMePage(clearHistory?: boolean) {
    var ePage = mePage();
    var navEntry: frameModule.NavigationEntry = {
        moduleName: ePage,
        clearHistory: clearHistory
    };
    
    frameModule.topmost().navigate(navEntry);
}

export function goBack() {
    frameModule.topmost().goBack();
}
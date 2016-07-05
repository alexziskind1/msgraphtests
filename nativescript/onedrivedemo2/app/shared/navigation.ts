import { ExplorerPageViewModel } from '../pages/explorer-page/explorer-page-vm';
import * as frameModule from 'ui/frame';

export function	explorerPage() {
    return 'pages/explorer-page/explorer-page';
}

export function	loginPage() {
    return 'pages/login-page/login-page';
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

export function goBack() {
    frameModule.topmost().goBack();
}
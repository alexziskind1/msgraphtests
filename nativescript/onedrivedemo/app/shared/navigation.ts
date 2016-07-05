import * as frameModule from 'ui/frame';
import { DriveItemModel } from './models';

export function	explorerPage() {
    return 'pages/explorer-page/explorer-page';
}

export function	loginPage() {
    return 'pages/login-page/login-page';
}


export function	goToExplorerPage(driveItemModel: DriveItemModel, clearHistory?: boolean) {
    var ePage = explorerPage();
    //console.log('navigating to page: ' + ePage);
    var navEntry: frameModule.NavigationEntry = {
        moduleName: ePage,
        context: driveItemModel,
        clearHistory: clearHistory
    };
    
    frameModule.topmost().navigate(navEntry);
}



export function goBack() {
    frameModule.topmost().goBack();
}
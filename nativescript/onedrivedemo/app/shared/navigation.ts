import * as frameModule from 'ui/frame';
import { DriveItemModel } from './models';

export function	explorerPage(pageId?:number) {
    var id = pageId ? pageId : 1;
    return 'pages/explorer-page/explorer-page' + id;
}

export function	loginPage() {
    return 'pages/login-page/login-page';
}


export function	goToExplorerPage(driveItemModel: DriveItemModel, pageId?: number) {
    var ePage = explorerPage(pageId);
    console.log('navigating to page: ' + ePage);
    var navEntry: frameModule.NavigationEntry = {
        moduleName: ePage,
        context: driveItemModel,
        //clearHistory: true
    };
    
    frameModule.topmost().navigate(navEntry);
}



export function goBack() {
    frameModule.topmost().goBack();
}
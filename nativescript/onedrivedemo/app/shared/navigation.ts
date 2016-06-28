import * as frameModule from 'ui/frame';

export function	explorerPage() {
    return 'pages/explorer-page/explorer-page';
}

export function	loginPage() {
    return 'pages/login-page/login-page';
}


export function	goToExplorerPage() {
    var navEntry: frameModule.NavigationEntry = {
        moduleName: explorerPage(),
        context: null,
        //clearHistory: true
    };
    
    frameModule.topmost().navigate(navEntry);
}



export function goBack() {
    frameModule.topmost().goBack();
}
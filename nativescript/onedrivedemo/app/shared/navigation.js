"use strict";
var frameModule = require('ui/frame');
function explorerPage() {
    return 'pages/explorer-page/explorer-page';
}
exports.explorerPage = explorerPage;
function loginPage() {
    return 'pages/login-page/login-page';
}
exports.loginPage = loginPage;
function goToExplorerPage(driveItemModel, clearHistory) {
    var ePage = explorerPage();
    //console.log('navigating to page: ' + ePage);
    var navEntry = {
        moduleName: ePage,
        context: driveItemModel,
        clearHistory: clearHistory
    };
    frameModule.topmost().navigate(navEntry);
}
exports.goToExplorerPage = goToExplorerPage;
function goBack() {
    frameModule.topmost().goBack();
}
exports.goBack = goBack;
//# sourceMappingURL=navigation.js.map
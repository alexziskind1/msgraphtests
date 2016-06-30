"use strict";
var frameModule = require('ui/frame');
function explorerPage(pageId) {
    var id = pageId ? pageId : 1;
    return 'pages/explorer-page/explorer-page' + id;
}
exports.explorerPage = explorerPage;
function loginPage() {
    return 'pages/login-page/login-page';
}
exports.loginPage = loginPage;
function goToExplorerPage(driveItemModel, pageId) {
    var ePage = explorerPage(pageId);
    console.log('navigating to page: ' + ePage);
    var navEntry = {
        moduleName: ePage,
        context: driveItemModel,
    };
    frameModule.topmost().navigate(navEntry);
}
exports.goToExplorerPage = goToExplorerPage;
function goBack() {
    frameModule.topmost().goBack();
}
exports.goBack = goBack;
//# sourceMappingURL=navigation.js.map
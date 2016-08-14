"use strict";
var explorer_page_vm_1 = require('../pages/explorer-page/explorer-page-vm');
var frameModule = require('ui/frame');
var tnsOAuthModule = require('nativescript-oauth');
function explorerPage() {
    return 'pages/explorer-page/explorer-page';
}
exports.explorerPage = explorerPage;
function contentPage() {
    return 'pages/content-page/content-page';
}
exports.contentPage = contentPage;
function loginPage() {
    return 'pages/login-page/login-page';
}
exports.loginPage = loginPage;
function mePage() {
    return 'pages/me-page/me-page';
}
exports.mePage = mePage;
function checkAuthGoToPage(clearHistory) {
    if (tnsOAuthModule.accessTokenExpired() && tnsOAuthModule.instance.refreshTokenExpired()) {
        goToLoginPage(clearHistory);
    }
    else {
        goToExplorerPage(new explorer_page_vm_1.ExplorerPageViewModel('root', null), true);
    }
}
exports.checkAuthGoToPage = checkAuthGoToPage;
function goToLoginPage(clearHistory) {
    var ePage = loginPage();
    var navEntry = {
        moduleName: ePage,
        clearHistory: clearHistory
    };
    frameModule.topmost().navigate(navEntry);
}
exports.goToLoginPage = goToLoginPage;
function goToExplorerPage(vm, clearHistory) {
    var ePage = explorerPage();
    var navEntry = {
        moduleName: ePage,
        context: vm,
        clearHistory: clearHistory
    };
    frameModule.topmost().navigate(navEntry);
}
exports.goToExplorerPage = goToExplorerPage;
function goToContentPage(vm) {
    var ePage = contentPage();
    var navEntry = {
        moduleName: ePage,
        context: vm
    };
    frameModule.topmost().navigate(navEntry);
}
exports.goToContentPage = goToContentPage;
function goToMePage(clearHistory) {
    var ePage = mePage();
    var navEntry = {
        moduleName: ePage,
        clearHistory: clearHistory
    };
    frameModule.topmost().navigate(navEntry);
}
exports.goToMePage = goToMePage;
function goBack() {
    frameModule.topmost().goBack();
}
exports.goBack = goBack;
//# sourceMappingURL=navigation.js.map
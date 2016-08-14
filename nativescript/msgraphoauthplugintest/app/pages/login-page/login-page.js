"use strict";
var login_page_vm_1 = require('./login-page-vm');
var explorer_page_vm_1 = require('../../pages/explorer-page/explorer-page-vm');
var tnsOAuthModule = require('nativescript-oauth');
var navigationModule = require('../../shared/navigation');
var vm = new login_page_vm_1.LoginPageViewModel();
var page;
function pageLoaded(args) {
    if (!tnsOAuthModule.accessTokenExpired()) {
        navigationModule.goToExplorerPage(new explorer_page_vm_1.ExplorerPageViewModel('root', null), true);
    }
    else {
        page = args.object;
        page.bindingContext = vm;
    }
}
exports.pageLoaded = pageLoaded;
//# sourceMappingURL=login-page.js.map
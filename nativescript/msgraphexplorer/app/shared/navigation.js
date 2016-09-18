"use strict";
var frameModule = require('ui/frame');
function explorerPage() {
    return 'pages/explorer-page/explorer-page';
}
exports.explorerPage = explorerPage;
function contentPageImage() {
    return 'pages/content-page-image/content-page-image';
}
exports.contentPageImage = contentPageImage;
function loginPage() {
    return 'pages/login-page/login-page';
}
exports.loginPage = loginPage;
function mePage() {
    return 'pages/me-page/me-page';
}
exports.mePage = mePage;
function expensesPage() {
    return 'pages/expenses-page/expenses-page';
}
exports.expensesPage = expensesPage;
function expenseAddPage() {
    return 'pages/expense-add-page/expense-add-page';
}
exports.expenseAddPage = expenseAddPage;
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
function goToContentPageImage(vm) {
    var ePage = contentPageImage();
    var navEntry = {
        moduleName: ePage,
        context: vm
    };
    frameModule.topmost().navigate(navEntry);
}
exports.goToContentPageImage = goToContentPageImage;
function goToMePage(clearHistory) {
    var ePage = mePage();
    var navEntry = {
        moduleName: ePage,
        clearHistory: clearHistory
    };
    frameModule.topmost().navigate(navEntry);
}
exports.goToMePage = goToMePage;
function goToExpensesPage(vm, clearHistory) {
    var ePage = expensesPage();
    var navEntry = {
        moduleName: ePage,
        context: vm,
        clearHistory: clearHistory
    };
    frameModule.topmost().navigate(navEntry);
}
exports.goToExpensesPage = goToExpensesPage;
function goToExpenseAddPage(vm, clearHistory) {
    var ePage = expenseAddPage();
    var navEntry = {
        moduleName: ePage,
        context: vm,
        clearHistory: clearHistory
    };
    frameModule.topmost().navigate(navEntry);
}
exports.goToExpenseAddPage = goToExpenseAddPage;
function goBack() {
    frameModule.topmost().goBack();
}
exports.goBack = goBack;
//# sourceMappingURL=navigation.js.map
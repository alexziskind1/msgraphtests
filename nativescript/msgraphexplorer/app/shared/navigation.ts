import { ExplorerPageViewModel } from '../pages/explorer-page/explorer-page-vm';
import * as frameModule from 'ui/frame';

export function	explorerPage() {
    return 'pages/explorer-page/explorer-page';
}

export function	contentPageImage() {
    return 'pages/content-page-image/content-page-image';
}

export function	loginPage() {
    return 'pages/login-page/login-page';
}

export function	mePage() {
    return 'pages/me-page/me-page';
}

export function	expensesPage() {
    return 'pages/expenses-page/expenses-page';
}

export function	expenseAddPage() {
    return 'pages/expense-add-page/expense-add-page';
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

export function goToContentPageImage(vm: ExplorerPageViewModel) {
    var ePage = contentPageImage();
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

export function	goToExpensesPage(vm: ExplorerPageViewModel, clearHistory?: boolean) {
    var ePage = expensesPage();
    var navEntry: frameModule.NavigationEntry = {
        moduleName: ePage,
        context: vm,
        clearHistory: clearHistory
    };
    
    frameModule.topmost().navigate(navEntry);
}

export function	goToExpenseAddPage(vm: ExplorerPageViewModel, clearHistory?: boolean) {
    var ePage = expenseAddPage();
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
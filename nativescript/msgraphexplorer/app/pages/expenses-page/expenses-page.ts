import { EventData } from "data/observable";
import { Page } from "ui/page";
import { ExpensesModel } from "./expenses-page-vm";
import { ExplorerPageViewModel } from '../explorer-page/explorer-page-vm';
import * as dialogModule from "ui/dialogs";
import * as navigationModule from '../../shared/navigation';
import {SDKHelper} from 'nativescript-msgraph';

var vm: ExpensesModel;
var page: Page;


export function pageLoaded(args: EventData) {
    page = <Page>args.object;
    var navModel: ExplorerPageViewModel = null;
    
    if (page.navigationContext) {
        navModel = <ExplorerPageViewModel>page.navigationContext;
        vm = new ExpensesModel(navModel);
        vm.init();
    } 

    page.bindingContext = vm;
    page.actionBar.title = navModel.name;
}

export function onActionTap(args: EventData) {
    var options = ["Logout"];

    dialogModule.action("Make a Selection", "Cancel", options).then(function (result) {
        console.log("Dialog result: " + result)
        switch(result) {
            case 'Logout':
                SDKHelper.SignOutClient(navigationModule.loginPage());
                break;
        }
    });
}
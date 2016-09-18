import observable = require("data/observable");
import observableArray = require("data/observable-array");
import frameModule = require('ui/frame');
import * as navigationModule from '../../shared/navigation';
import { ExplorerPageViewModel } from '../explorer-page/explorer-page-vm';


import { Transaction } from '../../models/ExpensesModels';
import { ExpensesService } from '../../services/expenses-service';
import { SDKHelper } from 'nativescript-msgraph';

export class ExpensesModel extends observable.Observable {

    public transactions = new observableArray.ObservableArray<Transaction>([]);
    private _expensesFileId: string;

    constructor(vm: ExplorerPageViewModel) {
        super();
        this._expensesFileId = vm.entityId;
    }

    public init() {
        console.log('init');
        ExpensesService.getTransactions()
            .then((tx)=>{
                this.transactions.push(tx);
            });
    }

    public addItemTap() {
        navigationModule.goToExpenseAddPage();
    }

    public logoutTap() {
        SDKHelper.SignOutClient(navigationModule.loginPage());
    }

    public selectTransaction() {
        console.log('selectTransaction');
    }

}
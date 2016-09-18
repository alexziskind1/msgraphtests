import observable = require("data/observable");
import observableArray = require("data/observable-array");
import frameModule = require('ui/frame');

import { Transaction } from './models';
import { ItemsService } from './items-service';
import * as tnsOauthModule from 'nativescript-oauth';


export class ExpensesModel extends observable.Observable {

    public transactions = new observableArray.ObservableArray<Transaction>([]);

    constructor() {
        super();
    }

    public init() {
        console.log('init');
        ItemsService.instance.getTransactions()
            .then((tx)=>{
                this.transactions.push(tx);
            });
    }

    public addItemTap() {
        console.log('add item');

        var navEntry: frameModule.NavigationEntry = {
            moduleName: 'add-item',
            transition:  { name: 'slideTop' },
            backstackVisible: false,
            clearHistory: true
        };
        frameModule.topmost().navigate(navEntry);
    }

    public logoutTap() {
        tnsOauthModule.logout('main-page');
    }

    public selectTransaction() {
        console.log('selectTransaction');
    }

}
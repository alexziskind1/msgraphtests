import observable = require("data/observable");
import observableArray = require("data/observable-array");
import frameModule = require('ui/frame');

import { Transaction, Category, Categories } from './models';
import { ItemsService } from './items-service';

export class AddItemModel extends observable.Observable {

    public date: string;
    public merchant: string;
    public amount: number;
    
    private _selectedCategoryIndex: number;
    public selectedDateDay: number;
    public selectedDateMonth: number;
    public selectedDateYear: number;

    public categories: Array<string>;

    public get selectedDateStr() : string {
        return `${this.selectedDateMonth}/${this.selectedDateDay}/${this.selectedDateYear}`;
    }

    public get selectedCategoryIndex() : number {
        return this._selectedCategoryIndex;
    }
    public set selectedCategoryIndex(val) {
        this._selectedCategoryIndex = val;
    }

    constructor() {
        super();
        this.categories = Categories;
        this.amount = 0;
        this._selectedCategoryIndex = 0;
        var now = new Date();
        this.selectedDateDay = now.getDate();
        this.selectedDateMonth = now.getMonth() + 1;
        this.selectedDateYear = now.getFullYear();
    }

    public saveTap() {
        if (this.amount > 0) {
            var newTransaction: Transaction = {
                date: this.selectedDateStr,
                merchant: this.get('merchant'),
                amount: this.get('amount'),
                category: <Category>this.categories[this.selectedCategoryIndex],
                month: 'Sept - 2016',
                typeofday: 'Weekday'
            };
            ItemsService.instance.addTransaction(newTransaction);
        }
        this.gotoMain();
    }

    public cancelTap() {
        this.gotoMain();
    }

    private gotoMain() {
        var navEntry: frameModule.NavigationEntry = {
            moduleName: 'expenses-page',
            transition:  { name: 'slideBottom' },
            backstackVisible: false,
            clearHistory: true
        };
        frameModule.topmost().navigate(navEntry);
    }

}
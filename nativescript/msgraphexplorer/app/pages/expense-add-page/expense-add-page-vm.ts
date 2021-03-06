import observable = require("data/observable");
import observableArray = require("data/observable-array");
import { ExplorerPageViewModel } from '../explorer-page/explorer-page-vm';
import * as navigationModule from '../../shared/navigation';
import { Transaction, Category, Categories } from '../../models/ExpensesModels';
import { ExpensesService } from '../../services/expenses-service';

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

    constructor(public vm: ExplorerPageViewModel) {
        super();
        this.categories = Categories;
        //this.amount = 0;
        this._selectedCategoryIndex = 0;
        var now = new Date();
        this.selectedDateDay = now.getDate();
        this.selectedDateMonth = now.getMonth() + 1;
        this.selectedDateYear = now.getFullYear();
    }

    public saveTap() {
        if (this.merchant && this.amount && this.amount > 0) {
            var newTransaction: Transaction = {
                date: this.selectedDateStr,
                merchant: this.merchant.toUpperCase(),
                amount: this.amount,
                category: <Category>this.categories[this.selectedCategoryIndex],
                month: '',
                typeofday: ''
            };
            ExpensesService.addTransaction(newTransaction, this.vm.entityId);
        }
        this.gotoMain();
    }

    public cancelTap() {
        this.gotoMain();
    }

    private gotoMain() {
        //navigationModule.goToExpensesPage(this.vm);
        navigationModule.goBack();
    }

}
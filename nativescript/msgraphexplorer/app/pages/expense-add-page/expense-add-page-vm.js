"use strict";
var observable = require("data/observable");
var frameModule = require('ui/frame');
var ExpensesModels_1 = require('../../models/ExpensesModels');
var expenses_service_1 = require('../../services/expenses-service');
var AddItemModel = (function (_super) {
    __extends(AddItemModel, _super);
    function AddItemModel() {
        _super.call(this);
        this.categories = ExpensesModels_1.Categories;
        //this.amount = 0;
        this._selectedCategoryIndex = 0;
        var now = new Date();
        this.selectedDateDay = now.getDate();
        this.selectedDateMonth = now.getMonth() + 1;
        this.selectedDateYear = now.getFullYear();
    }
    Object.defineProperty(AddItemModel.prototype, "selectedDateStr", {
        get: function () {
            return this.selectedDateMonth + "/" + this.selectedDateDay + "/" + this.selectedDateYear;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddItemModel.prototype, "selectedCategoryIndex", {
        get: function () {
            return this._selectedCategoryIndex;
        },
        set: function (val) {
            this._selectedCategoryIndex = val;
        },
        enumerable: true,
        configurable: true
    });
    AddItemModel.prototype.saveTap = function () {
        if (this.merchant && this.amount && this.amount > 0) {
            var newTransaction = {
                date: this.selectedDateStr,
                merchant: this.merchant.toUpperCase(),
                amount: this.amount,
                category: this.categories[this.selectedCategoryIndex],
                month: 'Sept - 2016',
                typeofday: 'Weekday'
            };
            expenses_service_1.ExpensesService.addTransaction(newTransaction);
        }
        this.gotoMain();
    };
    AddItemModel.prototype.cancelTap = function () {
        this.gotoMain();
    };
    AddItemModel.prototype.gotoMain = function () {
        var navEntry = {
            moduleName: 'expenses-page',
            transition: { name: 'slideBottom' },
            backstackVisible: false,
            clearHistory: true
        };
        frameModule.topmost().navigate(navEntry);
    };
    return AddItemModel;
}(observable.Observable));
exports.AddItemModel = AddItemModel;
//# sourceMappingURL=expense-add-page-vm.js.map
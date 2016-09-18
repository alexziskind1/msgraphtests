"use strict";
var observable = require("data/observable");
var navigationModule = require('../../shared/navigation');
var ExpensesModels_1 = require('../../models/ExpensesModels');
var expenses_service_1 = require('../../services/expenses-service');
var AddItemModel = (function (_super) {
    __extends(AddItemModel, _super);
    function AddItemModel(vm) {
        _super.call(this);
        this.vm = vm;
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
                month: '',
                typeofday: ''
            };
            expenses_service_1.ExpensesService.addTransaction(newTransaction, this.vm.entityId);
        }
        this.gotoMain();
    };
    AddItemModel.prototype.cancelTap = function () {
        this.gotoMain();
    };
    AddItemModel.prototype.gotoMain = function () {
        //navigationModule.goToExpensesPage(this.vm);
        navigationModule.goBack();
    };
    return AddItemModel;
}(observable.Observable));
exports.AddItemModel = AddItemModel;
//# sourceMappingURL=expense-add-page-vm.js.map
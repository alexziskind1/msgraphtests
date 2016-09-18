"use strict";
var observable = require("data/observable");
var observableArray = require("data/observable-array");
var navigationModule = require('../../shared/navigation');
var expenses_service_1 = require('../../services/expenses-service');
var nativescript_msgraph_1 = require('nativescript-msgraph');
var ExpensesModel = (function (_super) {
    __extends(ExpensesModel, _super);
    function ExpensesModel(vm) {
        _super.call(this);
        this.vm = vm;
        this.transactions = new observableArray.ObservableArray([]);
        this._expensesFileId = vm.entityId;
    }
    ExpensesModel.prototype.init = function () {
        var _this = this;
        console.log('init');
        expenses_service_1.ExpensesService.getTransactions(this.vm.entityId)
            .then(function (tx) {
            _this.transactions.push(tx);
        });
    };
    ExpensesModel.prototype.addItemTap = function () {
        navigationModule.goToExpenseAddPage(this.vm);
    };
    ExpensesModel.prototype.logoutTap = function () {
        nativescript_msgraph_1.SDKHelper.SignOutClient(navigationModule.loginPage());
    };
    ExpensesModel.prototype.selectTransaction = function () {
        console.log('selectTransaction');
    };
    return ExpensesModel;
}(observable.Observable));
exports.ExpensesModel = ExpensesModel;
//# sourceMappingURL=expenses-page-vm.js.map
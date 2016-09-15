"use strict";
var observable = require("data/observable");
var observableArray = require("data/observable-array");
var frameModule = require('ui/frame');
var items_service_1 = require('./items-service');
var tnsOauthModule = require('nativescript-oauth');
var ExpensesModel = (function (_super) {
    __extends(ExpensesModel, _super);
    function ExpensesModel() {
        _super.call(this);
        this.transactions = new observableArray.ObservableArray([]);
    }
    ExpensesModel.prototype.init = function () {
        var _this = this;
        console.log('init');
        items_service_1.ItemsService.instance.getTransactions()
            .then(function (tx) {
            _this.transactions.push(tx);
        });
    };
    ExpensesModel.prototype.addItemTap = function () {
        console.log('add item');
        var navEntry = {
            moduleName: 'add-item',
            transition: { name: 'slideTop' },
            backstackVisible: false,
            clearHistory: true
        };
        frameModule.topmost().navigate(navEntry);
    };
    ExpensesModel.prototype.logoutTap = function () {
        tnsOauthModule.logout('main-page');
    };
    ExpensesModel.prototype.selectTransaction = function () {
        console.log('selectTransaction');
    };
    return ExpensesModel;
}(observable.Observable));
exports.ExpensesModel = ExpensesModel;
//# sourceMappingURL=expenses.vm.js.map
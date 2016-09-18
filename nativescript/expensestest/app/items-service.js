"use strict";
var excelHelper = require('./graph-excel-helper');
var graphSdkExcelHelper = require('./graph-sdk-helper');
var tnsOAuthModule = require('nativescript-oauth');
var ItemsService = (function () {
    function ItemsService() {
        this._transactions = [];
        //temp fake data
        var ts = [
            {
                date: '1/1/2015',
                amount: 28,
                merchant: 'My seller',
                category: 'Travel',
                typeofday: 'Weekend',
                month: 'Jan - 2015'
            },
            {
                date: '1/2/2015',
                amount: 2,
                merchant: 'Starbucks',
                category: 'Restaurant',
                typeofday: 'Weekday',
                month: 'Jan - 2015'
            }
        ];
        this._transactions = ts;
    }
    Object.defineProperty(ItemsService, "instance", {
        get: function () {
            return ItemsService._instance;
        },
        enumerable: true,
        configurable: true
    });
    ItemsService.prototype.getTransactions = function () {
        console.log('getTransactions');
        return new Promise(function (resolve, reject) {
            console.log('getTransactions promise');
            tnsOAuthModule.ensureValidToken()
                .then(function (token) {
                graphSdkExcelHelper.GraphSdkExcelHelper.getTransactions(token)
                    .then(function (t) {
                    resolve(t);
                    //console.log('fileId: ' + fileId);
                });
            });
        });
        //return Promise.resolve(this._transactions);
    };
    ItemsService.prototype.addTransaction = function (t) {
        return new Promise(function (resolve, reject) {
            console.log('getTransactions promise');
            tnsOAuthModule.ensureValidToken()
                .then(function (token) {
                excelHelper.ExcelHelper.addTransaction(token, t)
                    .then(function (tx) {
                    resolve(tx);
                });
            });
        });
        //this._transactions.push(t);
    };
    ItemsService._instance = new ItemsService();
    return ItemsService;
}());
exports.ItemsService = ItemsService;
//# sourceMappingURL=items-service.js.map
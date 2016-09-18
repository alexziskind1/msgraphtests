"use strict";
var nativescript_msgraph_1 = require('nativescript-msgraph');
var constantsModule = require('../shared/constants');
//let GRAPH_RESOURCE : string = "https://graph.microsoft.com/";
//let expensesFileName: string = "Expenses.xlsx";
var transactionsTableName = "TransactionsTable";
//var driveRootChildrenEndpoint = "https://graph.microsoft.com/v1.0/me/drive/root/children";
//var filesSelectQuery = "?$select=name,id";
var txFormulaMonth = "=TEXT([DATE], \"mmm - yyyy\")";
var txFormulaTypeOfDay = "=IF(OR((TEXT([DATE], \"dddd\") = \"Saturday\"), (TEXT([DATE], \"dddd\") = \"Sunday\")), \"Weekend\", \"Weekday\")";
var ExpensesService = (function () {
    function ExpensesService() {
    }
    ExpensesService.getTransactions = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.getExpensesFileId()
                .then(function (fileId) {
                var transactions = [];
                var client = nativescript_msgraph_1.SDKHelper.GetAuthenticatedClient();
                client.Me.Drive.Items.Item(fileId).Workbook.Tables.Table(transactionsTableName).Rows.Request().Get()
                    .then(function (rowsResponse) {
                    //var rowsResult = (<any>rowsResponse).value;
                    for (var i = 0; i < rowsResponse.length; i++) {
                        var valuesArr = rowsResponse[i].values[0];
                        var trans = {
                            date: _this.excelDateToJSDate(valuesArr[0]),
                            amount: valuesArr[1],
                            merchant: valuesArr[2],
                            category: valuesArr[3],
                            typeofday: valuesArr[4],
                            month: valuesArr[5]
                        };
                        //console.dir(rowsResult[i].values[0][0]);
                        transactions.push(trans);
                    }
                    resolve(transactions);
                })
                    .catch(function (er) {
                    console.log(er);
                    reject(er);
                });
            });
        });
    };
    ExpensesService.addTransaction = function (t) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.getExpensesFileId()
                .then(function (fileId) {
                var values = [[t.date, t.amount, t.merchant, t.category, txFormulaTypeOfDay, txFormulaMonth]];
                var newRow = {
                    Index: null,
                    Values: values,
                    Id: null,
                    ODataType: null,
                    AdditionalData: null
                };
                var client = nativescript_msgraph_1.SDKHelper.GetAuthenticatedClient();
                client.Me.Drive.Items.Item(fileId).Workbook.Tables.Table(transactionsTableName).Rows.Request().Add(newRow)
                    .then(function (processedRow) {
                    console.log(processedRow);
                })
                    .catch(function (er) {
                    console.log(er);
                    reject(er);
                });
            });
        });
    };
    ExpensesService.getExpensesFileId = function () {
        return new Promise(function (resolve, reject) {
            var expandStr = "children";
            var itemId = 'root';
            var client = nativescript_msgraph_1.SDKHelper.GetAuthenticatedClient();
            client.Me.Drive.Root.Request().Expand(expandStr).Get()
                .then(function (result) {
                var children = result.Children;
                for (var i = 0; i < children.length; i++) {
                    var childName = children[i].name;
                    if (childName.indexOf(constantsModule.EXPENSES_FILE_NAME) > -1) {
                        resolve(children[i].id);
                    }
                }
                reject('didn\'t find the item');
            })
                .catch(function (er) {
                console.log(er);
                reject(er);
            });
        });
    };
    ExpensesService.excelDateToJSDate = function (dateNum) {
        var d = new Date(Math.round((dateNum - 25569) * 86400 * 1000));
        return (d.getMonth() + 1) + "/" + d.getDate() + "/" + d.getFullYear();
    };
    return ExpensesService;
}());
exports.ExpensesService = ExpensesService;
//# sourceMappingURL=expenses-service.js.map
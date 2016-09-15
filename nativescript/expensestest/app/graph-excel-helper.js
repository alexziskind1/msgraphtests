"use strict";
var http = require('http');
var GRAPH_RESOURCE = "https://graph.microsoft.com/";
var expensesFileName = "Expenses.xlsx";
var driveRootChildrenEndpoint = "https://graph.microsoft.com/v1.0/me/drive/root/children";
var filesSelectQuery = "?$select=name,id";
var txFormulaMonth = "=TEXT([DATE], \"mmm - yyyy\")";
var txFormulaTypeOfDay = "=IF(OR((TEXT([DATE], \"dddd\") = \"Saturday\"), (TEXT([DATE], \"dddd\") = \"Sunday\")), \"Weekend\", \"Weekday\")";
//
var ExcelHelper = (function () {
    function ExcelHelper() {
    }
    ExcelHelper.getTransactions = function (accessToken) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.getExpensesFileId(accessToken)
                .then(function (fileId) {
                var restURLBase = "https://graph.microsoft.com/v1.0/me/drive/items/" + fileId + "/workbook/tables('TransactionsTable')/Rows/";
                var req = {
                    url: restURLBase,
                    method: "GET",
                    headers: {
                        Authorization: "Bearer " + accessToken
                    }
                };
                var transactions = [];
                http.getJSON(req)
                    .then(function (rowsResponse) {
                    var rowsResult = rowsResponse.value;
                    for (var i = 0; i < rowsResult.length; i++) {
                        var valuesArr = rowsResult[i].values[0];
                        var trans = {
                            date: valuesArr[0],
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
    ExcelHelper.getExpensesFileId = function (accessToken) {
        var req = {
            url: driveRootChildrenEndpoint + filesSelectQuery,
            method: "GET",
            headers: {
                Authorization: "Bearer " + accessToken
            }
        };
        return new Promise(function (resolve, reject) {
            http.getJSON(req)
                .then(function (filesResultResponse) {
                var filesResult = filesResultResponse.value;
                for (var i = 0; i < filesResult.length; i++) {
                    if (filesResult[i].name.indexOf(expensesFileName) > -1) {
                        resolve(filesResult[i].id);
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
    ExcelHelper.addTransaction = function (accessToken, t) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.getExpensesFileId(accessToken)
                .then(function (fileId) {
                var restURLBase = "https://graph.microsoft.com/v1.0/me/drive/items/" + fileId + "/workbook/tables('TransactionsTable')/Rows/";
                var values = [[t.date, t.amount, t.merchant, t.category, txFormulaTypeOfDay, txFormulaMonth]];
                var bodyStr = JSON.stringify({ index: null, values: values });
                var req = {
                    url: restURLBase,
                    method: "POST",
                    content: bodyStr,
                    headers: {
                        Authorization: "Bearer " + accessToken
                    }
                };
                return new Promise(function (resolve, reject) {
                    http.getJSON(req)
                        .then(function (txResultResponse) {
                        console.dir(txResultResponse);
                    })
                        .catch(function (er) {
                        console.log(er);
                        reject(er);
                    });
                });
            });
        });
    };
    return ExcelHelper;
}());
exports.ExcelHelper = ExcelHelper;
//# sourceMappingURL=graph-excel-helper.js.map
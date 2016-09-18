"use strict";
var nativescript_msgraph_1 = require('nativescript-msgraph');
var constantsModule = require('../shared/constants');
var ExpensesService = (function () {
    function ExpensesService() {
    }
    ExpensesService.getTransactions = function (fileId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (fileId) {
                _this._getTransactionsInternal(fileId)
                    .then(function (tArr) {
                    resolve(tArr);
                })
                    .catch(function (er) {
                    reject(er);
                });
            }
            else {
                _this._getExpensesFileId()
                    .then(function (fid) {
                    _this._getTransactionsInternal(fid)
                        .then(function (tArrWId) {
                        resolve(tArrWId);
                    })
                        .catch(function (er) {
                        reject(er);
                    });
                })
                    .catch(function (er) {
                    reject(er);
                });
            }
        });
    };
    ExpensesService.addTransaction = function (t, fileId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (fileId) {
                console.log('addTransaction calle with fileId: ' + fileId);
                _this._addTransactionInteral(t, fileId)
                    .then(function (txNew) {
                    resolve(txNew);
                })
                    .catch(function (er) {
                    reject(er);
                });
            }
            else {
                _this._getExpensesFileId()
                    .then(function (fid) {
                    _this._getTransactionsInternal(fid)
                        .then(function (txNewWithId) {
                        resolve(txNewWithId);
                    })
                        .catch(function (er) {
                        reject(er);
                    });
                })
                    .catch(function (er) {
                    reject(er);
                });
            }
        });
    };
    ExpensesService._addTransactionInteral = function (t, fileId) {
        return new Promise(function (resolve, reject) {
            var values = [[t.date, t.amount, t.merchant, t.category, constantsModule.TX_FORMULA_TYPEOFDAY, constantsModule.TX_FORMULA_MONTH]];
            var newRow = {
                Index: null,
                Values: values,
                Id: null,
                ODataType: null,
                AdditionalData: null
            };
            var client = nativescript_msgraph_1.SDKHelper.GetAuthenticatedClient();
            client.Me.Drive.Items.Item(fileId).Workbook.Tables.Table(constantsModule.TRANSACTIONS_TABLE_NAME).Rows.Request().Add(newRow)
                .then(function (processedRow) {
                console.log('processedRow.Id: ' + processedRow.Id);
                resolve(processedRow);
            })
                .catch(function (er) {
                console.log(er);
                reject(er);
            });
        });
    };
    ExpensesService._getTransactionsInternal = function (fileId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var transactions = [];
            var client = nativescript_msgraph_1.SDKHelper.GetAuthenticatedClient();
            client.Me.Drive.Items.Item(fileId).Workbook.Tables.Table(constantsModule.TRANSACTIONS_TABLE_NAME).Rows.Request().Get()
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
    };
    ExpensesService._getExpensesFileId = function () {
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
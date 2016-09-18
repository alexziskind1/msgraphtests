"use strict";
var SDKHelper_1 = require('./SDKHelper');
var http = require('http');
var GRAPH_RESOURCE = "https://graph.microsoft.com/";
var expensesFileName = "Expenses.xlsx";
var driveRootChildrenEndpoint = "https://graph.microsoft.com/v1.0/me/drive/root/children";
var filesSelectQuery = "?$select=name,id";
var txFormulaMonth = "=TEXT([DATE], \"mmm - yyyy\")";
var txFormulaTypeOfDay = "=IF(OR((TEXT([DATE], \"dddd\") = \"Saturday\"), (TEXT([DATE], \"dddd\") = \"Sunday\")), \"Weekend\", \"Weekday\")";
//
var GraphSdkExcelHelper = (function () {
    function GraphSdkExcelHelper() {
    }
    GraphSdkExcelHelper.getTransactions = function (accessToken) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.getExpensesFileId(accessToken)
                .then(function (fileId) {
                var transactions = [];
                var client = SDKHelper_1.SDKHelper.GetAuthenticatedClient();
                client.Me.Drive.Items.Item(fileId).Workbook.Tables.Table("TransactionsTable").Rows.Request().Get()
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
                /*
             let restURLBase = "https://graph.microsoft.com/v1.0/me/drive/items/" + fileId + "/workbook/tables('TransactionsTable')/Rows/";

             var req : http.HttpRequestOptions = {
                 url: restURLBase,
                 method: "GET",
                 headers: {
                     Authorization: "Bearer " + accessToken
                 }
             };


     var transactions: Array<Transaction> = [];

     http.getJSON(req)
     .then((rowsResponse)=>{
         var rowsResult = (<any>rowsResponse).value;
         
         for (var i = 0; i < rowsResult.length; i++) {
             var valuesArr = rowsResult[i].values[0];
             var trans: Transaction = {
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
     .catch((er)=>{
         console.log(er);
         reject(er);
     });
     */
            });
        });
    };
    GraphSdkExcelHelper.addTransaction = function (accessToken, t) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.getExpensesFileId(accessToken)
                .then(function (fileId) {
                var values = [[t.date, t.amount, t.merchant, t.category, txFormulaTypeOfDay, txFormulaMonth]];
                var newRow = {
                    Index: null,
                    Values: values,
                    Id: null,
                    ODataType: null,
                    AdditionalData: null
                };
                var client = SDKHelper_1.SDKHelper.GetAuthenticatedClient();
                client.Me.Drive.Items.Item(fileId).Workbook.Tables.Table("TransactionsTable").Rows.Request().Add(newRow)
                    .then(function (processedRow) {
                    console.log(processedRow);
                })
                    .catch(function (er) {
                    console.log(er);
                    reject(er);
                });
                /*
            let restURLBase = "https://graph.microsoft.com/v1.0/me/drive/items/" + fileId + "/workbook/tables('TransactionsTable')/Rows/";
            let bodyStr =  JSON.stringify({ index: null, values: values });

            var req : http.HttpRequestOptions = {
                url: restURLBase,
                method: "POST",
                content: bodyStr,
                headers: {
                    Authorization: "Bearer " + accessToken
                }
            };

            return new Promise<string>((resolve, reject)=>{
                http.getJSON(req)
                .then((txResultResponse)=>{
                    console.dir(txResultResponse);

                })
                .catch((er)=>{
                    console.log(er);
                    reject(er);
                });
            });
            */
            });
        });
    };
    GraphSdkExcelHelper.getExpensesFileId_bak = function (accessToken) {
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
    GraphSdkExcelHelper.getExpensesFileId = function (a) {
        return new Promise(function (resolve, reject) {
            var expandStr = "children";
            var itemId = 'root';
            var client = SDKHelper_1.SDKHelper.GetAuthenticatedClient();
            client.Me.Drive.Root.Request().Expand(expandStr).Get()
                .then(function (result) {
                var children = result.Children;
                for (var i = 0; i < children.length; i++) {
                    var childName = children[i].name;
                    if (childName.indexOf(expensesFileName) > -1) {
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
    GraphSdkExcelHelper.excelDateToJSDate = function (dateNum) {
        var d = new Date(Math.round((dateNum - 25569) * 86400 * 1000));
        return (d.getMonth() + 1) + "/" + d.getDate() + "/" + d.getFullYear();
    };
    return GraphSdkExcelHelper;
}());
exports.GraphSdkExcelHelper = GraphSdkExcelHelper;
//# sourceMappingURL=graph-sdk-helper.js.map
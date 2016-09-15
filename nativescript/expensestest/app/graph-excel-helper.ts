import * as http from 'http';
import { Transaction, DriveItemResultIdName } from './models';

let GRAPH_RESOURCE : string = "https://graph.microsoft.com/";
let expensesFileName: string = "Expenses.xlsx";

var driveRootChildrenEndpoint = "https://graph.microsoft.com/v1.0/me/drive/root/children";
var filesSelectQuery = "?$select=name,id";
var txFormulaMonth = "=TEXT([DATE], \"mmm - yyyy\")";
var txFormulaTypeOfDay = "=IF(OR((TEXT([DATE], \"dddd\") = \"Saturday\"), (TEXT([DATE], \"dddd\") = \"Sunday\")), \"Weekend\", \"Weekday\")";
//

export class ExcelHelper {
    public static getTransactions(accessToken: string) : Promise<Array<Transaction>> {
            return new Promise((resolve, reject)=>{

                this.getExpensesFileId(accessToken)
                    .then((fileId: string)=>{
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
            });
        });
    } 

    public static getExpensesFileId(accessToken: string) : Promise<string> {
        var req : http.HttpRequestOptions = {
            url: driveRootChildrenEndpoint + filesSelectQuery,
            method: "GET",
            headers: {
                Authorization: "Bearer " + accessToken
            }
        };

        return new Promise<string>((resolve, reject)=>{
            http.getJSON(req)
            .then((filesResultResponse)=>{
                var filesResult : DriveItemResultIdName[] = (<any>filesResultResponse).value;
                for (var i = 0; i < filesResult.length; i++) {
                    if (filesResult[i].name.indexOf(expensesFileName) > -1) {
                        resolve(filesResult[i].id);
                    }
                }
                reject('didn\'t find the item');
            })
            .catch((er)=>{
                console.log(er);
                reject(er);
            });
        });
    }

    public static addTransaction(accessToken: string, t: Transaction) : Promise<Transaction> {
        return new Promise((resolve, reject)=>{
            this.getExpensesFileId(accessToken)
                .then((fileId: string)=>{
                    let restURLBase = "https://graph.microsoft.com/v1.0/me/drive/items/" + fileId + "/workbook/tables('TransactionsTable')/Rows/";
                    let values: Array<Array<string|number>> = [[ t.date, t.amount, t.merchant, t.category, txFormulaTypeOfDay, txFormulaMonth ]];
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

                });
        });
    }




}
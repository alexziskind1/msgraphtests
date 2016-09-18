import {SDKHelper, WorkbookTableRow} from 'nativescript-msgraph';
import { Transaction } from '../models/ExpensesModels';
import { DriveItemResultIdName } from '../models/GraphAPIResults';
import * as constantsModule from '../shared/constants';


export class ExpensesService {
    public static getTransactions(fileId: string) : Promise<Array<Transaction>> {
        return new Promise((resolve, reject)=>{
            if (fileId) {
                this._getTransactionsInternal(fileId)
                    .then((tArr)=>{
                        resolve(tArr);
                    })
                    .catch((er)=>{
                        reject(er);
                    });
                
            } else {
                this._getExpensesFileId()
                    .then((fid: string)=>{
                        this._getTransactionsInternal(fid)
                            .then((tArrWId)=>{
                                resolve(tArrWId);
                            })
                            .catch((er)=>{
                                reject(er);
                            });
                    })
                    .catch((er)=>{
                        reject(er);
                    });
            }
        });
    } 

    public static addTransaction(t: Transaction, fileId: string) : Promise<Transaction> {
        return new Promise((resolve, reject)=>{
            if (fileId) {
                console.log('addTransaction calle with fileId: ' + fileId);
                this._addTransactionInteral(t, fileId)
                    .then((txNew)=>{
                        resolve(txNew);
                    })
                    .catch((er)=>{
                        reject(er);
                    });
            } else {
                this._getExpensesFileId()
                    .then((fid: string)=>{
                        this._getTransactionsInternal(fid)
                            .then((txNewWithId)=>{
                                resolve(txNewWithId);
                            })
                            .catch((er)=>{
                                reject(er);
                            });
                    })
                    .catch((er)=>{
                        reject(er);
                    });
            }
        });
    }

    private static _addTransactionInteral(t: Transaction, fileId: string) : Promise<Transaction> {
        return new Promise((resolve, reject)=>{
            let values: Array<Array<string|number>> = [[ t.date, t.amount, t.merchant, t.category, constantsModule.TX_FORMULA_TYPEOFDAY, constantsModule.TX_FORMULA_MONTH ]];
                    
            let newRow: WorkbookTableRow = {
                Index: null,
                Values: values,
                Id: null,
                ODataType: null,
                AdditionalData: null
            };

            let client = SDKHelper.GetAuthenticatedClient();
            client.Me.Drive.Items.Item(fileId).Workbook.Tables.Table(constantsModule.TRANSACTIONS_TABLE_NAME).Rows.Request().Add(newRow)
                .then((processedRow)=>{
                    console.log('processedRow.Id: ' + processedRow.Id);

                    resolve(processedRow);
                })
                .catch((er)=>{
                    console.log(er);
                    reject(er);
                });
        });
    }


    private static _getTransactionsInternal(fileId: string) : Promise<Array<Transaction>>  {
        return new Promise((resolve, reject)=>{
            var transactions: Array<Transaction> = [];
            let client = SDKHelper.GetAuthenticatedClient();
            client.Me.Drive.Items.Item(fileId).Workbook.Tables.Table(constantsModule.TRANSACTIONS_TABLE_NAME).Rows.Request().Get()
                .then((rowsResponse)=>{
                    //var rowsResult = (<any>rowsResponse).value;
                    for (var i = 0; i < rowsResponse.length; i++) {
                        var valuesArr = (<any>rowsResponse[i]).values[0];
                        var trans: Transaction = {
                            date: this.excelDateToJSDate(valuesArr[0]),
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
    }

    private static _getExpensesFileId() : Promise<string> {
        return new Promise((resolve, reject)=>{
            var expandStr = "children";
            var itemId = 'root';

            let client = SDKHelper.GetAuthenticatedClient();
            client.Me.Drive.Root.Request().Expand(expandStr).Get()
                .then((result: any)=>{
                    var children = result.Children;
                    for (var i = 0; i < children.length; i++) {
                        let childName = (<any>children[i]).name;
                        if (childName.indexOf(constantsModule.EXPENSES_FILE_NAME) > -1) {
                            resolve((<any>children[i]).id);
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

    private static excelDateToJSDate(dateNum) : string {
        let d = new Date(Math.round((dateNum - 25569)*86400*1000));
        return `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`;
    }
}
import {SDKHelper, WorkbookTableRow} from 'nativescript-msgraph';
import { Transaction } from '../models/ExpensesModels';
import { DriveItemResultIdName } from '../models/GraphAPIResults';
import * as constantsModule from '../shared/constants';


//let GRAPH_RESOURCE : string = "https://graph.microsoft.com/";
//let expensesFileName: string = "Expenses.xlsx";
let transactionsTableName:  string = "TransactionsTable";

//var driveRootChildrenEndpoint = "https://graph.microsoft.com/v1.0/me/drive/root/children";
//var filesSelectQuery = "?$select=name,id";
var txFormulaMonth = "=TEXT([DATE], \"mmm - yyyy\")";
var txFormulaTypeOfDay = "=IF(OR((TEXT([DATE], \"dddd\") = \"Saturday\"), (TEXT([DATE], \"dddd\") = \"Sunday\")), \"Weekend\", \"Weekday\")";


export class ExpensesService {
    public static getTransactions() : Promise<Array<Transaction>> {
            return new Promise((resolve, reject)=>{
                this.getExpensesFileId()
                    .then((fileId: string)=>{

                        var transactions: Array<Transaction> = [];
                        let client = SDKHelper.GetAuthenticatedClient();
                        client.Me.Drive.Items.Item(fileId).Workbook.Tables.Table(transactionsTableName).Rows.Request().Get()
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
        });
    } 



    public static addTransaction(t: Transaction) : Promise<Transaction> {
        return new Promise((resolve, reject)=>{
            
            this.getExpensesFileId()
                .then((fileId: string)=>{
                    let values: Array<Array<string|number>> = [[ t.date, t.amount, t.merchant, t.category, txFormulaTypeOfDay, txFormulaMonth ]];
                    
                    let newRow: WorkbookTableRow = {
                        Index: null,
                        Values: values,
                        Id: null,
                        ODataType: null,
                        AdditionalData: null
                    };

                    let client = SDKHelper.GetAuthenticatedClient();
                    client.Me.Drive.Items.Item(fileId).Workbook.Tables.Table(transactionsTableName).Rows.Request().Add(newRow)
                        .then((processedRow)=>{
                            console.log(processedRow);
                        })
                        .catch((er)=>{
                            console.log(er);
                            reject(er);
                        });
                });
        });
    }


    public static getExpensesFileId() : Promise<string> {
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
import { Transaction } from './models';
import * as excelHelper from './graph-excel-helper';
import * as tnsOAuthModule from 'nativescript-oauth';

export class ItemsService {

    private _transactions: Array<Transaction> = [];
    private static _instance : ItemsService = new ItemsService();
    
    constructor() { 
        //temp fake data
        var ts: Array<Transaction> = [
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

    public static get instance() : ItemsService {
        return ItemsService._instance;
    }


    public getTransactions() : Promise<Array<Transaction>> {
        console.log('getTransactions');
        return new Promise((resolve, reject)=>{
            console.log('getTransactions promise');
            tnsOAuthModule.ensureValidToken()
                .then((token)=>{
                    excelHelper.ExcelHelper.getTransactions(token)
                        .then((t)=>{
                            resolve(t);
                            //console.log('fileId: ' + fileId);
                        });
                });


        });

        //return Promise.resolve(this._transactions);

    }

    public addTransaction(t: Transaction) : Promise<Transaction> {
         return new Promise((resolve, reject)=>{
            console.log('getTransactions promise');
            tnsOAuthModule.ensureValidToken()
                .then((token)=>{
                    excelHelper.ExcelHelper.addTransaction(token, t)
                        .then((tx)=>{
                            resolve(tx);
                        });
                });


        });


        //this._transactions.push(t);
    }
}
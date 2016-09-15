import { Observable, EventData } from "data/observable";
import { ExplorerPageViewModel } from '../../pages/explorer-page/explorer-page-vm';
import * as navigationModule from '../../shared/navigation';
//import * as msGraphModule from '../../shared/ms-graph';
import * as folderData from '../../shared/folder-data';
import * as httpModule from 'http';
import * as constantsModule from '../../shared/constants';
import {ImageSource} from 'image-source';
import {SDKHelper} from '../../SDKHelper';
import {IWorkbookTableRowsCollectionPage} from '../../IWorkbookTableRowsCollectionPage';

let workbookName = "Expenses.xlsx";
let expensesWorkbookFileId = "012FEALTQBOH2BSE4IHZB26WYRW3Z5MKC7";

export class ExcelPageViewModel extends Observable {
    

    

    constructor() {
        super();
    }

    public loadWorkbook() : Promise<any> {
        return new Promise((resolve, reject)=>{

            let msGraphClient = SDKHelper.GetAuthenticatedClient();

            msGraphClient.Me.Drive.Items.Item(expensesWorkbookFileId).Workbook.Tables.Table('TransactionsTable').Rows.Request().Get()
                .then((result: IWorkbookTableRowsCollectionPage)=>{
                    console.dir(result);
                })
                .catch((er)=>{
                    console.log(er);
                    reject(er);
                });
        });
    }

    

    private showErrorAlert(error) {
        alert(error);
        console.error(error);
    }
    
}

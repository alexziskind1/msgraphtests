import { Observable, EventData } from "data/observable";
import { ExplorerPageViewModel } from '../../pages/explorer-page/explorer-page-vm';
import * as navigationModule from '../../shared/navigation';
//import * as msGraphModule from '../../shared/ms-graph';
import * as folderData from '../../shared/folder-data';
import * as tnsOAuthModule from 'nativescript-oauth';

export class LoginPageViewModel extends Observable {
    
    constructor() {
        super(); 
    }
    
    public onMicrosoftTap() {
        tnsOAuthModule.login()
            .then(()=>{
                folderData.clear();
                //if (confirm("Go to explorer?")) {
                    navigationModule.goToExplorerPage(new ExplorerPageViewModel('root', null), true);
                //}
                //navigationModule.goToMePage();
            })
            .catch((er)=>{
                alert('Error: ' + er);
                
            });
    }
}

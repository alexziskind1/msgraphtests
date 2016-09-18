import { Observable, EventData } from "data/observable";
import { ExplorerPageViewModel } from '../../pages/explorer-page/explorer-page-vm';
import * as navigationModule from '../../shared/navigation';
import * as folderData from '../../shared/folder-data';
import {SDKHelper} from 'nativescript-msgraph';

export class LoginPageViewModel extends Observable {
    
    constructor() {
        super(); 
    }
    
    public onMicrosoftTap() {
        SDKHelper.SignInClient()
            .then(()=>{
                folderData.clear();
                navigationModule.goToExplorerPage(new ExplorerPageViewModel('root', null), true);
            })
            .catch((er)=>{
                alert('Error: ' + er);
            });
    }
}

import { Observable, EventData } from "data/observable";
import { ExplorerPageViewModel } from '../../pages/explorer-page/explorer-page-vm';
import * as navigationModule from '../../shared/navigation';
import * as msGraphModule from '../../shared/ms-graph';

export class LoginPageViewModel extends Observable {
    
    constructor() {
        super(); 
    }
    
    public onMicrosoftTap() {
        msGraphModule.login()
            .then(()=>{
                navigationModule.goToExplorerPage(new ExplorerPageViewModel('root'), true);
            })
            .catch((er)=>{
                alert('Error: ' + er);
            });
    }
}

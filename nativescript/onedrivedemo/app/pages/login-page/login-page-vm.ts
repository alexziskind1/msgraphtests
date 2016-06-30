import { Observable, EventData } from "data/observable";
import * as navigationModule from '../../shared/navigation';
import * as msAuthModule from '../../shared/ms-auth';

export class LoginPageViewModel extends Observable {
    
    constructor() {
        super(); 
    }
    
    public onMicrosoftTap() {
        console.log('ms login tap');
        
        msAuthModule.login()
            .then(()=>{
                navigationModule.goToExplorerPage(null);
            })
            .catch((er)=>{
                alert('Error: ' + er);
            });

    }
}

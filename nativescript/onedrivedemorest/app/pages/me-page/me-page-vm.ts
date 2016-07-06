import { Observable, EventData } from "data/observable";
import { ExplorerPageViewModel } from '../../pages/explorer-page/explorer-page-vm';
import * as navigationModule from '../../shared/navigation';
import * as msGraphModule from '../../shared/ms-graph';
import * as httpModule from 'http';
import * as constantsModule from '../../shared/constants';

export class MePageViewModel extends Observable {
    
    public name: string = 'hello';

    constructor() {
        super(); 
    }

    public onLoadMeTap(args: EventData) {
        console.log('on loadme tap');
        this.loadMeHttp();
    }

    public loadMeHttp() {
        var req : httpModule.HttpRequestOptions = {
            url: constantsModule.GRAPH_RESOURCE + 'v1.0/me',
            method: "GET",
            headers: {
                Authorization: "Bearer " + msGraphModule.accessToken
            }
        };

        httpModule.getJSON(req)
            .then((a1:any)=>{
                console.log('ok');
                console.log(a1);
                this.set("name", a1.displayName);
            })
            .catch((er)=>{
                console.log(er);
            });
    }
}

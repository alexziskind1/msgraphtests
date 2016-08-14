import { Observable, EventData } from "data/observable";
import { ExplorerPageViewModel } from '../../pages/explorer-page/explorer-page-vm';
import * as navigationModule from '../../shared/navigation';
//import * as msGraphModule from '../../shared/ms-graph';
import * as folderData from '../../shared/folder-data';
import * as httpModule from 'http';
import * as constantsModule from '../../shared/constants';
import {ImageSource} from 'image-source';

export class ContentPageViewModel extends Observable {
    

    

    constructor(public explorerModel: ExplorerPageViewModel) {
        super();
        this.set('imgContentSrc', "https://www.google.com/images/errors/logo_sm_2.png");
    }

    public loadContent() {
        /*
        var url = constantsModule.GRAPH_RESOURCE + 'v1.0/me/drive/items/' + this.explorerModel.id + '/content';
        console.log('loading content for url: ' + url);
        var req : httpModule.HttpRequestOptions = {
            url: url,
            method: "GET",
            headers: {
                Authorization: "Bearer " + msGraphModule.accessToken
            }
        };

        return msGraphModule.login()
            .then(()=>{
                return new Promise<void>((resolve, reject)=>{
                    if (msGraphModule.accessTokenExpired()) {
                        var er = 'access token expired';
                        this.showErrorAlert(er);
                        reject(er);
                    } else {
                        httpModule.getImage(req)
                            .then((response:ImageSource)=>{
                                console.log('got response');
                                console.log(response);
                                this.set('imgContentSrc', response);

                                resolve();
                            })
                            .catch((error)=>{
                                console.error('got error');
                                this.showErrorAlert(error);
                                reject(error);
                            });
                    }
                });
            });
            */
    }

    private showErrorAlert(error) {
        alert(error);
        console.error(error);
    }
    
}

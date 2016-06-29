import * as httpModule from 'http';
import * as constantsModule from '../shared/constants';

export class SessionsService {
    
    private _useHttpService: boolean = false;

    public loadSessions<T>() : Promise<T> {
        return this.loadSessionsViaHttp<T>();
    }
    
    private loadSessionsViaHttp<T>() : Promise<T>  {
        var reqParams = {
            url: constantsModule.AZURE_URL + constantsModule.AZURE_TABLE_PATH + constantsModule.AZURE_TABLE_NAME + '?$orderby=start',
            method: 'GET',
            headers: constantsModule.AZURE_VERSION_HEADER
        };
        return httpModule.getJSON<T>(reqParams);
    }
    
}


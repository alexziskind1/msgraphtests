import * as Microsoft from './Microsoft';
import {IBaseClient} from './IBaseClient';
import {EntityRequestBuilder} from './EntityRequestBuilder';
import {IDirectoryObjectRequest} from './IDirectoryObjectRequest';
import {DirectoryObjectRequest} from './DirectoryObjectRequest';
import {Option} from './Option';
import { BaseRequestBuilder } from './BaseRequestBuilder';



export class DirectoryObjectRequestBuilder extends BaseRequestBuilder implements Microsoft.Graph.DirectoryObjectRequestBuilder {
    
    constructor(
             requestUrl: string,
             client: IBaseClient)
            
        {
            super(requestUrl, client);
        }

    public Request(options?: Option[]) : IDirectoryObjectRequest {
        return new DirectoryObjectRequest(this.RequestUrl, this.Client, options);
    }

}
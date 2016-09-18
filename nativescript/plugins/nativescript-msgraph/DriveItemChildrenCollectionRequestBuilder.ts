import * as Microsoft from './Microsoft';
import {IBaseClient} from './IBaseClient';
import {IDriveItemChildrenCollectionRequestBuilder} from './IDriveItemChildrenCollectionRequestBuilder';
import {BaseRequestBuilder} from './BaseRequestBuilder';
import {IDriveItemChildrenCollectionRequest} from './IDriveItemChildrenCollectionRequest';
import {DriveItemChildrenCollectionRequest} from './DriveItemChildrenCollectionRequest';
import {DriveItemRequestBuilder} from './DriveItemRequestBuilder';
import {IDriveItemRequestBuilder} from './IDriveItemRequestBuilder';
import {Option} from './Option';

export class DriveItemChildrenCollectionRequestBuilder extends BaseRequestBuilder implements IDriveItemChildrenCollectionRequestBuilder {

    constructor(requestUrl : string,
             client :IBaseClient) 
    {
        super(requestUrl, client);
    }

    public  Request(options?: Option[]) : IDriveItemChildrenCollectionRequest {
        return new DriveItemChildrenCollectionRequest(this.RequestUrl, this.Client, options);
    }

    public Item(id: string) : IDriveItemRequestBuilder {
        return new DriveItemRequestBuilder(this.AppendSegmentToRequestUrl(id), this.Client);
    }

}
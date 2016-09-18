import {IBaseClient} from './IBaseClient';
import {BaseRequestBuilder} from './BaseRequestBuilder';
import {IDriveItemsCollectionRequestBuilder} from './IDriveItemsCollectionRequestBuilder';
import {IDriveItemsCollectionRequest} from './IDriveItemsCollectionRequest';
import {DriveItemsCollectionRequest} from './DriveItemsCollectionRequest';
import {IDriveItemRequestBuilder} from './IDriveItemRequestBuilder';
import {DriveItemRequestBuilder} from './DriveItemRequestBuilder';
import {Option} from './Option';

export class DriveItemsCollectionRequestBuilder extends BaseRequestBuilder implements IDriveItemsCollectionRequestBuilder {

    constructor(requestUrl: string, client: IBaseClient){
        super(requestUrl, client);
    }

    public Request(options?: Option[]) : IDriveItemsCollectionRequest {
        return new DriveItemsCollectionRequest(this.RequestUrl, this.Client, options);
    }

    public Item(id: string) : IDriveItemRequestBuilder {
         return new DriveItemRequestBuilder(this.AppendSegmentToRequestUrl(id), this.Client);
    }

}
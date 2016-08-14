import {IBaseClient} from './IBaseClient';
import {EntityRequestBuilder} from './EntityRequestBuilder';
import {IDriveItemRequestBuilder} from './IDriveItemRequestBuilder';
import {IDriveItemRequest} from './IDriveItemRequest';
import {DriveItemRequest} from './DriveItemRequest';
import {Option} from './Option';

export class DriveItemRequestBuilder extends EntityRequestBuilder implements IDriveItemRequestBuilder {
    Children: Microsoft.Graph.IDriveItemChildrenCollectionRequestBuilder;
    Content: Microsoft.Graph.IDriveItemContentRequestBuilder;
    CreatedByUser: Microsoft.Graph.IUserWithReferenceRequestBuilder;
    LastModifiedByUser: Microsoft.Graph.IUserWithReferenceRequestBuilder;
    Permissions: Microsoft.Graph.IDriveItemPermissionsCollectionRequestBuilder;
    Thumbnails: Microsoft.Graph.IDriveItemThumbnailsCollectionRequestBuilder;


    constructor(requestUrl: string, client: IBaseClient) {
        super(requestUrl, client);
    }

    public Request(options?: Option[]) : IDriveItemRequest {    
        return new DriveItemRequest(this.RequestUrl, this.Client, options);
    }

}
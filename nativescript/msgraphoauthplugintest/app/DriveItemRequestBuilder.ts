import {IBaseClient} from './IBaseClient';
import {EntityRequestBuilder} from './EntityRequestBuilder';
import {IDriveItemRequestBuilder} from './IDriveItemRequestBuilder';
import {IDriveItemRequest} from './IDriveItemRequest';
import {DriveItemRequest} from './DriveItemRequest';
import {Option} from './Option';
import {IDriveItemChildrenCollectionRequestBuilder} from './IDriveItemChildrenCollectionRequestBuilder';
import {DriveItemChildrenCollectionRequestBuilder} from './DriveItemChildrenCollectionRequestBuilder';

export class DriveItemRequestBuilder extends EntityRequestBuilder implements IDriveItemRequestBuilder {
    //Children: IDriveItemChildrenCollectionRequestBuilder;
    Content: Microsoft.Graph.IDriveItemContentRequestBuilder;
    CreatedByUser: Microsoft.Graph.IUserWithReferenceRequestBuilder;
    LastModifiedByUser: Microsoft.Graph.IUserWithReferenceRequestBuilder;
    Permissions: Microsoft.Graph.IDriveItemPermissionsCollectionRequestBuilder;
    Thumbnails: Microsoft.Graph.IDriveItemThumbnailsCollectionRequestBuilder;


    constructor(requestUrl: string, client: IBaseClient) {
        super(requestUrl, client);
    }

    public get Children() : IDriveItemChildrenCollectionRequestBuilder {
        return new DriveItemChildrenCollectionRequestBuilder(this.AppendSegmentToRequestUrl("children"), this.Client);
    }

    public Request(options?: Option[]) : IDriveItemRequest {    
        return new DriveItemRequest(this.RequestUrl, this.Client, options);
    }

}
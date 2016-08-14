import {IBaseClient} from './IBaseClient';
import {EntityRequestBuilder} from './EntityRequestBuilder';

export class DriveItemRequestBuilder extends EntityRequestBuilder implements Microsoft.Graph.IDriveItemRequestBuilder {
    Children: Microsoft.Graph.IDriveItemChildrenCollectionRequestBuilder;
    Content: Microsoft.Graph.IDriveItemContentRequestBuilder;
    CreatedByUser: Microsoft.Graph.IUserWithReferenceRequestBuilder;
    LastModifiedByUser: Microsoft.Graph.IUserWithReferenceRequestBuilder;
    Permissions: Microsoft.Graph.IDriveItemPermissionsCollectionRequestBuilder;
    Thumbnails: Microsoft.Graph.IDriveItemThumbnailsCollectionRequestBuilder;


    constructor(requestUrl: string, client: IBaseClient) {
        super(requestUrl, client);
    }

}
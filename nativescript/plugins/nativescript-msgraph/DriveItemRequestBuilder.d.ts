import * as Microsoft from './Microsoft';
import { IBaseClient } from './IBaseClient';
import { EntityRequestBuilder } from './EntityRequestBuilder';
import { IDriveItemRequestBuilder } from './IDriveItemRequestBuilder';
import { IDriveItemRequest } from './IDriveItemRequest';
import { Option } from './Option';
import { IDriveItemChildrenCollectionRequestBuilder } from './IDriveItemChildrenCollectionRequestBuilder';
import { IWorkbookRequestBuilder } from './IWorkbookRequestBuilder';
export declare class DriveItemRequestBuilder extends EntityRequestBuilder implements IDriveItemRequestBuilder {
    Content: Microsoft.Graph.IDriveItemContentRequestBuilder;
    CreatedByUser: Microsoft.Graph.IUserWithReferenceRequestBuilder;
    LastModifiedByUser: Microsoft.Graph.IUserWithReferenceRequestBuilder;
    Permissions: Microsoft.Graph.IDriveItemPermissionsCollectionRequestBuilder;
    Thumbnails: Microsoft.Graph.IDriveItemThumbnailsCollectionRequestBuilder;
    constructor(requestUrl: string, client: IBaseClient);
    Children: IDriveItemChildrenCollectionRequestBuilder;
    Workbook: IWorkbookRequestBuilder;
    Request(options?: Option[]): IDriveItemRequest;
}

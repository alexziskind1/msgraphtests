import * as Microsoft from './Microsoft';
import { IBaseClient } from './IBaseClient';
import { EntityRequestBuilder } from './EntityRequestBuilder';
import { IDriveItemRequestBuilder } from './IDriveItemRequestBuilder';
import { IDriveRequestBuilder } from './IDriveRequestBuilder';
import { IDriveItemsCollectionRequestBuilder } from './IDriveItemsCollectionRequestBuilder';
export declare class DriveRequestBuilder extends EntityRequestBuilder implements IDriveRequestBuilder {
    Special: Microsoft.Graph.IDriveSpecialCollectionRequestBuilder;
    constructor(requestUrl: string, client: IBaseClient);
    Root: IDriveItemRequestBuilder;
    Items: IDriveItemsCollectionRequestBuilder;
}

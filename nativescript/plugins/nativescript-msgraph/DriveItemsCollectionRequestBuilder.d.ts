import { IBaseClient } from './IBaseClient';
import { BaseRequestBuilder } from './BaseRequestBuilder';
import { IDriveItemsCollectionRequestBuilder } from './IDriveItemsCollectionRequestBuilder';
import { IDriveItemsCollectionRequest } from './IDriveItemsCollectionRequest';
import { IDriveItemRequestBuilder } from './IDriveItemRequestBuilder';
import { Option } from './Option';
export declare class DriveItemsCollectionRequestBuilder extends BaseRequestBuilder implements IDriveItemsCollectionRequestBuilder {
    constructor(requestUrl: string, client: IBaseClient);
    Request(options?: Option[]): IDriveItemsCollectionRequest;
    Item(id: string): IDriveItemRequestBuilder;
}

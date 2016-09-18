import { IBaseClient } from './IBaseClient';
import { IDriveItemChildrenCollectionRequestBuilder } from './IDriveItemChildrenCollectionRequestBuilder';
import { BaseRequestBuilder } from './BaseRequestBuilder';
import { IDriveItemChildrenCollectionRequest } from './IDriveItemChildrenCollectionRequest';
import { IDriveItemRequestBuilder } from './IDriveItemRequestBuilder';
import { Option } from './Option';
export declare class DriveItemChildrenCollectionRequestBuilder extends BaseRequestBuilder implements IDriveItemChildrenCollectionRequestBuilder {
    constructor(requestUrl: string, client: IBaseClient);
    Request(options?: Option[]): IDriveItemChildrenCollectionRequest;
    Item(id: string): IDriveItemRequestBuilder;
}

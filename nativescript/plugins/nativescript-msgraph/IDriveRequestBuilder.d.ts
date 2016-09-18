import * as Microsoft from './Microsoft';
import { Option } from './Option';
import { IDriveRequest } from './IDriveRequest';
import { IDriveItemRequestBuilder } from './IDriveItemRequestBuilder';
import { IDriveItemsCollectionRequestBuilder } from './IDriveItemsCollectionRequestBuilder';
export interface IDriveRequestBuilder extends Microsoft.Graph.IDriveRequestBuilder {
    Items: IDriveItemsCollectionRequestBuilder;
    Root: IDriveItemRequestBuilder;
    Request(options?: Option[]): IDriveRequest;
}

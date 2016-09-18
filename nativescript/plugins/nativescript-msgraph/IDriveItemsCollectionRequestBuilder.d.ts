import * as Microsoft from './Microsoft';
import { Option } from './Option';
import { IDriveItemsCollectionRequest } from './IDriveItemsCollectionRequest';
import { IDriveItemRequestBuilder } from './IDriveItemRequestBuilder';
export interface IDriveItemsCollectionRequestBuilder extends Microsoft.Graph.IDriveItemsCollectionRequestBuilder {
    Request(options?: Option[]): IDriveItemsCollectionRequest;
    Item(id: string): IDriveItemRequestBuilder;
}

import * as Microsoft from './Microsoft';
import { IDriveItemRequestBuilder } from './IDriveItemRequestBuilder';
import { Option } from './Option';
import { IDriveItemChildrenCollectionRequest } from './IDriveItemChildrenCollectionRequest';
export interface IDriveItemChildrenCollectionRequestBuilder extends Microsoft.Graph.IDriveItemChildrenCollectionRequestBuilder {
    Item(id: string): IDriveItemRequestBuilder;
    Request(options?: Option[]): IDriveItemChildrenCollectionRequest;
}

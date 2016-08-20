
import {Option} from './Option';
import {IDriveItemRequest} from './IDriveItemRequest';
import {IDriveItemChildrenCollectionRequestBuilder} from './IDriveItemChildrenCollectionRequestBuilder';

export interface IDriveItemRequestBuilder extends Microsoft.Graph.IDriveItemRequestBuilder {

    Children: IDriveItemChildrenCollectionRequestBuilder;

    Request(options?: Option[]): IDriveItemRequest;
}
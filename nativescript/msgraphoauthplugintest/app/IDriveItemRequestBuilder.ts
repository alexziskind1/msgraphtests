
import {Option} from './Option';
import {IDriveItemRequest} from './IDriveItemRequest';

export interface IDriveItemRequestBuilder extends Microsoft.Graph.IDriveItemRequestBuilder {

    Request(options?: Option[]): IDriveItemRequest;
}
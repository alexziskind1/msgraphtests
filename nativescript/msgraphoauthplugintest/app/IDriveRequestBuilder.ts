import {Option} from './Option';
import {IDriveRequest} from './IDriveRequest';
import {IDriveItemRequestBuilder} from './IDriveItemRequestBuilder';

export interface IDriveRequestBuilder extends Microsoft.Graph.IDriveRequestBuilder {

    Root: IDriveItemRequestBuilder;
    Request(options?: Option[]) : IDriveRequest;
}
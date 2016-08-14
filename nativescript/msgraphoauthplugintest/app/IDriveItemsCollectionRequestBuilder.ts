import {Option} from './Option';
import {IDriveItemsCollectionRequest} from './IDriveItemsCollectionRequest';

export interface IDriveItemsCollectionRequestBuilder extends Microsoft.Graph.IDriveItemsCollectionRequestBuilder {

    Request(options?: Option[]) : IDriveItemsCollectionRequest;
}
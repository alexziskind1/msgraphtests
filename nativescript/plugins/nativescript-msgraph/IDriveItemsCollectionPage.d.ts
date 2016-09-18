import * as Microsoft from './Microsoft';
import { IBaseClient } from './IBaseClient';
import { ICollectionPage } from './ICollectionPage';
import { IDriveItemsCollectionRequest } from './IDriveItemsCollectionRequest';
export interface IDriveItemsCollectionPage extends ICollectionPage<Microsoft.Graph.DriveItem> {
    NextPageRequest: IDriveItemsCollectionRequest;
    InitializeNextPageRequest(client: IBaseClient, nextPageLinkString: string): any;
}

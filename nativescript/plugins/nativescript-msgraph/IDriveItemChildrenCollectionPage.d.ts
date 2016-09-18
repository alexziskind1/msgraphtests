import * as Microsoft from './Microsoft';
import { IBaseClient } from './IBaseClient';
import { ICollectionPage } from './ICollectionPage';
import { IDriveItemChildrenCollectionRequest } from './IDriveItemChildrenCollectionRequest';
export interface IDriveItemChildrenCollectionPage extends ICollectionPage<Microsoft.Graph.DriveItem> {
    NextPageRequest: IDriveItemChildrenCollectionRequest;
    InitializeNextPageRequest(client: IBaseClient, nextPageLinkString: string): any;
}

import * as Microsoft from './Microsoft';
import {IBaseClient} from './IBaseClient';
import {ICollectionPage} from './ICollectionPage';
import {IDriveItemChildrenCollectionRequest} from './IDriveItemChildrenCollectionRequest';

export interface IDriveItemChildrenCollectionPage extends ICollectionPage<Microsoft.Graph.DriveItem> {

    /// <summary>
    /// Gets the next page <see cref="IDriveItemChildrenCollectionRequest"/> instance.
    /// </summary>
    NextPageRequest : IDriveItemChildrenCollectionRequest;

    /// <summary>
    /// Initializes the NextPageRequest property.
    /// </summary>
    InitializeNextPageRequest(client : IBaseClient, nextPageLinkString: string);

}
import * as Microsoft from './Microsoft';
import {IBaseClient} from './IBaseClient';
import {ICollectionPage} from './ICollectionPage';
import {IDriveItemsCollectionRequest} from './IDriveItemsCollectionRequest';

export interface IDriveItemsCollectionPage extends ICollectionPage<Microsoft.Graph.DriveItem> {

    /// <summary>
    /// Gets the next page <see cref="IDriveItemsCollectionRequest"/> instance.
    /// </summary>
    NextPageRequest : IDriveItemsCollectionRequest;

    /// <summary>
    /// Initializes the NextPageRequest property.
    /// </summary>
    InitializeNextPageRequest(client : IBaseClient, nextPageLinkString: string);

}
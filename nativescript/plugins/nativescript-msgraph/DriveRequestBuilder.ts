import * as Microsoft from './Microsoft';
import {IBaseClient} from './IBaseClient';
import {EntityRequestBuilder} from './EntityRequestBuilder';
import {DriveItemRequestBuilder} from './DriveItemRequestBuilder';
import {IDriveItemRequestBuilder} from './IDriveItemRequestBuilder';
import {IDriveRequestBuilder} from './IDriveRequestBuilder';
import {IDriveRequest} from './IDriveRequest';
import {DriveRequest} from './DriveRequest';
import {IDriveItemsCollectionRequestBuilder} from './IDriveItemsCollectionRequestBuilder';
import {DriveItemsCollectionRequestBuilder} from './DriveItemsCollectionRequestBuilder';

export class DriveRequestBuilder extends EntityRequestBuilder implements IDriveRequestBuilder {
    //Items: IDriveItemsCollectionRequestBuilder;
    //Root: IDriveItemRequestBuilder;
    Special: Microsoft.Graph.IDriveSpecialCollectionRequestBuilder;

    constructor( requestUrl: string, client: IBaseClient) {
        super(requestUrl, client);
    }

    /// <summary>
    /// Gets the request builder for Root.
    /// </summary>
    /// <returns>The <see cref="IDriveItemRequestBuilder"/>.</returns>
    public get Root() : IDriveItemRequestBuilder {
        return new DriveItemRequestBuilder(this.AppendSegmentToRequestUrl("root"), this.Client);
    }

    public get Items() : IDriveItemsCollectionRequestBuilder {
        return new DriveItemsCollectionRequestBuilder(this.AppendSegmentToRequestUrl("items"), this.Client);
    }

}
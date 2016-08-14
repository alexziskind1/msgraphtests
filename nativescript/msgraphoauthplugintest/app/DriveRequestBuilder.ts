import {IBaseClient} from './IBaseClient';
import {EntityRequestBuilder} from './EntityRequestBuilder';
import {DriveItemRequestBuilder} from './DriveItemRequestBuilder';
import {IDriveItemRequestBuilder} from './IDriveItemRequestBuilder';
import {IDriveRequestBuilder} from './IDriveRequestBuilder';
import {IDriveRequest} from './IDriveRequest';
import {DriveRequest} from './DriveRequest';

export class DriveRequestBuilder extends EntityRequestBuilder implements IDriveRequestBuilder {
    Items: Microsoft.Graph.IDriveItemsCollectionRequestBuilder;
    //Root: Microsoft.Graph.IDriveItemRequestBuilder;
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

}
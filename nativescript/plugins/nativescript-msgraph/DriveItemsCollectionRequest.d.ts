import * as Microsoft from './Microsoft';
import { IBaseClient } from './IBaseClient';
import { BaseRequest } from './BaseRequest';
import { IDriveItemsCollectionRequest } from './IDriveItemsCollectionRequest';
import { Option } from './Option';
import { CancellationToken } from './CancellationToken';
import { IDriveItemsCollectionPage } from './IDriveItemsCollectionPage';
export declare class DriveItemsCollectionRequest extends BaseRequest implements IDriveItemsCollectionRequest {
    constructor(requestUrl: string, client: IBaseClient, options?: Option[]);
    Add(driveItem: Microsoft.Graph.DriveItem, cancellationToken?: CancellationToken): Promise<Microsoft.Graph.DriveItem>;
    Get(cancellationToken?: CancellationToken): Promise<IDriveItemsCollectionPage>;
    Expand(value: string): IDriveItemsCollectionRequest;
    Select(value: string): IDriveItemsCollectionRequest;
    Top(value: number): IDriveItemsCollectionRequest;
    Filter(value: string): IDriveItemsCollectionRequest;
    Skip(value: number): IDriveItemsCollectionRequest;
    OrderBy(value: string): IDriveItemsCollectionRequest;
}

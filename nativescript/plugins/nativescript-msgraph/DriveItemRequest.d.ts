import * as Microsoft from './Microsoft';
import { IBaseClient } from './IBaseClient';
import { BaseRequest } from './BaseRequest';
import { IDriveItemRequest } from './IDriveItemRequest';
import { Option } from './Option';
import { CancellationToken } from './CancellationToken';
export declare class DriveItemRequest extends BaseRequest implements IDriveItemRequest {
    constructor(requestUrl: string, client: IBaseClient, options?: Option[]);
    Create(driveItemToCreate: Microsoft.Graph.DriveItem, cancellationToken?: CancellationToken): Promise<Microsoft.Graph.DriveItem>;
    Delete(cancellationToken?: CancellationToken): Promise<void>;
    Get(cancellationToken?: CancellationToken): Promise<Microsoft.Graph.DriveItem>;
    Update(driveItemToUpdate: Microsoft.Graph.DriveItem, cancellationToken?: CancellationToken): Promise<Microsoft.Graph.DriveItem>;
    Expand(value: string): IDriveItemRequest;
    Select(value: string): IDriveItemRequest;
    private InitializeCollectionProperties(di);
}

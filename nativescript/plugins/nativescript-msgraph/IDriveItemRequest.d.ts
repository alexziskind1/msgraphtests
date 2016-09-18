import * as Microsoft from './Microsoft';
import { IBaseRequest } from './IBaseRequest';
import { CancellationToken } from './CancellationToken';
export interface IDriveItemRequest extends IBaseRequest {
    Create(driveItemToCreate: Microsoft.Graph.DriveItem, cancellationToken?: CancellationToken): Promise<Microsoft.Graph.DriveItem>;
    Delete(cancellationToken?: CancellationToken): Promise<void>;
    Get(cancellationToken?: CancellationToken): Promise<Microsoft.Graph.DriveItem>;
    Update(driveItemToUpdate: Microsoft.Graph.DriveItem, cancellationToken?: CancellationToken): Promise<Microsoft.Graph.DriveItem>;
    Expand(value: string): IDriveItemRequest;
    Select(value: string): IDriveItemRequest;
}

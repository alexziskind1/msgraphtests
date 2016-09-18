import * as Microsoft from './Microsoft';
import { IBaseRequest } from './IBaseRequest';
import { CancellationToken } from './CancellationToken';
import { IDriveItemsCollectionPage } from './IDriveItemsCollectionPage';
export interface IDriveItemsCollectionRequest extends IBaseRequest {
    Add(driveItem: Microsoft.Graph.DriveItem, cancellationToken?: CancellationToken): Promise<Microsoft.Graph.DriveItem>;
    Get(cancellationToken?: CancellationToken): Promise<IDriveItemsCollectionPage>;
    Expand(value: string): IDriveItemsCollectionRequest;
    Select(value: string): IDriveItemsCollectionRequest;
    Top(value: number): IDriveItemsCollectionRequest;
    Filter(value: string): IDriveItemsCollectionRequest;
    Skip(value: number): IDriveItemsCollectionRequest;
    OrderBy(value: string): IDriveItemsCollectionRequest;
}

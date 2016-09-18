import * as Microsoft from './Microsoft';
import { IBaseRequest } from './IBaseRequest';
import { CancellationToken } from './CancellationToken';
import { IDriveItemChildrenCollectionPage } from './IDriveItemChildrenCollectionPage';
export interface IDriveItemChildrenCollectionRequest extends IBaseRequest {
    Add(driveItem: Microsoft.Graph.DriveItem, cancellationToken?: CancellationToken): Promise<Microsoft.Graph.DriveItem>;
    Get(cancellationToken?: CancellationToken): Promise<IDriveItemChildrenCollectionPage>;
    Expand(value: string): IDriveItemChildrenCollectionRequest;
    Select(value: string): IDriveItemChildrenCollectionRequest;
    Top(value: number): IDriveItemChildrenCollectionRequest;
    Filter(value: string): IDriveItemChildrenCollectionRequest;
    Skip(value: number): IDriveItemChildrenCollectionRequest;
    OrderBy(value: string): IDriveItemChildrenCollectionRequest;
}

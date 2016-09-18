import * as Microsoft from './Microsoft';
import { IBaseClient } from './IBaseClient';
import { BaseRequest } from './BaseRequest';
import { IDriveItemChildrenCollectionRequest } from './IDriveItemChildrenCollectionRequest';
import { Option } from './Option';
import { CancellationToken } from './CancellationToken';
import { IDriveItemChildrenCollectionPage } from './IDriveItemChildrenCollectionPage';
export declare class DriveItemChildrenCollectionRequest extends BaseRequest implements IDriveItemChildrenCollectionRequest {
    constructor(requestUrl: string, client: IBaseClient, options?: Option[]);
    Add(driveItem: Microsoft.Graph.DriveItem, cancellationToken?: CancellationToken): Promise<Microsoft.Graph.DriveItem>;
    Get(cancellationToken?: CancellationToken): Promise<IDriveItemChildrenCollectionPage>;
    Expand(value: string): IDriveItemChildrenCollectionRequest;
    Select(value: string): IDriveItemChildrenCollectionRequest;
    Top(value: number): IDriveItemChildrenCollectionRequest;
    Filter(value: string): IDriveItemChildrenCollectionRequest;
    Skip(value: number): IDriveItemChildrenCollectionRequest;
    OrderBy(value: string): IDriveItemChildrenCollectionRequest;
    private InitializeCollectionProperties(di);
}

import * as Microsoft from './Microsoft';
import { IBaseClient } from './IBaseClient';
import { IDriveRequest } from './IDriveRequest';
import { BaseRequest } from './BaseRequest';
import { Option } from './Option';
import { CancellationToken } from './CancellationToken';
export declare class DriveRequest extends BaseRequest implements IDriveRequest {
    constructor(requestUrl: string, client: IBaseClient, options?: Option[]);
    Create(driveToCreate: Microsoft.Graph.Drive, cancellationToken?: CancellationToken): Promise<Microsoft.Graph.Drive>;
    Delete(cancellationToken?: CancellationToken): void;
    Get(cancellationToken?: CancellationToken): Promise<Microsoft.Graph.Drive>;
    Update(driveToUpdate: Microsoft.Graph.Drive, cancellationToken?: CancellationToken): Promise<Microsoft.Graph.Drive>;
    Expand(value: string): IDriveRequest;
    Select(value: string): IDriveRequest;
    private InitializeCollectionProperties(driveToInitialize);
}

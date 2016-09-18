import * as Microsoft from './Microsoft';
import { IBaseRequest } from './IBaseRequest';
import { CancellationToken } from './CancellationToken';
export interface IDriveRequest extends IBaseRequest {
    Create(driveToCreate: Microsoft.Graph.Drive, cancellationToken?: CancellationToken): Promise<Microsoft.Graph.Drive>;
    Delete(cancellationToken?: CancellationToken): any;
    Get(cancellationToken?: CancellationToken): Promise<Microsoft.Graph.Drive>;
    Update(driveToUpdate: Microsoft.Graph.Drive, cancellationToken?: CancellationToken): Promise<Microsoft.Graph.Drive>;
    Expand(value: string): IDriveRequest;
    Select(value: string): IDriveRequest;
}

import * as Microsoft from './Microsoft';
import { IBaseRequest } from './IBaseRequest';
import { CancellationToken } from './CancellationToken';
export interface IDirectoryObjectRequest extends IBaseRequest {
    Create(directoryObjectToCreate: Microsoft.Graph.DirectoryObject, cancellationToken?: CancellationToken): Promise<Microsoft.Graph.DirectoryObject>;
    Delete(cancellationToken?: CancellationToken): any;
    Get(cancellationToken?: CancellationToken): Promise<Microsoft.Graph.DirectoryObject>;
    Update(directoryObjectToUpdate: Microsoft.Graph.DirectoryObject, cancellationToken?: CancellationToken): Promise<Microsoft.Graph.DirectoryObject>;
}

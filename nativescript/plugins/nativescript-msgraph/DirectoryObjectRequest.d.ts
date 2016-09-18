import * as Microsoft from './Microsoft';
import { IBaseClient } from './IBaseClient';
import { IDirectoryObjectRequest } from './IDirectoryObjectRequest';
import { BaseRequest } from './BaseRequest';
import { Option } from './Option';
import { CancellationToken } from './CancellationToken';
export declare class DirectoryObjectRequest extends BaseRequest implements IDirectoryObjectRequest {
    constructor(requestUrl: string, client: IBaseClient, options: Option[]);
    Create(directoryObjectToCreate: Microsoft.Graph.DirectoryObject, cancellationToken?: CancellationToken): Promise<Microsoft.Graph.DirectoryObject>;
    Delete(cancellationToken?: CancellationToken): void;
    Get(cancellationToken?: CancellationToken): Promise<Microsoft.Graph.DirectoryObject>;
    Update(directoryObjectToUpdate: Microsoft.Graph.DirectoryObject, cancellationToken?: CancellationToken): Promise<Microsoft.Graph.DirectoryObject>;
    private InitializeCollectionProperties(directoryObjectToInitialize);
}

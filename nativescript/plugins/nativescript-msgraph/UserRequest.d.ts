import * as Microsoft from './Microsoft';
import { IBaseClient } from './IBaseClient';
import { IUserRequest } from './IUserRequest';
import { BaseRequest } from './BaseRequest';
import { Option } from './Option';
import { CancellationToken } from './CancellationToken';
export declare class UserRequest extends BaseRequest implements IUserRequest {
    constructor(requestUrl: string, client: IBaseClient, options?: Option[]);
    Create(userToCreate: Microsoft.Graph.User, cancellationToken?: CancellationToken): Promise<Microsoft.Graph.User>;
    Delete(cancellationToken?: CancellationToken): void;
    Get(cancellationToken?: CancellationToken): Promise<Microsoft.Graph.User>;
    Update(userToUpdate: Microsoft.Graph.User, cancellationToken?: CancellationToken): Promise<Microsoft.Graph.User>;
    private InitializeCollectionProperties(userToInitialize);
}

import * as Microsoft from './Microsoft';
import { IBaseRequest } from './IBaseRequest';
import { CancellationToken } from './CancellationToken';
export interface IUserRequest extends IBaseRequest {
    Create(userToCreate: Microsoft.Graph.User, cancellationToken?: CancellationToken): Promise<Microsoft.Graph.User>;
    Delete(cancellationToken?: CancellationToken): any;
    Get(cancellationToken?: CancellationToken): Promise<Microsoft.Graph.User>;
    Update(userToUpdate: Microsoft.Graph.User, cancellationToken?: CancellationToken): Promise<Microsoft.Graph.User>;
}

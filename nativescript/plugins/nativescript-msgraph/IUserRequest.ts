import * as Microsoft from './Microsoft';
import {IBaseRequest} from './IBaseRequest';
import {CancellationToken} from './CancellationToken';

export interface IUserRequest extends IBaseRequest {

    /// Creates the specified User using PUT.
    /// </summary>
    /// <param name="userToCreate">The User to create.</param>
    /// <param name="cancellationToken">The <see cref="CancellationToken"/> for the request.</param>
    /// <returns>The created User.</returns>
    Create(userToCreate:Microsoft.Graph.User,  cancellationToken?:CancellationToken) : Promise<Microsoft.Graph.User>;


    /// <summary>
    /// Deletes the specified User.
    /// </summary>
    /// <param name="cancellationToken">The <see cref="CancellationToken"/> for the request.</param>
    /// <returns>The task to await.</returns>
    Delete( cancellationToken?:CancellationToken);


    /// <summary>
    /// Gets the specified User.
    /// </summary>
    /// <param name="cancellationToken">The <see cref="CancellationToken"/> for the request.</param>
    /// <returns>The User.</returns>
    Get( cancellationToken?:CancellationToken): Promise<Microsoft.Graph.User>;


    /// <summary>
    /// Updates the specified User using PATCH.
    /// </summary>
    /// <param name="userToUpdate">The User to update.</param>
    /// <param name="cancellationToken">The <see cref="CancellationToken"/> for the request.</param>
    /// <returns>The updated User.</returns>
    Update(userToUpdate: Microsoft.Graph.User,  cancellationToken?:CancellationToken) : Promise<Microsoft.Graph.User>;
}
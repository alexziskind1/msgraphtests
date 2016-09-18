import * as Microsoft from './Microsoft';
import {IBaseRequest} from './IBaseRequest';
import {CancellationToken} from './CancellationToken';

export interface IDirectoryObjectRequest extends IBaseRequest {

    /// <summary>
    /// Creates the specified DirectoryObject using PUT.
    /// </summary>
    /// <param name="directoryObjectToCreate">The DirectoryObject to create.</param>
    /// <param name="cancellationToken">The <see cref="CancellationToken"/> for the request.</param>
    /// <returns>The created DirectoryObject.</returns>
    Create(directoryObjectToCreate:Microsoft.Graph.DirectoryObject,  cancellationToken?:CancellationToken): Promise<Microsoft.Graph.DirectoryObject>;


    /// <summary>
    /// Deletes the specified DirectoryObject.
    /// </summary>
    /// <param name="cancellationToken">The <see cref="CancellationToken"/> for the request.</param>
    /// <returns>The task to await.</returns>
    Delete( cancellationToken?:CancellationToken);


    /// <summary>
    /// Gets the specified DirectoryObject.
    /// </summary>
    /// <param name="cancellationToken">The <see cref="CancellationToken"/> for the request.</param>
    /// <returns>The DirectoryObject.</returns>
    Get( cancellationToken?:CancellationToken): Promise<Microsoft.Graph.DirectoryObject>;


    /// <summary>
    /// Updates the specified DirectoryObject using PATCH.
    /// </summary>
    /// <param name="directoryObjectToUpdate">The DirectoryObject to update.</param>
    /// <param name="cancellationToken">The <see cref="CancellationToken"/> for the request.</param>
    /// <returns>The updated DirectoryObject.</returns>
    Update(directoryObjectToUpdate:Microsoft.Graph.DirectoryObject,  cancellationToken?:CancellationToken): Promise<Microsoft.Graph.DirectoryObject>;
}
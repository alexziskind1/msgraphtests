import * as Microsoft from './Microsoft';
import {IBaseRequest} from './IBaseRequest';
import {CancellationToken} from './CancellationToken';

export interface IDriveRequest extends IBaseRequest {

      
    /// <summary>
    /// Creates the specified Drive using PUT.
    /// </summary>
    /// <param name="driveToCreate">The Drive to create.</param>
    /// <param name="cancellationToken">The <see cref="CancellationToken"/> for the request.</param>
    /// <returns>The created Drive.</returns>
    Create(driveToCreate: Microsoft.Graph.Drive,  cancellationToken?:CancellationToken) : Promise<Microsoft.Graph.Drive>;



    /// <summary>
    /// Deletes the specified Drive.
    /// </summary>
    /// <param name="cancellationToken">The <see cref="CancellationToken"/> for the request.</param>
    /// <returns>The task to await.</returns>
    Delete( cancellationToken?:CancellationToken);



    /// <summary>
    /// Gets the specified Drive.
    /// </summary>
    /// <param name="cancellationToken">The <see cref="CancellationToken"/> for the request.</param>
    /// <returns>The Drive.</returns>
    Get(cancellationToken?:CancellationToken): Promise<Microsoft.Graph.Drive>;



    /// <summary>
    /// Updates the specified Drive using PATCH.
    /// </summary>
    /// <param name="driveToUpdate">The Drive to update.</param>
    /// <param name="cancellationToken">The <see cref="CancellationToken"/> for the request.</param>
    /// <returns>The updated Drive.</returns>
    Update( driveToUpdate: Microsoft.Graph.Drive,  cancellationToken?:CancellationToken): Promise<Microsoft.Graph.Drive>;

    /// <summary>
    /// Adds the specified expand value to the request.
    /// </summary>
    /// <param name="value">The expand value.</param>
    /// <returns>The request object to send.</returns>
    Expand(value: string) : IDriveRequest;

    /// <summary>
    /// Adds the specified select value to the request.
    /// </summary>
    /// <param name="value">The select value.</param>
    /// <returns>The request object to send.</returns>
    Select( value: string) : IDriveRequest;

}
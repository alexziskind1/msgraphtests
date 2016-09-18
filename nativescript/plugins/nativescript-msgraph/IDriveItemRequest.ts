import * as Microsoft from './Microsoft';
import {IBaseRequest} from './IBaseRequest';
import {CancellationToken} from './CancellationToken';

export interface IDriveItemRequest extends IBaseRequest {
       
        /// <summary>
        /// Creates the specified DriveItem using PUT.
        /// </summary>
        /// <param name="driveItemToCreate">The DriveItem to create.</param>
        /// <param name="cancellationToken">The <see cref="CancellationToken"/> for the request.</param>
        /// <returns>The created DriveItem.</returns>
        Create(driveItemToCreate: Microsoft.Graph.DriveItem, cancellationToken?:CancellationToken) : Promise<Microsoft.Graph.DriveItem>;


        /// <summary>
        /// Deletes the specified DriveItem.
        /// </summary>
        /// <param name="cancellationToken">The <see cref="CancellationToken"/> for the request.</param>
        /// <returns>The task to await.</returns>
        Delete(cancellationToken?:CancellationToken) : Promise<void>;



        /// <summary>
        /// Gets the specified DriveItem.
        /// </summary>
        /// <param name="cancellationToken">The <see cref="CancellationToken"/> for the request.</param>
        /// <returns>The DriveItem.</returns>
        Get(cancellationToken?:CancellationToken) : Promise<Microsoft.Graph.DriveItem>;



        /// <summary>
        /// Updates the specified DriveItem using PATCH.
        /// </summary>
        /// <param name="driveItemToUpdate">The DriveItem to update.</param>
        /// <param name="cancellationToken">The <see cref="CancellationToken"/> for the request.</param>
        /// <returns>The updated DriveItem.</returns>
        Update(driveItemToUpdate: Microsoft.Graph.DriveItem,  cancellationToken?:CancellationToken) : Promise<Microsoft.Graph.DriveItem>;

        /// <summary>
        /// Adds the specified expand value to the request.
        /// </summary>
        /// <param name="value">The expand value.</param>
        /// <returns>The request object to send.</returns>
        Expand(value: string) : IDriveItemRequest;

        /// <summary>
        /// Adds the specified select value to the request.
        /// </summary>
        /// <param name="value">The select value.</param>
        /// <returns>The request object to send.</returns>
        Select(value: string) : IDriveItemRequest;
}
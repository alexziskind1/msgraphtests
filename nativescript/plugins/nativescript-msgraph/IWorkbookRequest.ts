import {IBaseRequest} from './IBaseRequest';
import {CancellationToken} from './CancellationToken';
import {Workbook} from './Workbook';

export interface IWorkbookRequest extends IBaseRequest {


        /// Creates the specified Workbook using PUT.
        /// </summary>
        /// <param name="workbookToCreate">The Workbook to create.</param>
        /// <param name="cancellationToken">The <see cref="CancellationToken"/> for the request.</param>
        /// <returns>The created Workbook.</returns>
        Create(workbookToCreate: Workbook,  cancellationToken?:CancellationToken) : Promise<Workbook>;


        /// <summary>
        /// Deletes the specified Workbook.
        /// </summary>
        /// <param name="cancellationToken">The <see cref="CancellationToken"/> for the request.</param>
        /// <returns>The task to await.</returns>
        Delete( cancellationToken?:CancellationToken) : Promise<void>;


        /// <summary>
        /// Gets the specified Workbook.
        /// </summary>
        /// <param name="cancellationToken">The <see cref="CancellationToken"/> for the request.</param>
        /// <returns>The Workbook.</returns>
        Get(cancellationToken?:CancellationToken) : Promise<Workbook>;


        /// <summary>
        /// Updates the specified Workbook using PATCH.
        /// </summary>
        /// <param name="workbookToUpdate">The Workbook to update.</param>
        /// <param name="cancellationToken">The <see cref="CancellationToken"/> for the request.</param>
        /// <returns>The updated Workbook.</returns>
        Update(workbookToUpdate: Workbook, cancellationToken?:CancellationToken) : Promise<Workbook>;

        /// <summary>
        /// Adds the specified expand value to the request.
        /// </summary>
        /// <param name="value">The expand value.</param>
        /// <returns>The request object to send.</returns>
        Expand(value: string): IWorkbookRequest;

        /// <summary>
        /// Adds the specified select value to the request.
        /// </summary>
        /// <param name="value">The select value.</param>
        /// <returns>The request object to send.</returns>
        Select(value: string): IWorkbookRequest;

}
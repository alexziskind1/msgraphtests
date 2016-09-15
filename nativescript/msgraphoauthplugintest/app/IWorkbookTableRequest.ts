import {IBaseRequest} from './IBaseRequest';
import {CancellationToken} from './CancellationToken';
import {WorkbookTable} from './WorkbookTable';

export interface IWorkbookTableRequest extends IBaseRequest {

       /// <summary>
        /// Creates the specified WorkbookTable using PUT.
        /// </summary>
        /// <param name="workbookTableToCreate">The WorkbookTable to create.</param>
        /// <param name="cancellationToken">The <see cref="CancellationToken"/> for the request.</param>
        /// <returns>The created WorkbookTable.</returns>
        Create(workbookTableToCreate: WorkbookTable, cancellationToken?: CancellationToken ): Promise<WorkbookTable>;



        /// <summary>
        /// Deletes the specified WorkbookTable.
        /// </summary>
        /// <param name="cancellationToken">The <see cref="CancellationToken"/> for the request.</param>
        /// <returns>The task to await.</returns>
        Delete(cancellationToken?: CancellationToken ): Promise<void>;



        /// <summary>
        /// Gets the specified WorkbookTable.
        /// </summary>
        /// <param name="cancellationToken">The <see cref="CancellationToken"/> for the request.</param>
        /// <returns>The WorkbookTable.</returns>
        Get(cancellationToken?: CancellationToken ): Promise<WorkbookTable>;


        /// <summary>
        /// Updates the specified WorkbookTable using PATCH.
        /// </summary>
        /// <param name="workbookTableToUpdate">The WorkbookTable to update.</param>
        /// <param name="cancellationToken">The <see cref="CancellationToken"/> for the request.</param>
        /// <returns>The updated WorkbookTable.</returns>
        Update(workbookTableToUpdate: WorkbookTable, cancellationToken?: CancellationToken ): Promise<WorkbookTable>;

        /// <summary>
        /// Adds the specified expand value to the request.
        /// </summary>
        /// <param name="value">The expand value.</param>
        /// <returns>The request object to send.</returns>
        Expand(value: string): IWorkbookTableRequest;

        /// <summary>
        /// Adds the specified select value to the request.
        /// </summary>
        /// <param name="value">The select value.</param>
        /// <returns>The request object to send.</returns>
        Select(value: string): IWorkbookTableRequest;
}
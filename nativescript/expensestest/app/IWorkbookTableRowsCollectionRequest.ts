import {IBaseRequest} from './IBaseRequest';
import {CancellationToken} from './CancellationToken';
import {WorkbookTableRow} from './WorkbookTableRow';
import {IWorkbookTableRowsCollectionPage} from './IWorkbookTableRowsCollectionPage';

export interface IWorkbookTableRowsCollectionRequest extends IBaseRequest {

        /// <summary>
        /// Adds the specified WorkbookTableRow to the collection via POST.
        /// </summary>
        /// <param name="workbookTableRow">The WorkbookTableRow to add.</param>
        /// <param name="cancellationToken">The <see cref="CancellationToken"/> for the request.</param>
        /// <returns>The created WorkbookTableRow.</returns>
        Add(workbookTableRow: WorkbookTableRow, cancellationToken?:CancellationToken) : Promise<WorkbookTableRow>;

        /// <summary>
        /// Gets the collection page.
        /// </summary>
        /// <param name="cancellationToken">The <see cref="CancellationToken"/> for the request.</param>
        /// <returns>The collection page.</returns>
        Get(cancellationToken?:CancellationToken) : Promise<IWorkbookTableRowsCollectionPage>;

        /// <summary>
        /// Adds the specified expand value to the request.
        /// </summary>
        /// <param name="value">The expand value.</param>
        /// <returns>The request object to send.</returns>
         Expand(value: string): IWorkbookTableRowsCollectionRequest;

        /// <summary>
        /// Adds the specified select value to the request.
        /// </summary>
        /// <param name="value">The select value.</param>
        /// <returns>The request object to send.</returns>
         Select(value: string): IWorkbookTableRowsCollectionRequest;

        /// <summary>
        /// Adds the specified top value to the request.
        /// </summary>
        /// <param name="value">The top value.</param>
        /// <returns>The request object to send.</returns>
         Top(value: number): IWorkbookTableRowsCollectionRequest;

        /// <summary>
        /// Adds the specified filter value to the request.
        /// </summary>
        /// <param name="value">The filter value.</param>
        /// <returns>The request object to send.</returns>
         Filter(value: string): IWorkbookTableRowsCollectionRequest;

        /// <summary>
        /// Adds the specified skip value to the request.
        /// </summary>
        /// <param name="value">The skip value.</param>
        /// <returns>The request object to send.</returns>
         Skip(value: number): IWorkbookTableRowsCollectionRequest;

        /// <summary>
        /// Adds the specified orderby value to the request.
        /// </summary>
        /// <param name="value">The orderby value.</param>
        /// <returns>The request object to send.</returns>
         OrderBy(value: string): IWorkbookTableRowsCollectionRequest;
}
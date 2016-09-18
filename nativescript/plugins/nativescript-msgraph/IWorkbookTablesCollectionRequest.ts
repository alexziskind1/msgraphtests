import {IBaseRequest} from './IBaseRequest';
import {CancellationToken} from './CancellationToken';
import {WorkbookTable} from './WorkbookTable';
import {IWorkbookTablesCollectionPage} from './IWorkbookTablesCollectionPage';

export interface IWorkbookTablesCollectionRequest extends IBaseRequest {

        /// <summary>
        /// Adds the specified WorkbookTable to the collection via POST.
        /// </summary>
        /// <param name="workbookTable">The WorkbookTable to add.</param>
        /// <param name="cancellationToken">The <see cref="CancellationToken"/> for the request.</param>
        /// <returns>The created WorkbookTable.</returns>
        Add( workbookTable: WorkbookTable, cancellationToken?: CancellationToken ) : Promise<WorkbookTable>;

        /// <summary>
        /// Gets the collection page.
        /// </summary>
        /// <param name="cancellationToken">The <see cref="CancellationToken"/> for the request.</param>
        /// <returns>The collection page.</returns>
        Get(cancellationToken?: CancellationToken ) : Promise<IWorkbookTablesCollectionPage>;

        /// <summary>
        /// Adds the specified expand value to the request.
        /// </summary>
        /// <param name="value">The expand value.</param>
        /// <returns>The request object to send.</returns>
        Expand(value:string): IWorkbookTablesCollectionRequest;

        /// <summary>
        /// Adds the specified select value to the request.
        /// </summary>
        /// <param name="value">The select value.</param>
        /// <returns>The request object to send.</returns>
        Select(value:string): IWorkbookTablesCollectionRequest;

        /// <summary>
        /// Adds the specified top value to the request.
        /// </summary>
        /// <param name="value">The top value.</param>
        /// <returns>The request object to send.</returns>
        Top(value: number): IWorkbookTablesCollectionRequest;

        /// <summary>
        /// Adds the specified filter value to the request.
        /// </summary>
        /// <param name="value">The filter value.</param>
        /// <returns>The request object to send.</returns>
        Filter(value:string): IWorkbookTablesCollectionRequest;

        /// <summary>
        /// Adds the specified skip value to the request.
        /// </summary>
        /// <param name="value">The skip value.</param>
        /// <returns>The request object to send.</returns>
        Skip(value: number): IWorkbookTablesCollectionRequest;

        /// <summary>
        /// Adds the specified orderby value to the request.
        /// </summary>
        /// <param name="value">The orderby value.</param>
        /// <returns>The request object to send.</returns>
        OrderBy(value:string): IWorkbookTablesCollectionRequest;


}
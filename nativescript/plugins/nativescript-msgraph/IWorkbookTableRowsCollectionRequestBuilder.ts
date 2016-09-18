import {Option} from './option';
import {IWorkbookTableRowsCollectionRequest} from './IWorkbookTableRowsCollectionRequest';


export interface IWorkbookTableRowsCollectionRequestBuilder {

        /// <summary>
        /// Builds the request.
        /// </summary>
        /// <param name="options">The query and header options for the request.</param>
        /// <returns>The built request.</returns>
        Request(options?: Option[]): IWorkbookTableRowsCollectionRequest;

        /// <summary>
        /// Gets an <see cref="IWorkbookTableRowRequestBuilder"/> for the specified WorkbookTableRow.
        /// </summary>
        /// <param name="id">The ID for the WorkbookTableRow.</param>
        /// <returns>The <see cref="IWorkbookTableRowRequestBuilder"/>.</returns>
        //TableRow(id: string) : IWorkbookTableRowRequestBuilder;

        /// <summary>
        /// Gets the request builder for WorkbookTableRowAdd.
        /// </summary>
        /// <returns>The <see cref="IWorkbookTableRowAddRequestBuilder"/>.</returns>
        //IWorkbookTableRowAddRequestBuilder Add(
        //    Int32? index = null,
        //    Newtonsoft.Json.Linq.JToken values = null);

        /// <summary>
        /// Gets the request builder for WorkbookTableRowItemAt.
        /// </summary>
        /// <returns>The <see cref="IWorkbookTableRowItemAtRequestBuilder"/>.</returns>
        //IWorkbookTableRowItemAtRequestBuilder ItemAt(
        //    Int32 index);

        /// <summary>
        /// Gets the request builder for WorkbookTableRowCount.
        /// </summary>
        /// <returns>The <see cref="IWorkbookTableRowCountRequestBuilder"/>.</returns>
        //IWorkbookTableRowCountRequestBuilder Count();
}
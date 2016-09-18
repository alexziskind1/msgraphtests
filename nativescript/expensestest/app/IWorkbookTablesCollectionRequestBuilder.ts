import {Option} from './Option';
import {IWorkbookTablesCollectionRequest} from './IWorkbookTablesCollectionRequest';
import {IWorkbookTableRequestBuilder} from './IWorkbookTableRequestBuilder';

export interface IWorkbookTablesCollectionRequestBuilder {
            /// <summary>
        /// Builds the request.
        /// </summary>
        /// <param name="options">The query and header options for the request.</param>
        /// <returns>The built request.</returns>
        Request(options?: Option[]): IWorkbookTablesCollectionRequest;

        /// <summary>
        /// Gets an <see cref="IWorkbookTableRequestBuilder"/> for the specified WorkbookTable.
        /// </summary>
        /// <param name="id">The ID for the WorkbookTable.</param>
        /// <returns>The <see cref="IWorkbookTableRequestBuilder"/>.</returns>
        Table(id: string) : IWorkbookTableRequestBuilder;

        /// <summary>
        /// Gets the request builder for WorkbookTableAdd.
        /// </summary>
        /// <returns>The <see cref="IWorkbookTableAddRequestBuilder"/>.</returns>
        //IWorkbookTableAddRequestBuilder Add(
        //    bool hasHeaders,
        //    string address = null);

        /// <summary>
        /// Gets the request builder for WorkbookTableItemAt.
        /// </summary>
        /// <returns>The <see cref="IWorkbookTableItemAtRequestBuilder"/>.</returns>
        //IWorkbookTableItemAtRequestBuilder ItemAt(
        //    Int32 index);

        /// <summary>
        /// Gets the request builder for WorkbookTableCount.
        /// </summary>
        /// <returns>The <see cref="IWorkbookTableCountRequestBuilder"/>.</returns>
        //IWorkbookTableCountRequestBuilder Count();
}
import {Option} from './option';
import {IWorkbookRequest} from './IWorkbookRequest';
import {IWorkbookTablesCollectionRequestBuilder} from './IWorkbookTablesCollectionRequestBuilder';

export interface IWorkbookRequestBuilder {

    Request(options?: Option[]): IWorkbookRequest;
            /// <summary>
        /// Gets the request builder for Tables.
        /// </summary>
        /// <returns>The <see cref="IWorkbookTablesCollectionRequestBuilder"/>.</returns>
    Tables : IWorkbookTablesCollectionRequestBuilder;
}
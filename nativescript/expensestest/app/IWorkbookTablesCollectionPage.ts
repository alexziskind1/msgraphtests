import {IBaseClient} from './IBaseClient';
import {ICollectionPage} from './ICollectionPage';

import {WorkbookTable} from './WorkbookTable';
import {IWorkbookTablesCollectionRequest} from './IWorkbookTablesCollectionRequest';

export interface IWorkbookTablesCollectionPage extends ICollectionPage<WorkbookTable> {

    /// <summary>
    /// Gets the next page <see cref="IWorkbookTablesCollectionRequest"/> instance.
    /// </summary>
    NextPageRequest : IWorkbookTablesCollectionRequest;

    /// <summary>
    /// Initializes the NextPageRequest property.
    /// </summary>
    InitializeNextPageRequest(client : IBaseClient, nextPageLinkString: string);

}
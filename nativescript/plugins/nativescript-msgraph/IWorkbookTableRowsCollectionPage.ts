import {IBaseClient} from './IBaseClient';
import {ICollectionPage} from './ICollectionPage';
import {WorkbookTableRow} from './WorkbookTableRow';


export interface IWorkbookTableRowsCollectionPage extends ICollectionPage<WorkbookTableRow> {

    /// <summary>
    /// Gets the next page <see cref="IWorkbookTablesCollectionRequest"/> instance.
    /// </summary>
    NextPageRequest : IWorkbookTableRowsCollectionPage;

    /// <summary>
    /// Initializes the NextPageRequest property.
    /// </summary>
    InitializeNextPageRequest(client : IBaseClient, nextPageLinkString: string);

}

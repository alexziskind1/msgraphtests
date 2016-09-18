import { IBaseClient } from './IBaseClient';
import { ICollectionPage } from './ICollectionPage';
import { WorkbookTableRow } from './WorkbookTableRow';
export interface IWorkbookTableRowsCollectionPage extends ICollectionPage<WorkbookTableRow> {
    NextPageRequest: IWorkbookTableRowsCollectionPage;
    InitializeNextPageRequest(client: IBaseClient, nextPageLinkString: string): any;
}

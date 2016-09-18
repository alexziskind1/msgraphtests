import { IBaseClient } from './IBaseClient';
import { ICollectionPage } from './ICollectionPage';
import { WorkbookTable } from './WorkbookTable';
import { IWorkbookTablesCollectionRequest } from './IWorkbookTablesCollectionRequest';
export interface IWorkbookTablesCollectionPage extends ICollectionPage<WorkbookTable> {
    NextPageRequest: IWorkbookTablesCollectionRequest;
    InitializeNextPageRequest(client: IBaseClient, nextPageLinkString: string): any;
}

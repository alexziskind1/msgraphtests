import { Option } from './option';
import { IWorkbookRequest } from './IWorkbookRequest';
import { IWorkbookTablesCollectionRequestBuilder } from './IWorkbookTablesCollectionRequestBuilder';
export interface IWorkbookRequestBuilder {
    Request(options?: Option[]): IWorkbookRequest;
    Tables: IWorkbookTablesCollectionRequestBuilder;
}

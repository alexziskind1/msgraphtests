import { Option } from './Option';
import { IWorkbookTablesCollectionRequest } from './IWorkbookTablesCollectionRequest';
import { IWorkbookTableRequestBuilder } from './IWorkbookTableRequestBuilder';
export interface IWorkbookTablesCollectionRequestBuilder {
    Request(options?: Option[]): IWorkbookTablesCollectionRequest;
    Table(id: string): IWorkbookTableRequestBuilder;
}

import { Option } from './Option';
import { IWorkbookTableRequest } from './IWorkbookTableRequest';
import { IWorkbookTableRowsCollectionRequestBuilder } from './IWorkbookTableRowsCollectionRequestBuilder';
export interface IWorkbookTableRequestBuilder {
    Request(options?: Option[]): IWorkbookTableRequest;
    Rows: IWorkbookTableRowsCollectionRequestBuilder;
}

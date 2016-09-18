import { Option } from './option';
import { IWorkbookTableRowsCollectionRequest } from './IWorkbookTableRowsCollectionRequest';
export interface IWorkbookTableRowsCollectionRequestBuilder {
    Request(options?: Option[]): IWorkbookTableRowsCollectionRequest;
}

import { IBaseClient } from './IBaseClient';
import { EntityRequestBuilder } from './EntityRequestBuilder';
import { IWorkbookTableRequestBuilder } from './IWorkbookTableRequestBuilder';
import { IWorkbookTableRequest } from './IWorkbookTableRequest';
import { Option } from './Option';
import { IWorkbookTableRowsCollectionRequestBuilder } from './IWorkbookTableRowsCollectionRequestBuilder';
export declare class WorkbookTableRequestBuilder extends EntityRequestBuilder implements IWorkbookTableRequestBuilder {
    constructor(requestUrl: string, client: IBaseClient);
    Rows: IWorkbookTableRowsCollectionRequestBuilder;
    Request(options?: Option[]): IWorkbookTableRequest;
}

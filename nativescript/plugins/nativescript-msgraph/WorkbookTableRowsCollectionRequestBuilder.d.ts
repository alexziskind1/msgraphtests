import { IBaseClient } from './IBaseClient';
import { BaseRequestBuilder } from './BaseRequestBuilder';
import { IWorkbookTableRowsCollectionRequestBuilder } from './IWorkbookTableRowsCollectionRequestBuilder';
import { IWorkbookTableRowsCollectionRequest } from './IWorkbookTableRowsCollectionRequest';
import { Option } from './Option';
export declare class WorkbookTableRowsCollectionRequestBuilder extends BaseRequestBuilder implements IWorkbookTableRowsCollectionRequestBuilder {
    constructor(requestUrl: string, client: IBaseClient);
    Request(options?: Option[]): IWorkbookTableRowsCollectionRequest;
}

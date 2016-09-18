import { IBaseClient } from './IBaseClient';
import { BaseRequestBuilder } from './BaseRequestBuilder';
import { IWorkbookTablesCollectionRequestBuilder } from './IWorkbookTablesCollectionRequestBuilder';
import { IWorkbookTablesCollectionRequest } from './IWorkbookTablesCollectionRequest';
import { IWorkbookTableRequestBuilder } from './IWorkbookTableRequestBuilder';
import { Option } from './Option';
export declare class WorkbookTablesCollectionRequestBuilder extends BaseRequestBuilder implements IWorkbookTablesCollectionRequestBuilder {
    constructor(requestUrl: string, client: IBaseClient);
    Request(options?: Option[]): IWorkbookTablesCollectionRequest;
    Table(id: string): IWorkbookTableRequestBuilder;
}

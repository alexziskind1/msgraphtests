import { IBaseClient } from './IBaseClient';
import { EntityRequestBuilder } from './EntityRequestBuilder';
import { Option } from './Option';
import { IWorkbookRequestBuilder } from './IWorkbookRequestBuilder';
import { IWorkbookRequest } from './IWorkbookRequest';
import { IWorkbookTablesCollectionRequestBuilder } from './IWorkbookTablesCollectionRequestBuilder';
export declare class WorkbookRequestBuilder extends EntityRequestBuilder implements IWorkbookRequestBuilder {
    constructor(requestUrl: string, client: IBaseClient);
    Tables: IWorkbookTablesCollectionRequestBuilder;
    Request(options?: Option[]): IWorkbookRequest;
}

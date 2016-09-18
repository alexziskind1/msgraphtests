import { IBaseClient } from './IBaseClient';
import { BaseRequest } from './BaseRequest';
import { IWorkbookTablesCollectionRequest } from './IWorkbookTablesCollectionRequest';
import { Option } from './Option';
import { CancellationToken } from './CancellationToken';
import { WorkbookTable } from './WorkbookTable';
import { IWorkbookTablesCollectionPage } from './IWorkbookTablesCollectionPage';
export declare class WorkbookTablesCollectionRequest extends BaseRequest implements IWorkbookTablesCollectionRequest {
    constructor(requestUrl: string, client: IBaseClient, options?: Option[]);
    Add(workbookTable: WorkbookTable, cancellationToken?: CancellationToken): Promise<WorkbookTable>;
    Get(cancellationToken?: CancellationToken): Promise<IWorkbookTablesCollectionPage>;
    Expand(value: string): IWorkbookTablesCollectionRequest;
    Select(value: string): IWorkbookTablesCollectionRequest;
    Top(value: number): IWorkbookTablesCollectionRequest;
    Filter(value: string): IWorkbookTablesCollectionRequest;
    Skip(value: number): IWorkbookTablesCollectionRequest;
    OrderBy(value: string): IWorkbookTablesCollectionRequest;
}

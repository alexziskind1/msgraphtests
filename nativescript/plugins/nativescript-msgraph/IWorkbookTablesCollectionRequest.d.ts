import { IBaseRequest } from './IBaseRequest';
import { CancellationToken } from './CancellationToken';
import { WorkbookTable } from './WorkbookTable';
import { IWorkbookTablesCollectionPage } from './IWorkbookTablesCollectionPage';
export interface IWorkbookTablesCollectionRequest extends IBaseRequest {
    Add(workbookTable: WorkbookTable, cancellationToken?: CancellationToken): Promise<WorkbookTable>;
    Get(cancellationToken?: CancellationToken): Promise<IWorkbookTablesCollectionPage>;
    Expand(value: string): IWorkbookTablesCollectionRequest;
    Select(value: string): IWorkbookTablesCollectionRequest;
    Top(value: number): IWorkbookTablesCollectionRequest;
    Filter(value: string): IWorkbookTablesCollectionRequest;
    Skip(value: number): IWorkbookTablesCollectionRequest;
    OrderBy(value: string): IWorkbookTablesCollectionRequest;
}

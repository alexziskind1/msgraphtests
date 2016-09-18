import { IBaseRequest } from './IBaseRequest';
import { CancellationToken } from './CancellationToken';
import { WorkbookTableRow } from './WorkbookTableRow';
import { IWorkbookTableRowsCollectionPage } from './IWorkbookTableRowsCollectionPage';
export interface IWorkbookTableRowsCollectionRequest extends IBaseRequest {
    Add(workbookTableRow: WorkbookTableRow, cancellationToken?: CancellationToken): Promise<WorkbookTableRow>;
    Get(cancellationToken?: CancellationToken): Promise<IWorkbookTableRowsCollectionPage>;
    Expand(value: string): IWorkbookTableRowsCollectionRequest;
    Select(value: string): IWorkbookTableRowsCollectionRequest;
    Top(value: number): IWorkbookTableRowsCollectionRequest;
    Filter(value: string): IWorkbookTableRowsCollectionRequest;
    Skip(value: number): IWorkbookTableRowsCollectionRequest;
    OrderBy(value: string): IWorkbookTableRowsCollectionRequest;
}

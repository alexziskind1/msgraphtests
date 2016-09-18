import { IBaseClient } from './IBaseClient';
import { BaseRequest } from './BaseRequest';
import { IWorkbookTableRowsCollectionRequest } from './IWorkbookTableRowsCollectionRequest';
import { Option } from './Option';
import { CancellationToken } from './CancellationToken';
import { IWorkbookTableRowsCollectionPage } from './IWorkbookTableRowsCollectionPage';
import { WorkbookTableRow } from './WorkbookTableRow';
export declare class WorkbookTableRowsCollectionRequest extends BaseRequest implements IWorkbookTableRowsCollectionRequest {
    constructor(requestUrl: string, client: IBaseClient, options?: Option[]);
    Add(workbookTableRow: WorkbookTableRow, cancellationToken?: CancellationToken): Promise<WorkbookTableRow>;
    Get(cancellationToken?: CancellationToken): Promise<IWorkbookTableRowsCollectionPage>;
    Expand(value: string): IWorkbookTableRowsCollectionRequest;
    Select(value: string): IWorkbookTableRowsCollectionRequest;
    Top(value: number): IWorkbookTableRowsCollectionRequest;
    Filter(value: string): IWorkbookTableRowsCollectionRequest;
    Skip(value: number): IWorkbookTableRowsCollectionRequest;
    OrderBy(value: string): IWorkbookTableRowsCollectionRequest;
}

import { IBaseRequest } from './IBaseRequest';
import { CancellationToken } from './CancellationToken';
import { WorkbookTable } from './WorkbookTable';
export interface IWorkbookTableRequest extends IBaseRequest {
    Create(workbookTableToCreate: WorkbookTable, cancellationToken?: CancellationToken): Promise<WorkbookTable>;
    Delete(cancellationToken?: CancellationToken): Promise<void>;
    Get(cancellationToken?: CancellationToken): Promise<WorkbookTable>;
    Update(workbookTableToUpdate: WorkbookTable, cancellationToken?: CancellationToken): Promise<WorkbookTable>;
    Expand(value: string): IWorkbookTableRequest;
    Select(value: string): IWorkbookTableRequest;
}

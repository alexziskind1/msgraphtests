import { IBaseRequest } from './IBaseRequest';
import { CancellationToken } from './CancellationToken';
import { Workbook } from './Workbook';
export interface IWorkbookRequest extends IBaseRequest {
    Create(workbookToCreate: Workbook, cancellationToken?: CancellationToken): Promise<Workbook>;
    Delete(cancellationToken?: CancellationToken): Promise<void>;
    Get(cancellationToken?: CancellationToken): Promise<Workbook>;
    Update(workbookToUpdate: Workbook, cancellationToken?: CancellationToken): Promise<Workbook>;
    Expand(value: string): IWorkbookRequest;
    Select(value: string): IWorkbookRequest;
}

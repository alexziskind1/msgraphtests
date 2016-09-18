import { IBaseClient } from './IBaseClient';
import { BaseRequest } from './BaseRequest';
import { IWorkbookTableRequest } from './IWorkbookTableRequest';
import { WorkbookTable } from './WorkbookTable';
import { Option } from './Option';
import { CancellationToken } from './CancellationToken';
export declare class WorkbookTableRequest extends BaseRequest implements IWorkbookTableRequest {
    constructor(requestUrl: string, client: IBaseClient, options?: Option[]);
    Create(workbookTableToCreate: WorkbookTable, cancellationToken?: CancellationToken): Promise<WorkbookTable>;
    Delete(cancellationToken?: CancellationToken): Promise<void>;
    Get(cancellationToken?: CancellationToken): Promise<WorkbookTable>;
    Update(workbookTableToUpdate: WorkbookTable, cancellationToken?: CancellationToken): Promise<WorkbookTable>;
    Expand(value: string): IWorkbookTableRequest;
    Select(value: string): IWorkbookTableRequest;
    private InitializeCollectionProperties(wt);
}

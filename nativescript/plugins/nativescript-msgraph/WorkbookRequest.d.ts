import { IBaseClient } from './IBaseClient';
import { BaseRequest } from './BaseRequest';
import { IWorkbookRequest } from './IWorkbookRequest';
import { Option } from './Option';
import { CancellationToken } from './CancellationToken';
import { Workbook } from './Workbook';
export declare class WorkbookRequest extends BaseRequest implements IWorkbookRequest {
    constructor(requestUrl: string, client: IBaseClient, options?: Option[]);
    Create(workbookToCreate: Workbook, cancellationToken?: CancellationToken): Promise<Workbook>;
    Delete(cancellationToken?: CancellationToken): Promise<void>;
    Get(cancellationToken?: CancellationToken): Promise<Workbook>;
    Update(workbookToUpdate: Workbook, cancellationToken?: CancellationToken): Promise<Workbook>;
    Expand(value: string): IWorkbookRequest;
    Select(value: string): IWorkbookRequest;
    private InitializeCollectionProperties(wb);
}

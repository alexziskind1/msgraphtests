import {IBaseClient} from './IBaseClient';
import {EntityRequestBuilder} from './EntityRequestBuilder';
import {IDriveItemRequestBuilder} from './IDriveItemRequestBuilder';
import {IDriveItemRequest} from './IDriveItemRequest';
import {DriveItemRequest} from './DriveItemRequest';
import {Option} from './Option';
import {IDriveItemChildrenCollectionRequestBuilder} from './IDriveItemChildrenCollectionRequestBuilder';
import {DriveItemChildrenCollectionRequestBuilder} from './DriveItemChildrenCollectionRequestBuilder';
import {IWorkbookRequestBuilder} from './IWorkbookRequestBuilder';
import {IWorkbookRequest} from './IWorkbookRequest';
import {WorkbookRequest} from './WorkbookRequest';
import {IWorkbookTablesCollectionRequestBuilder} from './IWorkbookTablesCollectionRequestBuilder';
import {WorkbookTablesCollectionRequestBuilder} from './WorkbookTablesCollectionRequestBuilder';


export class WorkbookRequestBuilder extends EntityRequestBuilder implements IWorkbookRequestBuilder {

    constructor(requestUrl: string, client: IBaseClient) {
        super(requestUrl, client);
    }

    public get Tables() : IWorkbookTablesCollectionRequestBuilder {
        return new WorkbookTablesCollectionRequestBuilder(this.AppendSegmentToRequestUrl("tables"), this.Client);
    }

    public Request(options?: Option[]) : IWorkbookRequest {    
        return new WorkbookRequest(this.RequestUrl, this.Client, options);
    }

}
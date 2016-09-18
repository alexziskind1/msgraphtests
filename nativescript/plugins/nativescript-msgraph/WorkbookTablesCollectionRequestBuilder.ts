import {IBaseClient} from './IBaseClient';
import {BaseRequestBuilder} from './BaseRequestBuilder';
import {IWorkbookTablesCollectionRequestBuilder} from './IWorkbookTablesCollectionRequestBuilder';
import {IWorkbookTablesCollectionRequest} from './IWorkbookTablesCollectionRequest';
import {WorkbookTablesCollectionRequest} from './WorkbookTablesCollectionRequest';
import {IWorkbookTableRequestBuilder} from './IWorkbookTableRequestBuilder';
import {WorkbookTableRequestBuilder} from './WorkbookTableRequestBuilder';
import {Option} from './Option';

export class WorkbookTablesCollectionRequestBuilder extends BaseRequestBuilder implements IWorkbookTablesCollectionRequestBuilder {

    constructor(requestUrl: string, client: IBaseClient){
        super(requestUrl, client);
    }

    public Request(options?: Option[]) : IWorkbookTablesCollectionRequest {
        return new WorkbookTablesCollectionRequest(this.RequestUrl, this.Client, options);
    }

    public Table(id: string) : IWorkbookTableRequestBuilder {
         return new WorkbookTableRequestBuilder(this.AppendSegmentToRequestUrl(id), this.Client);
    }

}
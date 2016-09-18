import {IBaseClient} from './IBaseClient';
import {EntityRequestBuilder} from './EntityRequestBuilder';
import {IWorkbookTableRequestBuilder} from './IWorkbookTableRequestBuilder';
import {IWorkbookTableRequest} from './IWorkbookTableRequest';
import {WorkbookTableRequest} from './WorkbookTableRequest';

import {Option} from './Option';
import {IWorkbookTableRowsCollectionRequestBuilder} from './IWorkbookTableRowsCollectionRequestBuilder';
import {WorkbookTableRowsCollectionRequestBuilder} from './WorkbookTableRowsCollectionRequestBuilder';

import {IWorkbookRequestBuilder} from './IWorkbookRequestBuilder';
import {WorkbookRequestBuilder} from './WorkbookRequestBuilder';

export class WorkbookTableRequestBuilder extends EntityRequestBuilder implements IWorkbookTableRequestBuilder {

    constructor(requestUrl: string, client: IBaseClient) {
        super(requestUrl, client);
    }

    public get Rows() : IWorkbookTableRowsCollectionRequestBuilder {
        return new WorkbookTableRowsCollectionRequestBuilder(this.AppendSegmentToRequestUrl("rows"), this.Client);
    }

    public Request(options?: Option[]) : IWorkbookTableRequest {    
        return new WorkbookTableRequest(this.RequestUrl, this.Client, options);
    }

}
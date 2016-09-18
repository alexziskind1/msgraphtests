import {IBaseClient} from './IBaseClient';
import {BaseRequestBuilder} from './BaseRequestBuilder';
import {IWorkbookTableRowsCollectionRequestBuilder} from './IWorkbookTableRowsCollectionRequestBuilder';
import {IWorkbookTableRowsCollectionRequest} from './IWorkbookTableRowsCollectionRequest';
import {WorkbookTableRowsCollectionRequest} from './WorkbookTableRowsCollectionRequest';

import {Option} from './Option';

export class WorkbookTableRowsCollectionRequestBuilder extends BaseRequestBuilder implements IWorkbookTableRowsCollectionRequestBuilder {

    constructor(requestUrl: string, client: IBaseClient){
        super(requestUrl, client);
    }

    public Request(options?: Option[]) : IWorkbookTableRowsCollectionRequest {
        return new WorkbookTableRowsCollectionRequest(this.RequestUrl, this.Client, options);
    }

}
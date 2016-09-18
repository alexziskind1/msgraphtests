import * as Microsoft from './Microsoft';
import {Option} from './Option';
import {IDriveItemRequest} from './IDriveItemRequest';
import {IDriveItemChildrenCollectionRequestBuilder} from './IDriveItemChildrenCollectionRequestBuilder';
import {IWorkbookRequestBuilder} from './IWorkbookRequestBuilder';

export interface IDriveItemRequestBuilder extends Microsoft.Graph.IDriveItemRequestBuilder {

    Children: IDriveItemChildrenCollectionRequestBuilder;
    Workbook: IWorkbookRequestBuilder;

    Request(options?: Option[]): IDriveItemRequest;
}
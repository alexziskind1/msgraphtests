import * as Microsoft from './Microsoft';
import { IBaseClient } from './IBaseClient';
import { IDirectoryObjectRequest } from './IDirectoryObjectRequest';
import { Option } from './Option';
import { BaseRequestBuilder } from './BaseRequestBuilder';
export declare class DirectoryObjectRequestBuilder extends BaseRequestBuilder implements Microsoft.Graph.DirectoryObjectRequestBuilder {
    constructor(requestUrl: string, client: IBaseClient);
    Request(options?: Option[]): IDirectoryObjectRequest;
}

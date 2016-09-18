import { IBaseClient } from './IBaseClient';
export declare class BaseRequestBuilder {
    Client: IBaseClient;
    RequestUrl: string;
    constructor(requestUrl: string, client: IBaseClient);
    AppendSegmentToRequestUrl(urlSegment: string): string;
}

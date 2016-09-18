import * as Microsoft from './Microsoft';
export interface IBaseRequestBuilder {
    Client: Microsoft.Graph.IBaseClient;
    RequestUrl: string;
    AppendSegmentToRequestUrl(urlSegment: string): string;
}

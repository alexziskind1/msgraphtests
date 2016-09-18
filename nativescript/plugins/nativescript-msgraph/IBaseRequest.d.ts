import * as Microsoft from './Microsoft';
import { HeaderOption } from './HeaderOption';
import { QueryOption } from './QueryOption';
export interface IBaseRequest {
    ContentType: string;
    Headers: HeaderOption[];
    Client: Microsoft.Graph.IBaseClient;
    Method: string;
    RequestUrl: string;
    QueryOptions: QueryOption[];
    GetHttpRequestMessage(): any;
}

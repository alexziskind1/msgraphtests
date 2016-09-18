import { IBaseRequest } from './IBaseRequest';
import { IBaseClient } from './IBaseClient';
import { Option } from './Option';
import { HeaderOption } from './HeaderOption';
import { QueryOption } from './QueryOption';
import { CancellationToken } from './CancellationToken';
import * as http from 'http';
export declare class BaseRequest implements IBaseRequest {
    protected sdkVersionHeaderName: string;
    protected sdkVersionHeaderValue: string;
    protected SdkVersionHeaderPrefix: string;
    Method: string;
    Client: IBaseClient;
    Headers: HeaderOption[];
    QueryOptions: QueryOption[];
    RequestUrl: string;
    ContentType: string;
    constructor(requestUrl: string, client: IBaseClient, options?: Option[]);
    Send(serializableObject: any, cancellationToken?: CancellationToken): Promise<http.HttpResponse>;
    SendGen<T>(serializableObject: any, cancellationToken?: CancellationToken): Promise<T>;
    SendRequest(serializableObject: any, cancellationToken: CancellationToken): Promise<http.HttpResponse>;
    GetHttpRequestMessage(): http.HttpRequestOptions;
    BuildQueryString(): string;
    private AddHeadersToRequest(request);
    private AuthenticateRequest(request);
    private InitializeUrl(requestUrl);
    PropNamesToPascalCase(obj: any): void;
    GetPropertyValue(propName: string): any;
}

import { IHttpProvider } from './IHttpProvider';
import * as http from 'http';
import { CancellationToken } from './CancellationToken';
import { ISerializer } from './ISerializer';
export declare class HttpProvider implements IHttpProvider {
    Serializer: ISerializer;
    constructor(serializer?: ISerializer);
    Send(request: http.HttpRequestOptions, cancellationToken: CancellationToken): Promise<http.HttpResponse>;
    private SendRequest(request);
}

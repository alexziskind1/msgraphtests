import {IHttpProvider} from './IHttpProvider';
import * as http from 'http';
import {CancellationToken} from './CancellationToken';
import {ISerializer} from './ISerializer';
import {Serializer} from './Serializer';

export class HttpProvider implements IHttpProvider {

    public Serializer: ISerializer;

    constructor(serializer?: ISerializer) {
        if (serializer) {
            this.Serializer = serializer;
        } else {
            this.Serializer = new Serializer();
        }
    }

    public Send(request: http.HttpRequestOptions,
             cancellationToken: CancellationToken) : Promise<http.HttpResponse> {
        return this.SendRequest(request);
    }

    private SendRequest(request: http.HttpRequestOptions) : Promise<http.HttpResponse> {
        let promise = http.request({
            url: request.url,
            method: request.method,
            headers: request.headers,
            content: request.content
        });
        return promise;
    }
}
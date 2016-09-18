import * as Microsoft from './Microsoft';
import * as http from 'http';
import {CancellationToken} from './CancellationToken';
import {ISerializer} from './ISerializer';

export interface IHttpProvider extends Microsoft.Graph.IHttpProvider {
    Send(request: http.HttpRequestOptions,
             cancellationToken: CancellationToken) : Promise<http.HttpResponse>

    Serializer: ISerializer;
}
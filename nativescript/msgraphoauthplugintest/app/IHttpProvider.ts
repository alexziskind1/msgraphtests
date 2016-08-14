import * as http from 'http';
import {CancellationToken} from './CancellationToken';

export interface IHttpProvider extends Microsoft.Graph.IHttpProvider {
    Send(request: http.HttpRequestOptions,
             cancellationToken: CancellationToken) : Promise<http.HttpResponse>
}
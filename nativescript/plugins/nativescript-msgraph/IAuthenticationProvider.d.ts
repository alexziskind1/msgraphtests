import * as Microsoft from './Microsoft';
import * as http from 'http';
export interface IAuthenticationProvider extends Microsoft.Graph.IAuthenticationProvider {
    AuthenticateRequest(request: http.HttpRequestOptions): Promise<http.HttpRequestOptions>;
}

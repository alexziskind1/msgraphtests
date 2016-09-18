import * as http from 'http';
import { IAuthenticationProvider } from './IAuthenticationProvider';
export declare class DelegateAuthenticationProvider implements IAuthenticationProvider {
    constructor(authenticateRequestDelegate: (request: http.HttpRequestOptions) => Promise<http.HttpRequestOptions>);
    AuthenticateRequestDelegate: (request: http.HttpRequestOptions) => Promise<http.HttpRequestOptions>;
    AuthenticateRequest(request: http.HttpRequestOptions): Promise<http.HttpRequestOptions>;
}

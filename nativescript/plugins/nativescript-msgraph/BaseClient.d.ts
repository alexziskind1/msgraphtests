import { IBaseClient } from './IBaseClient';
import { IHttpProvider } from './IHttpProvider';
import { IAuthenticationProvider } from './IAuthenticationProvider';
export declare class BaseClient implements IBaseClient {
    private baseUrl;
    constructor(baseUrl: string, authenticationProvider: IAuthenticationProvider, httpProvider?: IHttpProvider);
    AuthenticationProvider: IAuthenticationProvider;
    BaseUrl: string;
    HttpProvider: IHttpProvider;
}

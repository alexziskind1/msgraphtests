import { GraphServiceClient } from './GraphServiceClient';
export declare class SDKHelper {
    static Initialize(p_clientId: string, p_scope: Array<string>): Promise<void>;
    static GetAuthenticatedClient(): GraphServiceClient;
    static SignOutClient(returnPage: string): Promise<any>;
    static SignInClient(returnPage?: string): Promise<any>;
    static AccessTokenExpired(): boolean;
}

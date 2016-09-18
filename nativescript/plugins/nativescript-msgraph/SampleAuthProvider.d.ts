import * as http from 'http';
export declare class SampleAuthProvider {
    private static instance;
    constructor();
    static Instance: SampleAuthProvider;
    GetUserAccessToken(): Promise<string>;
    AuthenticateRequest(request: http.HttpRequestOptions): Promise<http.HttpRequestOptions>;
}

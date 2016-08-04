export interface TnsAuthHelper {
    credentials: TnsOAuthCredentials;
    tokenResult: TnsOAuthTokenResult;
    login: (successPage?: string)=>Promise<{}>;
}

export interface TnsOAuthCredentials {
    authority: string;
    tokenEndpointBase?: string;
    authorizeEndpoint: string;
    tokenEndpoint: string;
    clientId: string;
    clientSecret?: string;
    redirectUri: string;
    scope: string;
}

export interface TnsOAuthTokenResult {
     accessToken: string;
     refreshToken: string;
}
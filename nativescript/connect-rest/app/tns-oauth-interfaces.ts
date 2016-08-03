export interface TnsOAuthCredentials {
    authority: string;
    authorizeEndpoint: string;
    tokenEndpoint: string;
    clientId: string;
    redirectUri: string;
    scope: string;
}

export interface TnsOAuthTokenResult {
     accessToken: string;
     refreshToken: string;
}
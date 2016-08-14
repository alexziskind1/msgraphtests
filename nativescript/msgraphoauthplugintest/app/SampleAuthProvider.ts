import {IAuthenticationProvider} from './IAuthenticationProvider';
import * as tnsOAuthModule from 'nativescript-oauth';
import * as http from 'http';

export class SampleAuthProvider {

    private static  instance : SampleAuthProvider = new SampleAuthProvider();
    
    constructor() { }

    public static get Instance() : SampleAuthProvider {
        return SampleAuthProvider.instance;
    }

    // Gets an access token. First tries to get the token from the token cache.
    public GetUserAccessToken() : Promise<string> {
        return tnsOAuthModule.ensureValidToken();
    }

    public AuthenticateRequest(request: http.HttpRequestOptions) : Promise<http.HttpRequestOptions> {
        return null;
    }

}
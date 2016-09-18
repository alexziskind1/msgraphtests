import {GraphServiceClient} from './GraphServiceClient';
import {DelegateAuthenticationProvider} from './DelegateAuthenticationProvider';
import {SampleAuthProvider} from './SampleAuthProvider';
import {AuthenticationHeaderValue} from './AuthenticationHeaderValue';
import {HttpProvider} from './HttpProvider';
import * as http from 'http';
import * as tnsOAuthModule from 'nativescript-oauth';

var baseUrl = 'https://graph.microsoft.com/v1.0';

 export class SDKHelper {

    public static Initialize(p_clientId: string, p_scope: Array<string>): Promise<void> {
        let options : tnsOAuthModule.ITnsOAuthOptionsOffice365 = {
            clientId: p_clientId,
            scope: p_scope
        };
        return tnsOAuthModule.initOffice365(options);
    }

    // Get an authenticated Microsoft Graph Service client.
    public static GetAuthenticatedClient() : GraphServiceClient {
         let graphClient : GraphServiceClient = new GraphServiceClient(
            new DelegateAuthenticationProvider(
                (requestMessage: http.HttpRequestOptions) => {
                    return new Promise<http.HttpRequestOptions>((resolve, reject)=>{
                        
                        tnsOAuthModule.ensureValidToken()
                            .then((accessToken: string)=>{
                                requestMessage.headers["Authorization"] = "bearer " + accessToken;
                                resolve(requestMessage);
                            })
                            .catch((er)=>{
                                reject(er);
                            });
                    });
                }),
                new HttpProvider(), 
                baseUrl);
        return graphClient;
    }

    public static SignOutClient(returnPage: string): Promise<any> {
        return tnsOAuthModule.logout(returnPage);
    }

    public static SignInClient(returnPage?: string) : Promise<any> {
        return tnsOAuthModule.login(returnPage);
    }

    public static AccessTokenExpired() : boolean {
        return tnsOAuthModule.accessTokenExpired();
    }
}

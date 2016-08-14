import {GraphServiceClient} from './GraphServiceClient';
import {DelegateAuthenticationProvider} from './DelegateAuthenticationProvider';
import {SampleAuthProvider} from './SampleAuthProvider';
import {AuthenticationHeaderValue} from './AuthenticationHeaderValue';
import {HttpProvider} from './HttpProvider';
import * as http from 'http';
import * as tnsOAuthModule from 'nativescript-oauth';

var baseUrl = 'https://graph.microsoft.com/v1.0';

 export class SDKHelper {   
    private static  graphClient : GraphServiceClient = null;

    // Get an authenticated Microsoft Graph Service client.
    public static GetAuthenticatedClient() : GraphServiceClient
    {
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

                        //let accessToken:string = SampleAuthProvider.Instance.GetUserAccessToken();
                        
                    });
                }),
                new HttpProvider(), 
                baseUrl);
        return graphClient;
    }

    public static SignOutClient() {
        this.graphClient = null;
    }
}

import * as applicationModule from 'application';
import * as constantsModule from './constants';

export var client: any;

export function login<T>() : Promise<T> {
    var iosApp = applicationModule.ios;
    NXOAuth2AuthenticationProvider.setClientIdScopes(constantsModule.CLIENT_ID, constantsModule.SCOPES);
   
    return new Promise<T>((resolve, reject)=>{
        if (NXOAuth2AuthenticationProvider.sharedAuthProvider().loginSilent()) {
            MSGraphClient.setAuthenticationProvider(NXOAuth2AuthenticationProvider.sharedAuthProvider());
            client = MSGraphClient.client();
            resolve();
        }
        else {
            NXOAuth2AuthenticationProvider.sharedAuthProvider().loginWithViewControllerCompletion(iosApp.rootController, (er) => {
                if (er != null) {
                    reject(er);
                }
                else {
                    MSGraphClient.setAuthenticationProvider(NXOAuth2AuthenticationProvider.sharedAuthProvider());
                    client = MSGraphClient.client();
                    resolve();
                }
            });
        } 
    });
}
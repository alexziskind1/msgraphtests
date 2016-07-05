import * as applicationModule from 'application';
import * as constantsModule from './constants';
import * as utils from 'utils/utils';

export var client: any;

export function login<T>() : Promise<T> {
    var iosApp = applicationModule.ios;

    NXOAuth2AuthenticationProvider.setClientIdScopes(constantsModule.CLIENT_ID, utils.ios.collections.jsArrayToNSArray (constantsModule.FILES_READWRITE_SCOPES));
   
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
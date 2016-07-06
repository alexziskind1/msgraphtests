import * as applicationModule from 'application';
import * as constantsModule from './constants';
import * as utils from 'utils/utils';

export var client: any;
export var accessToken: string;

export function login<T>() : Promise<T> {
    var iosApp = applicationModule.ios;
    NXOAuth2AuthenticationProvider.setClientIdScopes(constantsModule.CLIENT_ID, utils.ios.collections.jsArrayToNSArray (constantsModule.FILES_READWRITE_SCOPES));
   
    return new Promise<T>((resolve, reject)=>{
        if (tryLoginSilent()) {
            //MSGraphClient.setAuthenticationProvider(NXOAuth2AuthenticationProvider.sharedAuthProvider());
            //client = MSGraphClient.client();
            printAccessToken();
            resolve();
        }
        else {
            NXOAuth2AuthenticationProvider.sharedAuthProvider().loginWithViewControllerCompletion(iosApp.rootController, (er) => {
                if (er != null) {
                    reject(er);
                }
                else {
                    //MSGraphClient.setAuthenticationProvider(NXOAuth2AuthenticationProvider.sharedAuthProvider());
                    //client = MSGraphClient.client();
                    printAccessToken();
                    resolve();
                }
            });
        } 
    });
}

export function tryLoginSilent() {
    return NXOAuth2AuthenticationProvider.sharedAuthProvider().loginSilent();
}

export function logout<T>() {
    return new Promise<T>((resolve, reject) => {
        try {
            NXOAuth2AuthenticationProvider.sharedAuthProvider().logout();
            resolve();
        }
        catch(er) {
            reject(er);
        }
    });
}

export function printAccessToken() {
    var accounts = NXOAuth2AccountStore.sharedStore().accountsWithAccountType("MSGraph");
    if (accounts.count > 0) {
        var account: NXOAuth2Account = accounts[0];
        accessToken = account.accessToken.accessToken;
        console.log('accessToken is: ' + account.accessToken.hasExpired);
    }
}

export function accessTokenExpired() {
    var accounts = NXOAuth2AccountStore.sharedStore().accountsWithAccountType("MSGraph");
    if (accounts.count > 0) {
        var account: NXOAuth2Account = accounts[0];
        var hasExpired = account.accessToken.hasExpired;
        return hasExpired;
    }
    return true;
}
import * as tnsOauth from './tns-oauth';
import { TnsOAuthCredentials, TnsOAuthTokenResult } from './tns-oauth-interfaces';


// The application registration (must match Azure AD config)
export var office365Credentials: TnsOAuthCredentials = {
  authority: 'https://login.microsoftonline.com/common',
  authorizeEndpoint: '/oauth2/v2.0/authorize',
  tokenEndpoint: '/oauth2/v2.0/token',
  clientId: 'e392f6aa-da5c-434d-a42d-a0e0a27d3964',
  redirectUri: 'urn:ietf:wg:oauth:2.0:oob',
  scope: 'Files.ReadWrite%20offline_access'
};

export var office365TokenSet: TnsOAuthTokenResult = { accessToken: null, refreshToken: null };


export function login(successPage?: string) {
    return new Promise((resolve, reject)=>{
        tnsOauth.loginViaAuthorizationCodeFlow(office365Credentials, successPage)
          .then((response: TnsOAuthTokenResult)=>{
            office365TokenSet = response;
            resolve();
          })
          .catch(()=>{
            reject();
          });
    });
}
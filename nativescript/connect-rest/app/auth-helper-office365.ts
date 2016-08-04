import * as tnsOauth from './tns-oauth';
import { TnsAuthHelper, TnsOAuthCredentials, TnsOAuthTokenResult } from './tns-oauth-interfaces';


export class AuthHelperOffice365 implements TnsAuthHelper {
  public credentials: TnsOAuthCredentials;
  public tokenResult: TnsOAuthTokenResult;

  constructor(clientId: string, scope: Array<string>) {

    var scopeStr = scope.join('%20');

    this.credentials = {
      authority: 'https://login.microsoftonline.com/common',
      authorizeEndpoint: '/oauth2/v2.0/authorize',
      tokenEndpoint: '/oauth2/v2.0/token',
      clientId: clientId,
      redirectUri: 'urn:ietf:wg:oauth:2.0:oob',
      scope: scopeStr
    };
  }

  public login(successPage?: string) : Promise<{}> {
    return new Promise((resolve, reject)=>{
        tnsOauth.loginViaAuthorizationCodeFlow(this.credentials, successPage)
          .then((response: TnsOAuthTokenResult)=>{
            this.tokenResult = response;
            resolve();
          })
          .catch(()=>{
            reject();
          });
    });
  }
}

/*
// The application registration (must match Azure AD config)
export var credentials: TnsOAuthCredentials = {
  authority: 'https://login.microsoftonline.com/common',
  authorizeEndpoint: '/oauth2/v2.0/authorize',
  tokenEndpoint: '/oauth2/v2.0/token',
  clientId: 'e392f6aa-da5c-434d-a42d-a0e0a27d3964',
  redirectUri: 'urn:ietf:wg:oauth:2.0:oob',
  scope: 'Files.ReadWrite%20offline_access'
};

export var tokenSet: TnsOAuthTokenResult = { accessToken: null, refreshToken: null };


export function login(successPage?: string) {
    return new Promise((resolve, reject)=>{
        tnsOauth.loginViaAuthorizationCodeFlow(credentials, successPage)
          .then((response: TnsOAuthTokenResult)=>{
            tokenSet = response;
            resolve();
          })
          .catch(()=>{
            reject();
          });
    });
}
*/
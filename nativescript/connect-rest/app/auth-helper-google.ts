import * as tnsOauth from './tns-oauth';
import { TnsAuthHelper, TnsOAuthCredentials, TnsOAuthTokenResult } from './tns-oauth-interfaces';


export class AuthHelperGoogle implements TnsAuthHelper {
  public credentials: TnsOAuthCredentials;
  public tokenResult: TnsOAuthTokenResult;

  constructor(clientId: string, scope: Array<string>) {

    var scopeStr = scope.join('%20');

    this.credentials = {
      authority: 'https://accounts.google.com/o',
      authorizeEndpoint: '/oauth2/v2/auth',
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
export var credentials: TnsOAuthCredentials = {
  authority: 'https://accounts.google.com/o',
  authorizeEndpoint: '/oauth2/v2/auth',
  tokenEndpoint: '/oauth2/v2.0/token',
  clientId: '527078129340-1b55k2qeb177r1b1n6apmvaqd4mpv7q2.apps.googleusercontent.com',
  redirectUri: 'urn:ietf:wg:oauth:2.0:oob',
  scope: 'email%20profile'
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
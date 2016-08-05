import * as tnsOauth from './tns-oauth';
import { TnsAuthHelper, TnsOAuthCredentials, TnsOAuthTokenResult } from './tns-oauth-interfaces';

export class AuthHelperFacebook implements TnsAuthHelper {
  public credentials: TnsOAuthCredentials;
  public tokenResult: TnsOAuthTokenResult;

  constructor(clientId: string, clientSecret: string, scope: Array<string>) {

    var scopeStr = scope.join('%20');

    this.credentials = {
      authority: 'https://www.facebook.com/dialog',
      tokenEndpointBase: 'https://graph.facebook.com', 
      authorizeEndpoint: '/oauth',
      tokenEndpoint: '/v2.3/oauth/access_token',
      clientId: clientId,
      clientSecret: clientSecret,
      redirectUri: 'https://www.facebook.com/connect/login_success.html',
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

import * as tnsOauth from './tns-oauth';
import { TnsAuthHelper, TnsOAuthCredentials, TnsOAuthTokenResult } from './tns-oauth-interfaces';
import { AuthHelper } from './auth-helper';

export class AuthHelperGoogle extends AuthHelper implements TnsAuthHelper {
  public credentials: TnsOAuthCredentials;
  public tokenResult: TnsOAuthTokenResult;

  constructor(clientId: string, scope: Array<string>) {
    super();

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

  public static logout(successPage: string) {
    let cookieDomains = [".google.com"]; //need to check this
    return AuthHelper.logout(successPage, cookieDomains);
  }

}

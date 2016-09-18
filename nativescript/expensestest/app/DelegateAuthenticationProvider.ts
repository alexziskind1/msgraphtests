import * as http from 'http';
import {IAuthenticationProvider} from './IAuthenticationProvider';

export class DelegateAuthenticationProvider implements IAuthenticationProvider {

    constructor(authenticateRequestDelegate: (request: http.HttpRequestOptions /*HttpRequestMessage*/)=>Promise<http.HttpRequestOptions>) {
        this.AuthenticateRequestDelegate = authenticateRequestDelegate;
    }

    /// <summary>
    /// Gets or sets the delegate for authenticating requests.
    /// </summary>
    public AuthenticateRequestDelegate : (request: http.HttpRequestOptions /*HttpRequestMessage*/)=>Promise<http.HttpRequestOptions>;

    /// <summary>
    /// Authenticates the specified request message.
    /// </summary>
    /// <param name="request">The <see cref="HttpRequestMessage"/> to authenticate.</param>
    public AuthenticateRequest(request: http.HttpRequestOptions /*HttpRequestMessage*/) : Promise<http.HttpRequestOptions> {
        if (this.AuthenticateRequestDelegate) {
            return this.AuthenticateRequestDelegate(request);
        }
    }

    //public GetUserAccessToken() : string {
    //    return '';
    //}
}
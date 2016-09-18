import {IBaseClient} from './IBaseClient';
import {IHttpProvider} from './IHttpProvider';
import {HttpProvider} from './HttpProvider';
import {IAuthenticationProvider} from './IAuthenticationProvider';
import {Serializer} from './Serializer';
import * as _ from 'lodash';


export class BaseClient implements IBaseClient {
    private baseUrl : string;
        
        /// <summary>
        /// Constructs a new <see cref="BaseClient"/>.
        /// </summary>
        /// <param name="baseUrl">The base service URL. For example, "https://graph.microsoft.com/v1.0."</param>
        /// <param name="authenticationProvider">The <see cref="IAuthenticationProvider"/> for authenticating request messages.</param>
        /// <param name="httpProvider">The <see cref="IHttpProvider"/> for sending requests.</param>
        constructor(
             baseUrl: string,
             authenticationProvider : IAuthenticationProvider,
             httpProvider: IHttpProvider = null)
        {
            this.BaseUrl = baseUrl;
            this.AuthenticationProvider = authenticationProvider;
            this.HttpProvider = (httpProvider) ? httpProvider : new HttpProvider(new Serializer());
        }

        /// <summary>
        /// Gets the <see cref="IAuthenticationProvider"/> for authenticating requests.
        /// </summary>
        public AuthenticationProvider: IAuthenticationProvider;

        /// <summary>
        /// Gets or sets the base URL for requests of the client.
        /// </summary>
        public get BaseUrl() {
            return this.baseUrl;
        }
        public set BaseUrl(value) {
            if (!value) { throw new Error('BaseUrlMissing'); }
            
            //this.baseUrl = value.TrimEnd('/');
            this.baseUrl = _.trimEnd(value, '/');
        }

        /// <summary>
        /// Gets the <see cref="IHttpProvider"/> for sending HTTP requests.
        /// </summary>
        public  HttpProvider : IHttpProvider;
}
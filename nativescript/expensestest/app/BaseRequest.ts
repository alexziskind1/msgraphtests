import {IBaseRequest} from './IBaseRequest';
import {IBaseClient} from './IBaseClient';
import {Option} from './Option';
import {HeaderOption} from './HeaderOption';
import {QueryOption} from './QueryOption';
import {CancellationToken} from './CancellationToken';
import {CoreConstants} from './CoreConstants';
import * as url from 'url';
import * as http from 'http';

export class BaseRequest implements IBaseRequest {

        protected  sdkVersionHeaderName :string;
        protected  sdkVersionHeaderValue:string;
        protected SdkVersionHeaderPrefix: string;

        public Method: string;
        public Client: IBaseClient;
        public Headers: HeaderOption[];
        public QueryOptions: QueryOption[];
        public RequestUrl: string;
        public ContentType: string;


        /// <summary>
        /// Constructs a new <see cref="BaseRequest"/>.
        /// </summary>
        /// <param name="requestUrl">The URL for the request.</param>
        /// <param name="client">The <see cref="IBaseClient"/> for handling requests.</param>
        /// <param name="options">The header and query options for the request.</param>
        constructor(
             requestUrl: string,
             client: IBaseClient,
             options?: Option[])
        {
            this.Method = "GET";
            this.Client = client;
            this.Headers = [];
            this.QueryOptions = [];

            this.RequestUrl = this.InitializeUrl(requestUrl);
            //this.RequestUrl = requestUrl;
            
            this.sdkVersionHeaderName = CoreConstants.Headers.SdkVersionHeaderName;
            this.SdkVersionHeaderPrefix = "graph";

            if (options != null)
            {
                if (options) {
                    for (var i = 0; i < options.length; i++) {
                        var option = options[i];
                        if (option instanceof HeaderOption) {
                            this.Headers.push(option);
                        }
                        if (option instanceof QueryOption) {
                            this.QueryOptions.push(option);
                        }
                    }
                }
            }
        }

        public Send(serializableObject:any,cancellationToken?: CancellationToken) : Promise<http.HttpResponse> {
            return this.SendRequest(serializableObject, cancellationToken);
        }

        public SendGen<T>(serializableObject:any,cancellationToken?: CancellationToken) : Promise<T> {
            return new Promise<T>((resolve, reject)=>{
                this.SendRequest(serializableObject, cancellationToken)
                    .then((response: http.HttpResponse)=>{
                        let resObj = this.Client.HttpProvider.Serializer.DeserializeObject<T>(response.content.toString());
                        resolve(resObj);
                    })
                    .catch((er)=>{
                        reject(er);
                    });
            });
        }

        /// <summary>
        /// Sends the request.
        /// </summary>
        /// <param name="serializableObject">The serializable object to send.</param>
        /// <param name="cancellationToken">The <see cref="CancellationToken"/> for the request.</param>
        /// <param name="completionOption">The <see cref="HttpCompletionOption"/> to pass to the <see cref="IHttpProvider"/> on send.</param>
        /// <returns>The task to await.</returns>
        /*
        public async Task SendAsync(
            object serializableObject,
            CancellationToken cancellationToken,
            HttpCompletionOption completionOption = HttpCompletionOption.ResponseContentRead)
        {
            using (var response = await this.SendRequestAsync(serializableObject, cancellationToken, completionOption).ConfigureAwait(false))
            {
            }
        }
        */

        /// <summary>
        /// Sends the request.
        /// </summary>
        /// <typeparam name="T">The expected response object type for deserialization.</typeparam>
        /// <param name="serializableObject">The serializable object to send.</param>
        /// <param name="cancellationToken">The <see cref="CancellationToken"/> for the request.</param>
        /// <param name="completionOption">The <see cref="HttpCompletionOption"/> to pass to the <see cref="IHttpProvider"/> on send.</param>
        /// <returns>The deserialized response object.</returns>
        /*
        public async Task<T> SendAsync<T>(
            object serializableObject,
            CancellationToken cancellationToken,
            HttpCompletionOption completionOption = HttpCompletionOption.ResponseContentRead)
        {
            using (var response = await this.SendRequestAsync(serializableObject, cancellationToken, completionOption).ConfigureAwait(false))
            {
                if (response.Content != null)
                {
                    var responseString = await response.Content.ReadAsStringAsync();
                    return this.Client.HttpProvider.Serializer.DeserializeObject<T>(responseString);
                }

                return default(T);
            }
        }
        */

        /// <summary>
        /// Sends the request.
        /// </summary>
        /// <typeparam name="T">The expected response object type for deserialization.</typeparam>
        /// <param name="serializableObject">The serializable object to send.</param>
        /// <param name="cancellationToken">The <see cref="CancellationToken"/> for the request.</param>
        /// <param name="completionOption">The <see cref="HttpCompletionOption"/> to pass to the <see cref="IHttpProvider"/> on send.</param>
        /// <returns>The stream.</returns>
        /*
        public async Task<Stream> SendStreamRequestAsync(
            object serializableObject,
            CancellationToken cancellationToken,
            HttpCompletionOption completionOption = HttpCompletionOption.ResponseContentRead)
        {
            var response = await this.SendRequestAsync(serializableObject, cancellationToken, completionOption).ConfigureAwait(false);
            return await response.Content.ReadAsStreamAsync().ConfigureAwait(false);
        }
        */

        /// <summary>
        /// Sends the request.
        /// </summary>
        /// <typeparam name="T">The expected response object type for deserialization.</typeparam>
        /// <param name="serializableObject">The serializable object to send.</param>
        /// <param name="cancellationToken">The <see cref="CancellationToken"/> for the request.</param>
        /// <param name="completionOption">The <see cref="HttpCompletionOption"/> to pass to the <see cref="IHttpProvider"/> on send.</param>
        /// <returns>The <see cref="HttpResponseMessage"/> object.</returns>
        
        
        public SendRequest(serializableObject: any, cancellationToken: CancellationToken) : Promise<http.HttpResponse> {
            if (!this.RequestUrl) {
                throw new Error('RequestUrlMissing');
            }

            if (!this.Client.AuthenticationProvider) {
                throw new Error('AuthenticationProviderMissing');
            }

            return new Promise<http.HttpResponse>((resolve, reject)=>{
                let request = this.GetHttpRequestMessage();
                this.AuthenticateRequest(request)
                    .then((authenticatedRequest)=>{
                        if (serializableObject) {
                            /*
                            var inputStream = serializableObject as Stream;

                            if (inputStream != null)
                            {
                                request.Content = new StreamContent(inputStream);
                            }
                            else
                            {
                                request.Content = new StringContent(this.Client.HttpProvider.Serializer.SerializeObject(serializableObject));
                            }
                            */
                            request.content = this.Client.HttpProvider.Serializer.SerializeObject(serializableObject);

                            if (this.ContentType) {
                                request.headers['Content-Type'] = this.ContentType;// + ';charset=UTF-8';
                                //request.Content.Headers.ContentType = new MediaTypeHeaderValue(this.ContentType);
                            }
                            
                        }

                        this.Client.HttpProvider.Send(authenticatedRequest, cancellationToken)
                            .then((response: http.HttpResponse)=>{
                                resolve(response);
                            })
                            .catch((er)=>{
                                reject(er);
                            });
                })
                .catch((er)=>{
                    reject(er);
                });
            });
        }


        /// <summary>
        /// Gets the <see cref="HttpRequestMessage"/> representation of the request.
        /// </summary>
        /// <returns>The <see cref="HttpRequestMessage"/> representation of the request.</returns>
        public GetHttpRequestMessage() : http.HttpRequestOptions /*HttpRequestMessage*/ {
            var queryString = this.BuildQueryString();
            let request: http.HttpRequestOptions = {
                url: this.RequestUrl + queryString,
                method: this.Method,
                headers: {}
            };
            this.AddHeadersToRequest(request);
            return request;
        }

        /// <summary>
        /// Builds the query string for the request from the query option collection.
        /// </summary>
        /// <returns>The constructed query string.</returns>
        public BuildQueryString() : string {
            if (this.QueryOptions) {

                var stringBuilder = [];

                for (var i = 0; i < this.QueryOptions.length; i++) {
                    let queryOption = this.QueryOptions[i];
                    if (stringBuilder.length == 0) {
                        stringBuilder.push(`?${queryOption.Name}=${queryOption.Value}`);
                    } else {
                        stringBuilder.push(`&${queryOption.Name}=${queryOption.Value}`);
                    }
                }

                return stringBuilder.join();
            }

            return null;
        }
        

        /// <summary>
        /// Adds all of the headers from the header collection to the request.
        /// </summary>
        /// <param name="request">The <see cref="HttpRequestMessage"/> representation of the request.</param>     
        private AddHeadersToRequest(request: http.HttpRequestOptions) {
            if (this.Headers) {
                for (var i = 0; i < this.Headers.length; i++) {
                    let header = this.Headers[i];
                    request.headers[header.Name] = header.Value;
                }
            }
        }
        

        /// <summary>
        /// Adds the authentication header to the request.
        /// </summary>
        /// <param name="request">The <see cref="HttpRequestMessage"/> representation of the request.</param>
        /// <returns>The task to await.</returns>
        
        private AuthenticateRequest(request: http.HttpRequestOptions /*HttpRequestMessage*/) : Promise<http.HttpRequestOptions>  {
            return this.Client.AuthenticationProvider.AuthenticateRequest(request);
        }
        

        /// <summary>
        /// Initializes the request URL for the request, breaking it into query options and base URL.
        /// </summary>
        /// <param name="requestUrl">The request URL.</param>
        /// <returns>The request URL minus query string.</returns>
        private  InitializeUrl(requestUrl:string) : string
        {
            if (!requestUrl)
            {
                throw new Error('BaseUrlMissing');
            }

            var parsedUrl = url.parse(requestUrl);
            var query = parsedUrl.query;

            //var uri = new Uri(requestUrl);
            
            if (query)
            {
                var queryString = query;
                if (queryString[0] == '?')
                {
                    queryString = queryString.Substring(1);
                }

                var queryOptions = queryString.Split('&').Select(
                        queryValue =>
                        {
                            var segments = queryValue.Split('=');
                            return new QueryOption(
                                segments[0],
                                segments.Length > 1 ? segments[1] : '');
                        });

                for (var i = 0; i < queryOptions.length; i++) {
                    this.QueryOptions.push(queryOptions[i]);
                }
            }

            return parsedUrl.protocol + '//' + parsedUrl.host + parsedUrl.pathname;
            //return new UriBuilder(uri) { Query = string.Empty }.ToString();
        }

        public PropNamesToPascalCase(obj: any) {
            for (var property in obj) {
                obj[property.toUpperCase()] = this.GetPropertyValue.call(obj, property);
                delete obj[property];
            }
        }

        public GetPropertyValue(propName: string) : any {
            if (typeof this[propName] === 'undefined') {
                return null;
            } else {
                return this[propName];
            }
        }
}
    
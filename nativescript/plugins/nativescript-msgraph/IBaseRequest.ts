import * as Microsoft from './Microsoft';
import {HeaderOption} from './HeaderOption';
import {QueryOption} from './QueryOption';

export interface IBaseRequest {
        /// <summary>
        /// Gets or sets the content type for the request.
        /// </summary>
         ContentType :string;

        /// <summary>
        /// Gets the <see cref="HeaderOption"/> collection for the request.
        /// </summary>
         Headers : HeaderOption[];

        /// <summary>
        /// Gets the <see cref="IGraphServiceClient"/> for handling requests.
        /// </summary>
         Client : Microsoft.Graph.IBaseClient;

        /// <summary>
        /// Gets or sets the HTTP method string for the request.
        /// </summary>
         Method : string;

        /// <summary>
        /// Gets the URL for the request, without query string.
        /// </summary>
         RequestUrl : string;

        /// <summary>
        /// Gets the <see cref="QueryOption"/> collection for the request.
        /// </summary>
         QueryOptions : QueryOption[];

        /// <summary>
        /// Gets the <see cref="HttpRequestMessage"/> representation of the request.
        /// </summary>
        /// <returns>The <see cref="HttpRequestMessage"/> representation of the request.</returns>
         GetHttpRequestMessage(): any /*HttpRequestMessage*/;
    }
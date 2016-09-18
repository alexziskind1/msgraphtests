import * as Microsoft from './Microsoft';

export interface IBaseRequestBuilder {
        /// <summary>
        /// Gets the <see cref="IBaseClient"/> for handling requests.
        /// </summary>
         Client : Microsoft.Graph.IBaseClient;

        /// <summary>
        /// Gets the URL for the built request, without query string.
        /// </summary>
        RequestUrl : string;

        /// <summary>
        /// Gets a URL that is the request builder's request URL with the segment appended.
        /// </summary>
        /// <param name="urlSegment">The segment to append to the request URL.</param>
        /// <returns>A URL that is the request builder's request URL with the segment appended.</returns>
        AppendSegmentToRequestUrl(urlSegment: string) : string;
}
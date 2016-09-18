"use strict";
var HeaderOption_1 = require('./HeaderOption');
var QueryOption_1 = require('./QueryOption');
var CoreConstants_1 = require('./CoreConstants');
var url = require('url');
var BaseRequest = (function () {
    /// <summary>
    /// Constructs a new <see cref="BaseRequest"/>.
    /// </summary>
    /// <param name="requestUrl">The URL for the request.</param>
    /// <param name="client">The <see cref="IBaseClient"/> for handling requests.</param>
    /// <param name="options">The header and query options for the request.</param>
    function BaseRequest(requestUrl, client, options) {
        this.Method = "GET";
        this.Client = client;
        this.Headers = [];
        this.QueryOptions = [];
        this.RequestUrl = this.InitializeUrl(requestUrl);
        //this.RequestUrl = requestUrl;
        this.sdkVersionHeaderName = CoreConstants_1.CoreConstants.Headers.SdkVersionHeaderName;
        this.SdkVersionHeaderPrefix = "graph";
        if (options != null) {
            if (options) {
                for (var i = 0; i < options.length; i++) {
                    var option = options[i];
                    if (option instanceof HeaderOption_1.HeaderOption) {
                        this.Headers.push(option);
                    }
                    if (option instanceof QueryOption_1.QueryOption) {
                        this.QueryOptions.push(option);
                    }
                }
            }
        }
    }
    BaseRequest.prototype.Send = function (serializableObject, cancellationToken) {
        return this.SendRequest(serializableObject, cancellationToken);
    };
    BaseRequest.prototype.SendGen = function (serializableObject, cancellationToken) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.SendRequest(serializableObject, cancellationToken)
                .then(function (response) {
                var resObj = _this.Client.HttpProvider.Serializer.DeserializeObject(response.content.toString());
                resolve(resObj);
            })
                .catch(function (er) {
                reject(er);
            });
        });
    };
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
    BaseRequest.prototype.SendRequest = function (serializableObject, cancellationToken) {
        var _this = this;
        if (!this.RequestUrl) {
            throw new Error('RequestUrlMissing');
        }
        if (!this.Client.AuthenticationProvider) {
            throw new Error('AuthenticationProviderMissing');
        }
        return new Promise(function (resolve, reject) {
            var request = _this.GetHttpRequestMessage();
            _this.AuthenticateRequest(request)
                .then(function (authenticatedRequest) {
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
                    request.content = _this.Client.HttpProvider.Serializer.SerializeObject(serializableObject);
                    if (_this.ContentType) {
                        request.headers['Content-Type'] = _this.ContentType; // + ';charset=UTF-8';
                    }
                }
                _this.Client.HttpProvider.Send(authenticatedRequest, cancellationToken)
                    .then(function (response) {
                    resolve(response);
                })
                    .catch(function (er) {
                    reject(er);
                });
            })
                .catch(function (er) {
                reject(er);
            });
        });
    };
    /// <summary>
    /// Gets the <see cref="HttpRequestMessage"/> representation of the request.
    /// </summary>
    /// <returns>The <see cref="HttpRequestMessage"/> representation of the request.</returns>
    BaseRequest.prototype.GetHttpRequestMessage = function () {
        var queryString = this.BuildQueryString();
        var request = {
            url: this.RequestUrl + queryString,
            method: this.Method,
            headers: {}
        };
        this.AddHeadersToRequest(request);
        return request;
    };
    /// <summary>
    /// Builds the query string for the request from the query option collection.
    /// </summary>
    /// <returns>The constructed query string.</returns>
    BaseRequest.prototype.BuildQueryString = function () {
        if (this.QueryOptions) {
            var stringBuilder = [];
            for (var i = 0; i < this.QueryOptions.length; i++) {
                var queryOption = this.QueryOptions[i];
                if (stringBuilder.length == 0) {
                    stringBuilder.push("?" + queryOption.Name + "=" + queryOption.Value);
                }
                else {
                    stringBuilder.push("&" + queryOption.Name + "=" + queryOption.Value);
                }
            }
            return stringBuilder.join();
        }
        return null;
    };
    /// <summary>
    /// Adds all of the headers from the header collection to the request.
    /// </summary>
    /// <param name="request">The <see cref="HttpRequestMessage"/> representation of the request.</param>     
    BaseRequest.prototype.AddHeadersToRequest = function (request) {
        if (this.Headers) {
            for (var i = 0; i < this.Headers.length; i++) {
                var header = this.Headers[i];
                request.headers[header.Name] = header.Value;
            }
        }
    };
    /// <summary>
    /// Adds the authentication header to the request.
    /// </summary>
    /// <param name="request">The <see cref="HttpRequestMessage"/> representation of the request.</param>
    /// <returns>The task to await.</returns>
    BaseRequest.prototype.AuthenticateRequest = function (request /*HttpRequestMessage*/) {
        return this.Client.AuthenticationProvider.AuthenticateRequest(request);
    };
    /// <summary>
    /// Initializes the request URL for the request, breaking it into query options and base URL.
    /// </summary>
    /// <param name="requestUrl">The request URL.</param>
    /// <returns>The request URL minus query string.</returns>
    BaseRequest.prototype.InitializeUrl = function (requestUrl) {
        if (!requestUrl) {
            throw new Error('BaseUrlMissing');
        }
        var parsedUrl = url.parse(requestUrl);
        var query = parsedUrl.query;
        //var uri = new Uri(requestUrl);
        if (query) {
            var queryString = query;
            if (queryString[0] == '?') {
                queryString = queryString.Substring(1);
            }
            var queryOptions = queryString.Split('&').Select(function (queryValue) {
                var segments = queryValue.Split('=');
                return new QueryOption_1.QueryOption(segments[0], segments.Length > 1 ? segments[1] : '');
            });
            for (var i = 0; i < queryOptions.length; i++) {
                this.QueryOptions.push(queryOptions[i]);
            }
        }
        return parsedUrl.protocol + '//' + parsedUrl.host + parsedUrl.pathname;
        //return new UriBuilder(uri) { Query = string.Empty }.ToString();
    };
    BaseRequest.prototype.PropNamesToPascalCase = function (obj) {
        for (var property in obj) {
            obj[property.toUpperCase()] = this.GetPropertyValue.call(obj, property);
            delete obj[property];
        }
    };
    BaseRequest.prototype.GetPropertyValue = function (propName) {
        if (typeof this[propName] === 'undefined') {
            return null;
        }
        else {
            return this[propName];
        }
    };
    return BaseRequest;
}());
exports.BaseRequest = BaseRequest;
//# sourceMappingURL=BaseRequest.js.map
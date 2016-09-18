"use strict";
var BaseRequest_1 = require('./BaseRequest');
var QueryOption_1 = require('./QueryOption');
var DriveItemsCollectionRequest = (function (_super) {
    __extends(DriveItemsCollectionRequest, _super);
    function DriveItemsCollectionRequest(requestUrl, client, options) {
        _super.call(this, requestUrl, client, options);
    }
    /// <summary>
    /// Adds the specified DriveItem to the collection via POST.
    /// </summary>
    /// <param name="driveItem">The DriveItem to add.</param>
    /// <param name="cancellationToken">The <see cref="CancellationToken"/> for the request.</param>
    /// <returns>The created DriveItem.</returns>
    DriveItemsCollectionRequest.prototype.Add = function (driveItem, cancellationToken) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.ContentType = "application/json";
            _this.Method = "POST";
            _this.SendGen(driveItem, cancellationToken)
                .then(function (result) {
                //this.InitializeCollectionProperties(retrievedEntity);
                resolve(result);
            })
                .catch(function (er) {
                reject(er);
            });
        });
    };
    /// <summary>
    /// Gets the collection page.
    /// </summary>
    /// <param name="cancellationToken">The <see cref="CancellationToken"/> for the request.</param>
    /// <returns>The collection page.</returns>
    DriveItemsCollectionRequest.prototype.Get = function (cancellationToken) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.Method = "GET";
            _this.Send(null, cancellationToken)
                .then(function (result) {
                /*
                var response = await this.SendAsync<DriveItemsCollectionResponse>(null, cancellationToken).ConfigureAwait(false);
                if (response != null && response.Value != null && response.Value.CurrentPage != null)
                {
                    if (response.AdditionalData != null)
                    {
                        object nextPageLink;
                        response.AdditionalData.TryGetValue("@odata.nextLink", out nextPageLink);

                        var nextPageLinkString = nextPageLink as string;

                        if (!string.IsNullOrEmpty(nextPageLinkString))
                        {
                            response.Value.InitializeNextPageRequest(
                                this.Client,
                                nextPageLinkString);
                        }

                        // Copy the additional data collection to the page itself so that information is not lost
                        response.Value.AdditionalData = response.AdditionalData;
                    }

                    return response.Value;
                }

                return null;
                */
            })
                .catch(function (er) {
                reject(er);
            });
        });
    };
    /// <summary>
    /// Adds the specified expand value to the request.
    /// </summary>
    /// <param name="value">The expand value.</param>
    /// <returns>The request object to send.</returns>
    DriveItemsCollectionRequest.prototype.Expand = function (value) {
        this.QueryOptions.push(new QueryOption_1.QueryOption("$expand", value));
        return this;
    };
    /// <summary>
    /// Adds the specified select value to the request.
    /// </summary>
    /// <param name="value">The select value.</param>
    /// <returns>The request object to send.</returns>
    DriveItemsCollectionRequest.prototype.Select = function (value) {
        this.QueryOptions.push(new QueryOption_1.QueryOption("$select", value));
        return this;
    };
    /// <summary>
    /// Adds the specified top value to the request.
    /// </summary>
    /// <param name="value">The top value.</param>
    /// <returns>The request object to send.</returns>
    DriveItemsCollectionRequest.prototype.Top = function (value) {
        this.QueryOptions.push(new QueryOption_1.QueryOption("$top", value.toString()));
        return this;
    };
    /// <summary>
    /// Adds the specified filter value to the request.
    /// </summary>
    /// <param name="value">The filter value.</param>
    /// <returns>The request object to send.</returns>
    DriveItemsCollectionRequest.prototype.Filter = function (value) {
        this.QueryOptions.push(new QueryOption_1.QueryOption("$filter", value));
        return this;
    };
    /// <summary>
    /// Adds the specified skip value to the request.
    /// </summary>
    /// <param name="value">The skip value.</param>
    /// <returns>The request object to send.</returns>
    DriveItemsCollectionRequest.prototype.Skip = function (value) {
        this.QueryOptions.push(new QueryOption_1.QueryOption("$skip", value.toString()));
        return this;
    };
    /// <summary>
    /// Adds the specified orderby value to the request.
    /// </summary>
    /// <param name="value">The orderby value.</param>
    /// <returns>The request object to send.</returns>
    DriveItemsCollectionRequest.prototype.OrderBy = function (value) {
        this.QueryOptions.push(new QueryOption_1.QueryOption("$orderby", value));
        return this;
    };
    return DriveItemsCollectionRequest;
}(BaseRequest_1.BaseRequest));
exports.DriveItemsCollectionRequest = DriveItemsCollectionRequest;
//# sourceMappingURL=DriveItemsCollectionRequest.js.map
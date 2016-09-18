"use strict";
var BaseRequest_1 = require('./BaseRequest');
var QueryOption_1 = require('./QueryOption');
var WorkbookTablesCollectionRequest = (function (_super) {
    __extends(WorkbookTablesCollectionRequest, _super);
    function WorkbookTablesCollectionRequest(requestUrl, client, options) {
        _super.call(this, requestUrl, client, options);
    }
    /// <summary>
    /// Adds the specified DriveItem to the collection via POST.
    /// </summary>
    /// <param name="driveItem">The DriveItem to add.</param>
    /// <param name="cancellationToken">The <see cref="CancellationToken"/> for the request.</param>
    /// <returns>The created DriveItem.</returns>
    WorkbookTablesCollectionRequest.prototype.Add = function (workbookTable, cancellationToken) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.ContentType = "application/json";
            _this.Method = "POST";
            _this.SendGen(workbookTable, cancellationToken)
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
    WorkbookTablesCollectionRequest.prototype.Get = function (cancellationToken) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.Method = "GET";
            _this.Send(null, cancellationToken)
                .then(function (result) {
                /*
                var response = await this.SendAsync< WorkbookTablesCollectionResponse>(null, cancellationToken).ConfigureAwait(false);
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
    WorkbookTablesCollectionRequest.prototype.Expand = function (value) {
        this.QueryOptions.push(new QueryOption_1.QueryOption("$expand", value));
        return this;
    };
    /// <summary>
    /// Adds the specified select value to the request.
    /// </summary>
    /// <param name="value">The select value.</param>
    /// <returns>The request object to send.</returns>
    WorkbookTablesCollectionRequest.prototype.Select = function (value) {
        this.QueryOptions.push(new QueryOption_1.QueryOption("$select", value));
        return this;
    };
    /// <summary>
    /// Adds the specified top value to the request.
    /// </summary>
    /// <param name="value">The top value.</param>
    /// <returns>The request object to send.</returns>
    WorkbookTablesCollectionRequest.prototype.Top = function (value) {
        this.QueryOptions.push(new QueryOption_1.QueryOption("$top", value.toString()));
        return this;
    };
    /// <summary>
    /// Adds the specified filter value to the request.
    /// </summary>
    /// <param name="value">The filter value.</param>
    /// <returns>The request object to send.</returns>
    WorkbookTablesCollectionRequest.prototype.Filter = function (value) {
        this.QueryOptions.push(new QueryOption_1.QueryOption("$filter", value));
        return this;
    };
    /// <summary>
    /// Adds the specified skip value to the request.
    /// </summary>
    /// <param name="value">The skip value.</param>
    /// <returns>The request object to send.</returns>
    WorkbookTablesCollectionRequest.prototype.Skip = function (value) {
        this.QueryOptions.push(new QueryOption_1.QueryOption("$skip", value.toString()));
        return this;
    };
    /// <summary>
    /// Adds the specified orderby value to the request.
    /// </summary>
    /// <param name="value">The orderby value.</param>
    /// <returns>The request object to send.</returns>
    WorkbookTablesCollectionRequest.prototype.OrderBy = function (value) {
        this.QueryOptions.push(new QueryOption_1.QueryOption("$orderby", value));
        return this;
    };
    return WorkbookTablesCollectionRequest;
}(BaseRequest_1.BaseRequest));
exports.WorkbookTablesCollectionRequest = WorkbookTablesCollectionRequest;
//# sourceMappingURL=WorkbookTablesCollectionRequest.js.map
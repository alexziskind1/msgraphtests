"use strict";
var BaseRequestBuilder_1 = require('./BaseRequestBuilder');
var DriveItemsCollectionRequest_1 = require('./DriveItemsCollectionRequest');
var DriveItemRequestBuilder_1 = require('./DriveItemRequestBuilder');
var DriveItemsCollectionRequestBuilder = (function (_super) {
    __extends(DriveItemsCollectionRequestBuilder, _super);
    function DriveItemsCollectionRequestBuilder(requestUrl, client) {
        _super.call(this, requestUrl, client);
    }
    DriveItemsCollectionRequestBuilder.prototype.Request = function (options) {
        return new DriveItemsCollectionRequest_1.DriveItemsCollectionRequest(this.RequestUrl, this.Client, options);
    };
    DriveItemsCollectionRequestBuilder.prototype.Item = function (id) {
        return new DriveItemRequestBuilder_1.DriveItemRequestBuilder(this.AppendSegmentToRequestUrl(id), this.Client);
    };
    return DriveItemsCollectionRequestBuilder;
}(BaseRequestBuilder_1.BaseRequestBuilder));
exports.DriveItemsCollectionRequestBuilder = DriveItemsCollectionRequestBuilder;
//# sourceMappingURL=DriveItemsCollectionRequestBuilder.js.map
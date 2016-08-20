"use strict";
var BaseRequestBuilder_1 = require('./BaseRequestBuilder');
var DriveItemChildrenCollectionRequest_1 = require('./DriveItemChildrenCollectionRequest');
var DriveItemRequestBuilder_1 = require('./DriveItemRequestBuilder');
var DriveItemChildrenCollectionRequestBuilder = (function (_super) {
    __extends(DriveItemChildrenCollectionRequestBuilder, _super);
    function DriveItemChildrenCollectionRequestBuilder(requestUrl, client) {
        _super.call(this, requestUrl, client);
    }
    DriveItemChildrenCollectionRequestBuilder.prototype.Request = function (options) {
        return new DriveItemChildrenCollectionRequest_1.DriveItemChildrenCollectionRequest(this.RequestUrl, this.Client, options);
    };
    DriveItemChildrenCollectionRequestBuilder.prototype.Item = function (id) {
        return new DriveItemRequestBuilder_1.DriveItemRequestBuilder(this.AppendSegmentToRequestUrl(id), this.Client);
    };
    return DriveItemChildrenCollectionRequestBuilder;
}(BaseRequestBuilder_1.BaseRequestBuilder));
exports.DriveItemChildrenCollectionRequestBuilder = DriveItemChildrenCollectionRequestBuilder;
//# sourceMappingURL=DriveItemChildrenCollectionRequestBuilder.js.map
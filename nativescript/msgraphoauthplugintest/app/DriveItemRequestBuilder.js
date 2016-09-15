"use strict";
var EntityRequestBuilder_1 = require('./EntityRequestBuilder');
var DriveItemRequest_1 = require('./DriveItemRequest');
var DriveItemChildrenCollectionRequestBuilder_1 = require('./DriveItemChildrenCollectionRequestBuilder');
var WorkbookRequestBuilder_1 = require('./WorkbookRequestBuilder');
var DriveItemRequestBuilder = (function (_super) {
    __extends(DriveItemRequestBuilder, _super);
    function DriveItemRequestBuilder(requestUrl, client) {
        _super.call(this, requestUrl, client);
    }
    Object.defineProperty(DriveItemRequestBuilder.prototype, "Children", {
        get: function () {
            return new DriveItemChildrenCollectionRequestBuilder_1.DriveItemChildrenCollectionRequestBuilder(this.AppendSegmentToRequestUrl("children"), this.Client);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DriveItemRequestBuilder.prototype, "Workbook", {
        get: function () {
            return new WorkbookRequestBuilder_1.WorkbookRequestBuilder(this.AppendSegmentToRequestUrl("workbook"), this.Client);
        },
        enumerable: true,
        configurable: true
    });
    DriveItemRequestBuilder.prototype.Request = function (options) {
        return new DriveItemRequest_1.DriveItemRequest(this.RequestUrl, this.Client, options);
    };
    return DriveItemRequestBuilder;
}(EntityRequestBuilder_1.EntityRequestBuilder));
exports.DriveItemRequestBuilder = DriveItemRequestBuilder;
//# sourceMappingURL=DriveItemRequestBuilder.js.map
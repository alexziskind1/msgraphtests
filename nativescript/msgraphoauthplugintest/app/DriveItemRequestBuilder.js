"use strict";
var EntityRequestBuilder_1 = require('./EntityRequestBuilder');
var DriveItemRequest_1 = require('./DriveItemRequest');
var DriveItemRequestBuilder = (function (_super) {
    __extends(DriveItemRequestBuilder, _super);
    function DriveItemRequestBuilder(requestUrl, client) {
        _super.call(this, requestUrl, client);
    }
    DriveItemRequestBuilder.prototype.Request = function (options) {
        return new DriveItemRequest_1.DriveItemRequest(this.RequestUrl, this.Client, options);
    };
    return DriveItemRequestBuilder;
}(EntityRequestBuilder_1.EntityRequestBuilder));
exports.DriveItemRequestBuilder = DriveItemRequestBuilder;
//# sourceMappingURL=DriveItemRequestBuilder.js.map
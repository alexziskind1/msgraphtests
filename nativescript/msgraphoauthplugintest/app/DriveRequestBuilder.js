"use strict";
var EntityRequestBuilder_1 = require('./EntityRequestBuilder');
var DriveItemRequestBuilder_1 = require('./DriveItemRequestBuilder');
var DriveRequestBuilder = (function (_super) {
    __extends(DriveRequestBuilder, _super);
    function DriveRequestBuilder(requestUrl, client) {
        _super.call(this, requestUrl, client);
    }
    Object.defineProperty(DriveRequestBuilder.prototype, "Root", {
        /// <summary>
        /// Gets the request builder for Root.
        /// </summary>
        /// <returns>The <see cref="IDriveItemRequestBuilder"/>.</returns>
        get: function () {
            return new DriveItemRequestBuilder_1.DriveItemRequestBuilder(this.AppendSegmentToRequestUrl("root"), this.Client);
        },
        enumerable: true,
        configurable: true
    });
    return DriveRequestBuilder;
}(EntityRequestBuilder_1.EntityRequestBuilder));
exports.DriveRequestBuilder = DriveRequestBuilder;
//# sourceMappingURL=DriveRequestBuilder.js.map
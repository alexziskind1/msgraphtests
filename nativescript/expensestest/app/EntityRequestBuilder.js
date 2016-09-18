"use strict";
var BaseRequestBuilder_1 = require('./BaseRequestBuilder');
var EntityRequest_1 = require('./EntityRequest');
var EntityRequestBuilder = (function (_super) {
    __extends(EntityRequestBuilder, _super);
    function EntityRequestBuilder(requestUrl, client) {
        _super.call(this, requestUrl, client);
    }
    /// <summary>
    /// Builds the request.
    /// </summary>
    /// <param name="options">The query and header options for the request.</param>
    /// <returns>The built request.</returns>
    EntityRequestBuilder.prototype.Request = function (options) {
        return new EntityRequest_1.EntityRequest(this.RequestUrl, this.Client, options);
    };
    return EntityRequestBuilder;
}(BaseRequestBuilder_1.BaseRequestBuilder));
exports.EntityRequestBuilder = EntityRequestBuilder;
//# sourceMappingURL=EntityRequestBuilder.js.map
"use strict";
var DirectoryObjectRequest_1 = require('./DirectoryObjectRequest');
var BaseRequestBuilder_1 = require('./BaseRequestBuilder');
var DirectoryObjectRequestBuilder = (function (_super) {
    __extends(DirectoryObjectRequestBuilder, _super);
    function DirectoryObjectRequestBuilder(requestUrl, client) {
        _super.call(this, requestUrl, client);
    }
    DirectoryObjectRequestBuilder.prototype.Request = function (options) {
        return new DirectoryObjectRequest_1.DirectoryObjectRequest(this.RequestUrl, this.Client, options);
    };
    return DirectoryObjectRequestBuilder;
}(BaseRequestBuilder_1.BaseRequestBuilder));
exports.DirectoryObjectRequestBuilder = DirectoryObjectRequestBuilder;
//# sourceMappingURL=DirectoryObjectRequestBuilder.js.map
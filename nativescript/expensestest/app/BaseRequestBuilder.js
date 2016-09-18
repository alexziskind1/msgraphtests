"use strict";
var BaseRequestBuilder = (function () {
    function BaseRequestBuilder(requestUrl, client) {
        this.Client = client;
        this.RequestUrl = requestUrl;
    }
    BaseRequestBuilder.prototype.AppendSegmentToRequestUrl = function (urlSegment) {
        return this.RequestUrl + "/" + urlSegment;
    };
    return BaseRequestBuilder;
}());
exports.BaseRequestBuilder = BaseRequestBuilder;
//# sourceMappingURL=BaseRequestBuilder.js.map
"use strict";
var EntityRequestBuilder_1 = require('./EntityRequestBuilder');
var WorkbookRequest_1 = require('./WorkbookRequest');
var WorkbookTablesCollectionRequestBuilder_1 = require('./WorkbookTablesCollectionRequestBuilder');
var WorkbookRequestBuilder = (function (_super) {
    __extends(WorkbookRequestBuilder, _super);
    function WorkbookRequestBuilder(requestUrl, client) {
        _super.call(this, requestUrl, client);
    }
    Object.defineProperty(WorkbookRequestBuilder.prototype, "Tables", {
        get: function () {
            return new WorkbookTablesCollectionRequestBuilder_1.WorkbookTablesCollectionRequestBuilder(this.AppendSegmentToRequestUrl("tables"), this.Client);
        },
        enumerable: true,
        configurable: true
    });
    WorkbookRequestBuilder.prototype.Request = function (options) {
        return new WorkbookRequest_1.WorkbookRequest(this.RequestUrl, this.Client, options);
    };
    return WorkbookRequestBuilder;
}(EntityRequestBuilder_1.EntityRequestBuilder));
exports.WorkbookRequestBuilder = WorkbookRequestBuilder;
//# sourceMappingURL=WorkbookRequestBuilder.js.map
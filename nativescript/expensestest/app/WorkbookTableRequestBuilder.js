"use strict";
var EntityRequestBuilder_1 = require('./EntityRequestBuilder');
var WorkbookTableRequest_1 = require('./WorkbookTableRequest');
var WorkbookTableRowsCollectionRequestBuilder_1 = require('./WorkbookTableRowsCollectionRequestBuilder');
var WorkbookTableRequestBuilder = (function (_super) {
    __extends(WorkbookTableRequestBuilder, _super);
    function WorkbookTableRequestBuilder(requestUrl, client) {
        _super.call(this, requestUrl, client);
    }
    Object.defineProperty(WorkbookTableRequestBuilder.prototype, "Rows", {
        get: function () {
            return new WorkbookTableRowsCollectionRequestBuilder_1.WorkbookTableRowsCollectionRequestBuilder(this.AppendSegmentToRequestUrl("rows"), this.Client);
        },
        enumerable: true,
        configurable: true
    });
    WorkbookTableRequestBuilder.prototype.Request = function (options) {
        return new WorkbookTableRequest_1.WorkbookTableRequest(this.RequestUrl, this.Client, options);
    };
    return WorkbookTableRequestBuilder;
}(EntityRequestBuilder_1.EntityRequestBuilder));
exports.WorkbookTableRequestBuilder = WorkbookTableRequestBuilder;
//# sourceMappingURL=WorkbookTableRequestBuilder.js.map
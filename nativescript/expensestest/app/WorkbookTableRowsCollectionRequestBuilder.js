"use strict";
var BaseRequestBuilder_1 = require('./BaseRequestBuilder');
var WorkbookTableRowsCollectionRequest_1 = require('./WorkbookTableRowsCollectionRequest');
var WorkbookTableRowsCollectionRequestBuilder = (function (_super) {
    __extends(WorkbookTableRowsCollectionRequestBuilder, _super);
    function WorkbookTableRowsCollectionRequestBuilder(requestUrl, client) {
        _super.call(this, requestUrl, client);
    }
    WorkbookTableRowsCollectionRequestBuilder.prototype.Request = function (options) {
        return new WorkbookTableRowsCollectionRequest_1.WorkbookTableRowsCollectionRequest(this.RequestUrl, this.Client, options);
    };
    return WorkbookTableRowsCollectionRequestBuilder;
}(BaseRequestBuilder_1.BaseRequestBuilder));
exports.WorkbookTableRowsCollectionRequestBuilder = WorkbookTableRowsCollectionRequestBuilder;
//# sourceMappingURL=WorkbookTableRowsCollectionRequestBuilder.js.map
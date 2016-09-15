"use strict";
var BaseRequestBuilder_1 = require('./BaseRequestBuilder');
var WorkbookTablesCollectionRequest_1 = require('./WorkbookTablesCollectionRequest');
var WorkbookTableRequestBuilder_1 = require('./WorkbookTableRequestBuilder');
var WorkbookTablesCollectionRequestBuilder = (function (_super) {
    __extends(WorkbookTablesCollectionRequestBuilder, _super);
    function WorkbookTablesCollectionRequestBuilder(requestUrl, client) {
        _super.call(this, requestUrl, client);
    }
    WorkbookTablesCollectionRequestBuilder.prototype.Request = function (options) {
        return new WorkbookTablesCollectionRequest_1.WorkbookTablesCollectionRequest(this.RequestUrl, this.Client, options);
    };
    WorkbookTablesCollectionRequestBuilder.prototype.Table = function (id) {
        return new WorkbookTableRequestBuilder_1.WorkbookTableRequestBuilder(this.AppendSegmentToRequestUrl(id), this.Client);
    };
    return WorkbookTablesCollectionRequestBuilder;
}(BaseRequestBuilder_1.BaseRequestBuilder));
exports.WorkbookTablesCollectionRequestBuilder = WorkbookTablesCollectionRequestBuilder;
//# sourceMappingURL=WorkbookTablesCollectionRequestBuilder.js.map
"use strict";
var BaseClient_1 = require('./BaseClient');
var UserRequestBuilder_1 = require('./UserRequestBuilder');
var GraphServiceClient = (function (_super) {
    __extends(GraphServiceClient, _super);
    function GraphServiceClient(authenticationProvider, httpProvider, baseUrl) {
        if (baseUrl) {
            _super.call(this, baseUrl, authenticationProvider, httpProvider);
        }
        else {
            _super.call(this, "https://graph.microsoft.com/v1.0", authenticationProvider, httpProvider);
        }
    }
    Object.defineProperty(GraphServiceClient.prototype, "Me", {
        /// <summary>
        /// Gets the GraphServiceMe request builder.
        /// </summary>
        get: function () {
            return new UserRequestBuilder_1.UserRequestBuilder(this.BaseUrl + "/me", this);
        },
        enumerable: true,
        configurable: true
    });
    return GraphServiceClient;
}(BaseClient_1.BaseClient));
exports.GraphServiceClient = GraphServiceClient;
//# sourceMappingURL=GraphServiceClient.js.map
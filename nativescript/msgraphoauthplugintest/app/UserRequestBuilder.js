"use strict";
var DirectoryObjectRequestBuilder_1 = require('./DirectoryObjectRequestBuilder');
var DriveRequestBuilder_1 = require('./DriveRequestBuilder');
var UserRequest_1 = require('./UserRequest');
var UserRequestBuilder = (function (_super) {
    __extends(UserRequestBuilder, _super);
    function UserRequestBuilder(requestUrl, client) {
        _super.call(this, requestUrl, client);
    }
    Object.defineProperty(UserRequestBuilder.prototype, "Drive", {
        get: function () {
            return new DriveRequestBuilder_1.DriveRequestBuilder(this.AppendSegmentToRequestUrl("drive"), this.Client);
        },
        enumerable: true,
        configurable: true
    });
    UserRequestBuilder.prototype.Request = function (options) {
        return new UserRequest_1.UserRequest(this.RequestUrl, this.Client, options);
    };
    return UserRequestBuilder;
}(DirectoryObjectRequestBuilder_1.DirectoryObjectRequestBuilder));
exports.UserRequestBuilder = UserRequestBuilder;
//# sourceMappingURL=UserRequestBuilder.js.map
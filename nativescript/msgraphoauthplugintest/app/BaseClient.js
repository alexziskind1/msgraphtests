"use strict";
var HttpProvider_1 = require('./HttpProvider');
var Serializer_1 = require('./Serializer');
var _ = require('lodash');
var BaseClient = (function () {
    /// <summary>
    /// Constructs a new <see cref="BaseClient"/>.
    /// </summary>
    /// <param name="baseUrl">The base service URL. For example, "https://graph.microsoft.com/v1.0."</param>
    /// <param name="authenticationProvider">The <see cref="IAuthenticationProvider"/> for authenticating request messages.</param>
    /// <param name="httpProvider">The <see cref="IHttpProvider"/> for sending requests.</param>
    function BaseClient(baseUrl, authenticationProvider, httpProvider) {
        if (httpProvider === void 0) { httpProvider = null; }
        this.BaseUrl = baseUrl;
        this.AuthenticationProvider = authenticationProvider;
        this.HttpProvider = (httpProvider) ? httpProvider : new HttpProvider_1.HttpProvider(new Serializer_1.Serializer());
    }
    Object.defineProperty(BaseClient.prototype, "BaseUrl", {
        /// <summary>
        /// Gets or sets the base URL for requests of the client.
        /// </summary>
        get: function () {
            return this.baseUrl;
        },
        set: function (value) {
            if (!value) {
                throw new Error('BaseUrlMissing');
            }
            //this.baseUrl = value.TrimEnd('/');
            this.baseUrl = _.trimEnd(value, '/');
        },
        enumerable: true,
        configurable: true
    });
    return BaseClient;
}());
exports.BaseClient = BaseClient;
//# sourceMappingURL=BaseClient.js.map
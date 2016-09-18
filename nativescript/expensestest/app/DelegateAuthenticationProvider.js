"use strict";
var DelegateAuthenticationProvider = (function () {
    function DelegateAuthenticationProvider(authenticateRequestDelegate) {
        this.AuthenticateRequestDelegate = authenticateRequestDelegate;
    }
    /// <summary>
    /// Authenticates the specified request message.
    /// </summary>
    /// <param name="request">The <see cref="HttpRequestMessage"/> to authenticate.</param>
    DelegateAuthenticationProvider.prototype.AuthenticateRequest = function (request /*HttpRequestMessage*/) {
        if (this.AuthenticateRequestDelegate) {
            return this.AuthenticateRequestDelegate(request);
        }
    };
    return DelegateAuthenticationProvider;
}());
exports.DelegateAuthenticationProvider = DelegateAuthenticationProvider;
//# sourceMappingURL=DelegateAuthenticationProvider.js.map
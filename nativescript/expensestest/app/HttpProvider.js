"use strict";
var http = require('http');
var Serializer_1 = require('./Serializer');
var HttpProvider = (function () {
    function HttpProvider(serializer) {
        if (serializer) {
            this.Serializer = serializer;
        }
        else {
            this.Serializer = new Serializer_1.Serializer();
        }
    }
    HttpProvider.prototype.Send = function (request, cancellationToken) {
        return this.SendRequest(request);
    };
    HttpProvider.prototype.SendRequest = function (request) {
        var promise = http.request({
            url: request.url,
            method: request.method,
            headers: request.headers,
            content: request.content
        });
        return promise;
    };
    return HttpProvider;
}());
exports.HttpProvider = HttpProvider;
//# sourceMappingURL=HttpProvider.js.map
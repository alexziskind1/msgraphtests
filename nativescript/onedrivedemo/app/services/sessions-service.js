"use strict";
var httpModule = require('http');
var constantsModule = require('../shared/constants');
var SessionsService = (function () {
    function SessionsService() {
        this._useHttpService = false;
    }
    SessionsService.prototype.loadSessions = function () {
        return this.loadSessionsViaHttp();
    };
    SessionsService.prototype.loadSessionsViaHttp = function () {
        var reqParams = {
            url: constantsModule.AZURE_URL + constantsModule.AZURE_TABLE_PATH + constantsModule.AZURE_TABLE_NAME + '?$orderby=start',
            method: 'GET',
            headers: constantsModule.AZURE_VERSION_HEADER
        };
        return httpModule.getJSON(reqParams);
    };
    return SessionsService;
}());
exports.SessionsService = SessionsService;
//# sourceMappingURL=sessions-service.js.map
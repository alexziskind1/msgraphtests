"use strict";
var application = require("application");
var tnsOAuthModule = require('nativescript-oauth');
var o365InitOptions = {
    clientId: 'd07edd43-95dd-4cd3-bcab-75cbbc1c7431',
    scope: ['Files.ReadWrite', 'User.ReadWrite', 'offline_access'] //whatever other scopes you need 
};
tnsOAuthModule.initOffice365(o365InitOptions);
application.start({ moduleName: "main-page" });
//# sourceMappingURL=app.js.map
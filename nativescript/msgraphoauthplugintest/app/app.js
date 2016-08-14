"use strict";
var applicationModule = require("application");
var tnsOAuthModule = require('nativescript-oauth');
var navigationModule = require('./shared/navigation');
var constantsModule = require('./shared/constants');
var o365InitOptions = {
    clientId: constantsModule.CLIENT_ID,
    scope: constantsModule.ACTIVE_SCOPES //whatever other scopes you need 
};
tnsOAuthModule.initOffice365(o365InitOptions);
applicationModule.mainModule = navigationModule.loginPage();
applicationModule.start();
//# sourceMappingURL=app.js.map
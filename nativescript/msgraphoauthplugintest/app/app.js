"use strict";
var applicationModule = require("application");
//import * as tnsOAuthModule from 'nativescript-oauth';
var navigationModule = require('./shared/navigation');
var constantsModule = require('./shared/constants');
var SDKHelper_1 = require('./SDKHelper');
/*
var o365InitOptions : tnsOAuthModule.ITnsOAuthOptionsOffice365 = {
    clientId: constantsModule.CLIENT_ID, //client id for application (GUID)
    scope: constantsModule.ACTIVE_SCOPES //whatever other scopes you need
};
 
tnsOAuthModule.initOffice365(o365InitOptions);
*/
SDKHelper_1.SDKHelper.Initialize(constantsModule.CLIENT_ID, constantsModule.ACTIVE_SCOPES);
//applicationModule.mainModule = navigationModule.excelPage();
applicationModule.mainModule = navigationModule.loginPage();
applicationModule.start();
//# sourceMappingURL=app.js.map
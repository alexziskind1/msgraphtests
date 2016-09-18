"use strict";
var app = require('application');
var navigationModule = require('./shared/navigation');
var constantsModule = require('./shared/constants');
var nativescript_msgraph_1 = require('nativescript-msgraph');
nativescript_msgraph_1.SDKHelper.Initialize(constantsModule.CLIENT_ID, constantsModule.ACTIVE_SCOPES);
app.mainModule = navigationModule.loginPage();
app.start();
//# sourceMappingURL=app.js.map
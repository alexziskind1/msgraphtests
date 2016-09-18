import applicationModule = require("application");
//import * as tnsOAuthModule from 'nativescript-oauth';
import * as navigationModule from './shared/navigation';
import * as constantsModule from './shared/constants';
import {SDKHelper} from './SDKHelper';

/*
var o365InitOptions : tnsOAuthModule.ITnsOAuthOptionsOffice365 = {
    clientId: constantsModule.CLIENT_ID, //client id for application (GUID) 
    scope: constantsModule.ACTIVE_SCOPES //whatever other scopes you need 
};
 
tnsOAuthModule.initOffice365(o365InitOptions);
*/

SDKHelper.Initialize(constantsModule.CLIENT_ID, constantsModule.ACTIVE_SCOPES);

//applicationModule.mainModule = navigationModule.excelPage();
applicationModule.mainModule = navigationModule.loginPage();

applicationModule.start();

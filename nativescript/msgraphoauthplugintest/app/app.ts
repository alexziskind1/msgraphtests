import application = require("application");
import * as tnsOAuthModule from 'nativescript-oauth';


var o365InitOptions : TnsOAuth.ITnsOAuthOptionsOffice365 = {
    clientId: 'd07edd43-95dd-4cd3-bcab-75cbbc1c7431', //client id for application (GUID) 
    scope: ['Files.ReadWrite', 'User.ReadWrite', 'offline_access'] //whatever other scopes you need 
};
 
tnsOAuthModule.initOffice365(o365InitOptions);


application.start({ moduleName: "main-page" });

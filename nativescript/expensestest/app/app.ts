import application = require("application");
import * as tnsOauthModule from 'nativescript-oauth';

var o365Options: tnsOauthModule.ITnsOAuthOptionsOffice365 = {
    clientId: '67e1c318-a133-432f-a53b-5122ceab4c08',
    scope: ['Files.ReadWrite', 'offline_access']
};

tnsOauthModule.initOffice365(o365Options);

application.start({ moduleName: "main-page" });

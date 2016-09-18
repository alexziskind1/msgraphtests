import * as app from 'application';
import * as navigationModule from './shared/navigation';
import * as constantsModule from './shared/constants';
import {SDKHelper} from 'nativescript-msgraph';


SDKHelper.Initialize(constantsModule.CLIENT_ID, constantsModule.ACTIVE_SCOPES);

app.mainModule = navigationModule.loginPage();

app.start();

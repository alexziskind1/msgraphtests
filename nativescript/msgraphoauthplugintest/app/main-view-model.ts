import observable = require("data/observable");
import {SDKHelper} from './SDKHelper';
import {GraphServiceClient} from './GraphServiceClient';
import * as tnsOAuthModule from 'nativescript-oauth';

export class HelloWorldModel extends observable.Observable {

    public msGraphClient: GraphServiceClient;

    constructor() {
        super();
    }

    public onTapLogin() {
        tnsOAuthModule.login('main-page');
    }

    public onTapGetData() {

        this.msGraphClient = SDKHelper.GetAuthenticatedClient();
        
        //var drive = this.msGraphClient.Me.Drive.Request().Get();
        var driveRoot = this.msGraphClient.Me.Drive.Root.Request().Get();
        //this.msGraphClient.Me.Request().Select("mail,userPrincipalName").GetAsync();
        //var user = this.msGraphClient.Me.Request().Get();
        
    }
}
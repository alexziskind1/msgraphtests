import { EventData } from "data/observable";
import { Page } from "ui/page";
import { HelloWorldModel } from "./main-view-model";
import * as frameModule from 'ui/frame';
import * as authHelper2Module from './auth-helper2';
import { TokenResult } from './auth-interfaces';

// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {
    // Get the event sender
    var page = <Page>args.object;
    page.bindingContext = new HelloWorldModel();
}

export function onTap() {
    authHelper2Module.loginViaAuthorizationCodeFlow('main-page')
        .then((result: TokenResult)=>{
            var accessToken = result.accessToken;
            var refreshToken = result.refreshToken;
            console.dir(result);
        })
        .catch((er)=>{
            console.error('login failed');
            console.dir(er);
        });
    //frameModule.topmost().navigate('login-page');
}
import { EventData } from "data/observable";
import { Page } from "ui/page";

import { AuthHelperOffice365 } from './auth-helper-office365';
import { AuthHelperFacebook } from './auth-helper-facebook';
import { AuthHelperGoogle } from './auth-helper-google';
import { TnsAuthHelper } from './tns-oauth-interfaces';


export function navigatingTo(args: EventData) {
    var page = <Page>args.object;
}

export function onTapO365() {
    let clientId = 'e392f6aa-da5c-434d-a42d-a0e0a27d3964';
    let scope = ['Files.ReadWrite', 'offline_access'];
    let authHelper = new AuthHelperOffice365(clientId, scope);
    onLoginTap(authHelper);
}

export function onTapGoogle() {
    let clientId = '';
    let scope = ['email', 'profile'];
    let authHelper = new AuthHelperGoogle(clientId, scope);
    onLoginTap(authHelper);
}

export function onTapFacebook() {
    let clientId = '';
    let clientSecret = '';
    let scope = ['email'];
    let authHelper = new AuthHelperFacebook(clientId, clientSecret, scope);
    onLoginTap(authHelper);
}

function onLoginTap(authHelper: TnsAuthHelper) {
    authHelper.login('main-page')
        .then(()=>{
            console.log('login successful');
            console.dir(authHelper.tokenResult);
        })
        .catch((er)=>{
            console.error('login failed');
            console.dir(er);
        });
}
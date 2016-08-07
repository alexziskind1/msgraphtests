import { EventData } from "data/observable";
import { Page } from "ui/page";

import { AuthHelperOffice365 } from './auth-helper-office365';
import { AuthHelperFacebook } from './auth-helper-facebook';
import { AuthHelperGoogle } from './auth-helper-google';
import { TnsAuthHelper } from './tns-oauth-interfaces';


export function navigatingTo(args: EventData) {
    var page = <Page>args.object;
}

export function onTapLoginOffice365() {
    let clientId = 'e392f6aa-da5c-434d-a42d-a0e0a27d3964';
    let scope = ['Files.ReadWrite', 'offline_access'];
    let authHelper = new AuthHelperOffice365(clientId, scope);
    onLoginTap(authHelper);
}

export function onTapLogoutOffice365() {
    onLogoutTap(AuthHelperOffice365);
}

export function onTapLoginGoogle() {
    let clientId = '';
    let scope = ['email', 'profile'];
    let authHelper = new AuthHelperGoogle(clientId, scope);
    onLoginTap(authHelper);
}

export function onTapLogoutGoogle() {
    onLogoutTap(AuthHelperGoogle);
}

export function onTapLoginFacebook() {
    let clientId = '1819818654921817';
    let clientSecret = 'b7e58f212b51e4d639bed857171c992a';
    let scope = ['email'];
    let authHelper = new AuthHelperFacebook(clientId, clientSecret, scope);
    onLoginTap(authHelper);
}

export function onTapLogoutFacebook() {
    onLogoutTap(AuthHelperFacebook);
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

function onLogoutTap(helperType) {
    helperType.logout('main-page')
        .then(()=>{
            console.log('logout successful');
        })
        .catch((er)=>{
            console.error('logout failed');
            console.dir(er);
        });
}

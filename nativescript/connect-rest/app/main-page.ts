import { EventData } from "data/observable";
import { Page } from "ui/page";
import { HelloWorldModel } from "./main-view-model";
import * as frameModule from 'ui/frame';
import * as o365AuthHelper from './o365-auth-helper';


// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {
    // Get the event sender
    var page = <Page>args.object;
    page.bindingContext = new HelloWorldModel();
}

export function onTap() {
    o365AuthHelper.login('main-page')
        .then(()=>{
            console.log('login successful');
            console.dir(o365AuthHelper.office365TokenSet);
        })
        .catch((er)=>{
            console.error('login failed');
            console.dir(er);
        });
}
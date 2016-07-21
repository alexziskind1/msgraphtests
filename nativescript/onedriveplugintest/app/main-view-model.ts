import {Observable} from 'data/observable';
import {office365} from './office365-service';
import * as applicationModule from "application";
import * as frameModule from "ui/frame";


var clientId = "fe3ebdc0-f108-4cea-9757-95cc0638787e"; //client id for application (GUID)
var scopes = ["Files.ReadWrite"];

export class HelloWorldModel extends Observable {
  public message: string;

  constructor() {
    super();
  }

  public onTap() {
    var rootController = applicationModule.ios.rootController;

    office365.login(clientId, scopes)
      .then(()=>{
        console.log('logged in');
        frameModule.topmost().navigate('explorer');
      })
      .catch((er)=>{
        console.log(er);
      });
  }
}
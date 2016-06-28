declare class NXOAuth2AuthenticationProvider {
    static setClientIdScopes(clientId: string, scopes: Array<string>): any;
    static sharedAuthProvider(): any;
}
declare class MSGraphClient {
    static setAuthenticationProvider(provider: any): any;
    static client(): any;
}
declare class MSGraphDriveItem {
    entityId: string;
}
declare class MSCollection {
    value: any;
}

//declare var NSError: any;
//declare var NSURL: any;
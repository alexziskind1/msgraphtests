//import * as uuid from 'node-uuid';
"use strict";
// The application registration (must match Azure AD config)
exports.credentials = {
    authority: 'https://login.microsoftonline.com/common',
    authorize_endpoint: '/oauth2/v2.0/authorize',
    token_endpoint: '/oauth2/v2.0/token',
    client_id: 'e392f6aa-da5c-434d-a42d-a0e0a27d3964',
    client_secret: 'DHyKa8sr04Xop5hPtiYWKiE',
    redirect_uri: 'urn:ietf:wg:oauth:2.0:oob',
    scope: 'Files.ReadWrite'
};
/**
 * Generate a fully formed uri to use for authentication based on the supplied resource argument
 * @return {string} a fully formed uri with which authentication can be completed
 */
function getAuthUrl() {
    return exports.credentials.authority + exports.credentials.authorize_endpoint +
        '?client_id=' + exports.credentials.client_id +
        '&response_type=code' +
        '&redirect_uri=' + exports.credentials.redirect_uri +
        '&scope=' + exports.credentials.scope +
        '&response_mode=query' +
        '&nonce=' + 'aaf77e7d-21ad-4e61-9ec7-d8c403bd6054' +
        '&state=abcd';
}
exports.getAuthUrl = getAuthUrl;
//# sourceMappingURL=auth-helper2.js.map
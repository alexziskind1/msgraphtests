//import * as uuid from 'node-uuid';


// The application registration (must match Azure AD config)
export var credentials = {
  authority: 'https://login.microsoftonline.com/common',
  authorize_endpoint: '/oauth2/v2.0/authorize',
  token_endpoint: '/oauth2/v2.0/token',
  client_id: 'e392f6aa-da5c-434d-a42d-a0e0a27d3964',
  client_secret: 'DHyKa8sr04Xop5hPtiYWKiE',
  redirect_uri: 'urn:ietf:wg:oauth:2.0:oob',
  scope: 'Files.ReadWrite%20offline_access'
};

/**
 * Generate a fully formed uri to use for authentication based on the supplied resource argument
 * @return {string} a fully formed uri with which authentication can be completed
 */
export function getAuthUrl() {
  return credentials.authority + credentials.authorize_endpoint +
    '?client_id=' + credentials.client_id +
    '&response_type=code' +
    '&redirect_uri=' + credentials.redirect_uri +
    '&scope=' + credentials.scope +
    '&response_mode=query' +
    '&nonce=' + 'aaf77e7d-21ad-4e61-9ec7-d8c403bd6054' +
    '&state=abcd';
}



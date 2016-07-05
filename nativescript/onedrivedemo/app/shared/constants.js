"use strict";
exports.AUTHORITY = "https://login.microsoftonline.com/common";
exports.GRAPH_RESOURCE = "https://graph.microsoft.com/";
exports.CLIENT_ID = "bcbd9351-aca3-45cd-a27f-1bce4262e302";
exports.REDIRECT = "urn:ietf:wg:oauth:2.0:oob";
exports.SCOPES = ["https://graph.microsoft.com/User.Read",
    "https://graph.microsoft.com/User.ReadWrite",
    "https://graph.microsoft.com/User.ReadBasic.All",
    "https://graph.microsoft.com/Mail.Send",
    "https://graph.microsoft.com/Calendars.ReadWrite",
    "https://graph.microsoft.com/Mail.ReadWrite",
    "https://graph.microsoft.com/Files.ReadWrite",
    "https://graph.microsoft.com/Directory.AccessAsUser.All",
    "https://graph.microsoft.com/User.ReadWrite.All",
    "https://graph.microsoft.com/Group.ReadWrite.All"];
exports.FILES_READWRITE_SCOPES = ["https://graph.microsoft.com/Files.ReadWrite"];
exports.AZURE_URL = 'https://rpsdataservice.azurewebsites.net/';
exports.AZURE_TABLE_PATH = 'api/';
exports.AZURE_TABLE_NAME = 'session';
exports.AZURE_VERSION_HEADER = { 'ZUMO-API-VERSION': '2.0.0' };
exports.LOADING_ERROR = 'Could not load sessions. Check your Internet connection and try again.';
exports.SIDE_DRAWER_ID = 'SideDrawer';
//# sourceMappingURL=constants.js.map
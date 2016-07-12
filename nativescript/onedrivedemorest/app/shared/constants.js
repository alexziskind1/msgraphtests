"use strict";
exports.AUTHORITY = "https://login.microsoftonline.com/common";
exports.GRAPH_RESOURCE = "https://graph.microsoft.com/";
//export const CLIENT_ID : string = "bcbd9351-aca3-45cd-a27f-1bce4262e302";
//export const REDIRECT = "urn:ietf:wg:oauth:2.0:oob";
exports.CLIENT_ID = "52e97c5d-113d-4447-8d28-4890855ea8f2";
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
//# sourceMappingURL=constants.js.map
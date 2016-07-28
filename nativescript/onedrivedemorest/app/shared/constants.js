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
exports.IMAGE_FILE_EXTENSIONS = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'tiff'];
exports.FILE_FORMATS = [
    { ext: 'jpg', type: 'image', icon: '' },
    { ext: 'jpeg', type: 'image', icon: '' },
    { ext: 'png', type: 'image', icon: '' },
    { ext: 'gif', type: 'image', icon: '' },
    { ext: 'bmp', type: 'image', icon: '' },
    { ext: 'tiff', type: 'image', icon: '' },
    { ext: 'xls', type: 'excel', icon: '' },
    { ext: 'xlsx', type: 'excel', icon: '' },
    { ext: 'doc', type: 'word', icon: '' },
    { ext: 'docx', type: 'word', icon: '' },
    { ext: 'ppt', type: 'powerpoint', icon: '' },
    { ext: 'pptx', type: 'powerpoint', icon: '' },
    { ext: 'txt', type: 'text', icon: '' },
    { ext: 'pdf', type: 'pdf', icon: '' },
    { ext: 'zip', type: 'archive', icon: '' },
    { ext: 'rar', type: 'archive', icon: '' }
];
//# sourceMappingURL=constants.js.map
export const AUTHORITY : string = "https://login.microsoftonline.com/common";
export const GRAPH_RESOURCE : string = "https://graph.microsoft.com/";
//export const CLIENT_ID : string = "bcbd9351-aca3-45cd-a27f-1bce4262e302";
//export const REDIRECT = "urn:ietf:wg:oauth:2.0:oob";

export const CLIENT_ID : string = "d07edd43-95dd-4cd3-bcab-75cbbc1c7431";
export const REDIRECT = "urn:ietf:wg:oauth:2.0:oob";

export const SCOPES = [ "https://graph.microsoft.com/User.Read",
                "https://graph.microsoft.com/User.ReadWrite",
                "https://graph.microsoft.com/User.ReadBasic.All",
                "https://graph.microsoft.com/Mail.Send",
                "https://graph.microsoft.com/Calendars.ReadWrite",
                "https://graph.microsoft.com/Mail.ReadWrite",
                "https://graph.microsoft.com/Files.ReadWrite",
                "https://graph.microsoft.com/Directory.AccessAsUser.All",
                "https://graph.microsoft.com/User.ReadWrite.All",
                "https://graph.microsoft.com/Group.ReadWrite.All" ];

export const FILES_READWRITE_SCOPES = ["https://graph.microsoft.com/Files.ReadWrite"];


export const IMAGE_FILE_EXTENSIONS = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'tiff'];

export const FILE_FORMATS = [
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
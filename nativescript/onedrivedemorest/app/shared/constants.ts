export const AUTHORITY : string = "https://login.microsoftonline.com/common";
export const GRAPH_RESOURCE : string = "https://graph.microsoft.com/";
export const CLIENT_ID : string = "bcbd9351-aca3-45cd-a27f-1bce4262e302";
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

export const CLIENT_ID : string = "67e1c318-a133-432f-a53b-5122ceab4c08";

export const SCOPES = [ "User.Read",
                "User.ReadWrite",
                "User.ReadBasic.All",
                "Mail.Send",
                "Calendars.ReadWrite",
                "Mail.ReadWrite",
                "Files.ReadWrite",
                "Directory.AccessAsUser.All",
                "User.ReadWrite.All",
                "Group.ReadWrite.All" ];

export const FILES_READWRITE_SCOPES = ["Files.ReadWrite"];
export const ACTIVE_SCOPES = ['Files.ReadWrite', 'User.ReadWrite', 'offline_access'];


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
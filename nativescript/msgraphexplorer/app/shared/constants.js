"use strict";
exports.CLIENT_ID = "67e1c318-a133-432f-a53b-5122ceab4c08";
exports.SCOPES = ["User.Read",
    "User.ReadWrite",
    "User.ReadBasic.All",
    "Mail.Send",
    "Calendars.ReadWrite",
    "Mail.ReadWrite",
    "Files.ReadWrite",
    "Directory.AccessAsUser.All",
    "User.ReadWrite.All",
    "Group.ReadWrite.All"];
exports.FILES_READWRITE_SCOPES = ["Files.ReadWrite"];
exports.ACTIVE_SCOPES = ['Files.ReadWrite', 'User.ReadWrite', 'offline_access'];
exports.EXPENSES_FILE_NAME = 'Expenses.xlsx';
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
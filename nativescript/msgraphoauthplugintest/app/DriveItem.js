"use strict";
var DriveItem = (function () {
    function DriveItem() {
    }
    //
    DriveItem.prototype.convertPropNames = function (parsed) {
        this.Children = parsed.children;
        this.Id = parsed.id;
        this.Name = parsed.name;
        this.Size = parsed.size;
        this.Folder = parsed.folder;
        this.WebUrl = parsed.weburl;
        return this;
    };
    return DriveItem;
}());
exports.DriveItem = DriveItem;
//# sourceMappingURL=DriveItem.js.map
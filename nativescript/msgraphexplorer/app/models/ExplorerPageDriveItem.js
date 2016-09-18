"use strict";
var observable_1 = require("data/observable");
var ExplorerPageDriveItem = (function (_super) {
    __extends(ExplorerPageDriveItem, _super);
    function ExplorerPageDriveItem() {
        _super.apply(this, arguments);
    }
    ExplorerPageDriveItem.prototype.convertPropNames = function (parsed) {
        this.Children = parsed.children;
        this.Id = parsed.id;
        this.Name = parsed.name;
        this.Size = parsed.size;
        this.Folder = parsed.folder;
        this.WebUrl = parsed.weburl;
        return this;
    };
    return ExplorerPageDriveItem;
}(observable_1.Observable));
exports.ExplorerPageDriveItem = ExplorerPageDriveItem;
//# sourceMappingURL=ExplorerPageDriveItem.js.map
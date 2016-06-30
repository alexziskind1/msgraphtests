"use strict";
var observable_1 = require('data/observable');
var navigationModule = require('./navigation');
var DriveItemModel = (function (_super) {
    __extends(DriveItemModel, _super);
    function DriveItemModel(obj) {
        _super.call(this);
        this._isFolder = false;
        if (typeof obj === "object") {
            this._id = obj && obj.id || '';
            this._entityId = obj && obj.entityId || '';
            this._name = obj && obj.name || '';
            if (obj && obj.folder) {
                this._isFolder = true;
                this._childCount = obj.folder.childCount;
            }
            this._children = obj && obj.children || [];
        }
        else if (typeof obj === "string") {
            this._name = obj;
        }
    }
    Object.defineProperty(DriveItemModel.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DriveItemModel.prototype, "entityId", {
        get: function () {
            return this._entityId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DriveItemModel.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DriveItemModel.prototype, "isFolder", {
        get: function () {
            return this._isFolder;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DriveItemModel.prototype, "childCount", {
        get: function () {
            return this._childCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DriveItemModel.prototype, "children", {
        get: function () {
            return this._children;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DriveItemModel.prototype, "fileSize", {
        get: function () {
            return '51 KB';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DriveItemModel.prototype, "info", {
        get: function () {
            if (this._isFolder) {
                return this._childCount + ' items';
            }
            else {
                return this.fileSize;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DriveItemModel.prototype, "pageId", {
        get: function () {
            return this._pageId;
        },
        set: function (val) {
            this._pageId = val;
        },
        enumerable: true,
        configurable: true
    });
    DriveItemModel.prototype.driveItemTap = function () {
        console.log('driveItemTap ' + this._isFolder);
        var nextPageId = this.pageId ? (this.pageId == 1 ? 2 : 1) : 2;
        navigationModule.goToExplorerPage(this, nextPageId);
    };
    return DriveItemModel;
}(observable_1.Observable));
exports.DriveItemModel = DriveItemModel;
//# sourceMappingURL=models.js.map
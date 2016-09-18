"use strict";
var observable_array_1 = require('data/observable-array');
var nativescript_msgraph_1 = require('nativescript-msgraph');
var ExplorerPageDriveItem_1 = require('../../models/ExplorerPageDriveItem');
var filesizeModule = require('filesize');
var ExplorerPageViewModel = (function (_super) {
    __extends(ExplorerPageViewModel, _super);
    function ExplorerPageViewModel(obj, par) {
        _super.call(this);
        this._isFolder = false;
        this._childCount = 0;
        this.children = new observable_array_1.ObservableArray();
        if (typeof obj === "object") {
            this._id = obj && obj.id || '';
            this._entityId = obj && obj.entityId || obj.id || 'root';
            this._name = obj && obj.name || '';
            this._size = obj.size;
            if (obj && obj.folder) {
                this._isFolder = true;
                this.set('childCount', obj.folder.childCount);
                this._childCount = obj.folder.childCount;
            }
            else if (obj && !obj.folder) {
                this._downloadUrl = obj["@microsoft.graph.downloadUrl"];
            }
        }
        else if (typeof obj === "string") {
            this._entityId = obj;
        }
        if (typeof par === "object") {
            this._par = par;
        }
        this.set('isSelected', false);
        this.set('inSelectMode', false);
    }
    Object.defineProperty(ExplorerPageViewModel.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExplorerPageViewModel.prototype, "par", {
        get: function () {
            return this._par;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExplorerPageViewModel.prototype, "entityId", {
        get: function () {
            return this._entityId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExplorerPageViewModel.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExplorerPageViewModel.prototype, "isFolder", {
        get: function () {
            return this._isFolder;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExplorerPageViewModel.prototype, "downloadUrl", {
        get: function () {
            return this._downloadUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExplorerPageViewModel.prototype, "fileSize", {
        get: function () {
            return this._size;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExplorerPageViewModel.prototype, "info", {
        get: function () {
            if (this._isFolder) {
                return this._childCount + ' items';
            }
            else {
                return filesizeModule(this.fileSize);
            }
        },
        enumerable: true,
        configurable: true
    });
    ExplorerPageViewModel.prototype.toggleSelected = function () {
        var isSel = this.get('isSelected');
        this.set('isSelected', !isSel);
    };
    ExplorerPageViewModel.prototype.selectedChildren = function () {
        var selArr = [];
        for (var i = 0; i < this.children.length; i++) {
            var child = this.children.getItem(i);
            if (child.get('isSelected')) {
                selArr.push(child);
            }
        }
        console.log('selected items length: ' + selArr.length);
        return selArr;
    };
    ExplorerPageViewModel.prototype.toggleSelectMode = function () {
        var selMode = this.get('inSelectMode');
        this.set('inSelectMode', !selMode);
        //console.log('inSelectMode set to: '  + !selMode);
    };
    ExplorerPageViewModel.prototype.getInSelectMode = function () {
        //console.log('getInSelectMode called');
        if (this.par) {
            return this.par.get('inSelectMode');
        }
        return false;
    };
    ExplorerPageViewModel.prototype.deleteSelectedItems = function () {
        var _this = this;
        var selArr = this.selectedChildren();
        return new Promise(function (resolve, reject) {
            var msGraphClient = nativescript_msgraph_1.SDKHelper.GetAuthenticatedClient();
            var promises = [];
            for (var i = 0; i < selArr.length; i++) {
                promises.push(msGraphClient.Me.Drive.Items.Item(selArr[i].id).Request().Delete());
            }
            Promise.all(promises)
                .then(function () {
                _this.loadChildren()
                    .then(function () {
                    resolve();
                });
                _this.toggleSelectMode();
            })
                .catch(function (er) {
                console.error(er);
                reject(er);
            });
        });
    };
    ExplorerPageViewModel.prototype.createNewFolderWithName = function (folderName) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var msGraphClient = nativescript_msgraph_1.SDKHelper.GetAuthenticatedClient();
            var newDriveItem = {
                name: folderName,
                folder: {},
                "@name.conflictBehavior": "rename"
            };
            msGraphClient.Me.Drive.Items.Item(_this.entityId).Children.Request().Add(newDriveItem)
                .then(function (result) {
                console.dir(result);
                var childVm = new ExplorerPageViewModel(result, _this);
                _this.children.push(childVm);
                //this.children.push(result);
            })
                .catch(function (er) {
                console.error('error');
                console.dir(er);
            });
        });
    };
    ExplorerPageViewModel.prototype.onLoadedChildren = function (items) {
        var theItems = [];
        var arrLength = items.length;
        this.set('childCount', arrLength);
        for (var i = 0; i < arrLength; i++) {
            var item = items[i];
            var childVm = new ExplorerPageViewModel(item, this);
            theItems.push(childVm);
        }
        this.updateDriveItemModelsView(theItems);
    };
    ExplorerPageViewModel.prototype.updateDriveItemModelsView = function (childVms) {
        this.children.splice(0, this.children.length);
        for (var i = 0; i < childVms.length; i++) {
            this.children.push(childVms[i]);
        }
    };
    ExplorerPageViewModel.prototype.loadChildren = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var expandStr = "children";
            var itemId = _this.entityId ? _this.entityId : 'root';
            var client = nativescript_msgraph_1.SDKHelper.GetAuthenticatedClient();
            client.Me.Drive.Items.Item(itemId).Request().Expand(expandStr).Get()
                .then(function (result) {
                _this.onLoadedChildren(result.Children);
                resolve();
            })
                .catch(function (er) {
                _this.showErrorAlert(er);
                _this.onLoadedChildren(null);
                reject(er);
            });
        });
    };
    ExplorerPageViewModel.prototype.showErrorAlert = function (error) {
        console.error("error");
        console.dir(error);
    };
    return ExplorerPageViewModel;
}(ExplorerPageDriveItem_1.ExplorerPageDriveItem));
exports.ExplorerPageViewModel = ExplorerPageViewModel;
//# sourceMappingURL=explorer-page-vm.js.map
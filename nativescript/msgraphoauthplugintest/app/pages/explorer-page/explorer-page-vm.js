"use strict";
var observable_1 = require("data/observable");
var observable_array_1 = require('data/observable-array');
var SDKHelper_1 = require('../../SDKHelper');
//import { invokeOnRunLoop } from '../../shared/async-helper';
var ExplorerPageViewModel = (function (_super) {
    __extends(ExplorerPageViewModel, _super);
    function ExplorerPageViewModel(obj, par) {
        _super.call(this);
        this._isFolder = false;
        this._childCount = 0;
        this.children = new observable_array_1.ObservableArray();
        this._msGraphClient = SDKHelper_1.SDKHelper.GetAuthenticatedClient();
        if (typeof obj === "object") {
            this._id = obj && obj.id || '';
            this._entityId = obj && obj.entityId || obj.id || 'root';
            this._name = obj && obj.name || '';
            if (obj && obj.folder) {
                this._isFolder = true;
                this.set('childCount', obj.folder.childCount);
                this._childCount = obj.folder.childCount;
            }
            else if (obj && !obj.folder) {
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
    Object.defineProperty(ExplorerPageViewModel.prototype, "fileSize", {
        get: function () {
            return '51 KB';
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
                return this.fileSize;
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
        var selArr = this.selectedChildren();
        /*
            return msGraphModule.login()
                .then(()=>{
                    return new Promise<void>((resolve, reject)=>{
                        if (msGraphModule.accessTokenExpired()) {
                            var er = 'access token expired';
                            this.showErrorAlert(er);
                            reject(er);
                        } else {
                            var promises = [];

                            for (var i = 0; i < selArr.length; i++) {
                                var req : httpModule.HttpRequestOptions = {
                                    url: constantsModule.GRAPH_RESOURCE + 'v1.0/me/drive/items/'+selArr[i].id,
                                    method: "DELETE",
                                    headers: {
                                        Authorization: "Bearer " + msGraphModule.accessToken
                                    }
                                };

                                var httpP = httpModule.request(req)
                                    .then((response: any)=>{

                                    })
                                    .catch((error)=>{
                                        this.showErrorAlert(error);
                                        reject(error);
                                    });

                                promises.push(httpP);
                            }

                            Promise.all(promises)
                            .then(()=>{
                                this.loadChildren().then(()=>{resolve()});
                                this.toggleSelectMode();
                            });

                        }
                    });
                });
                */
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
        var driveRoot = this._msGraphClient.Me.Drive.Items;
        return this._msGraphClient.Me.Drive.Request().Get();
    };
    ExplorerPageViewModel.prototype.showErrorAlert = function (error) {
        alert(error);
    };
    return ExplorerPageViewModel;
}(observable_1.Observable));
exports.ExplorerPageViewModel = ExplorerPageViewModel;
//# sourceMappingURL=explorer-page-vm.js.map
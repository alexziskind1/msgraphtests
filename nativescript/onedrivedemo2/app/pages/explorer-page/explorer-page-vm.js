"use strict";
var observable_1 = require("data/observable");
var observable_array_1 = require('data/observable-array');
var msGraphModule = require('../../shared/ms-graph');
var async_helper_1 = require('../../shared/async-helper');
var a = 1;
var ExplorerPageViewModel = (function (_super) {
    __extends(ExplorerPageViewModel, _super);
    function ExplorerPageViewModel(obj) {
        _super.call(this);
        this._isFolder = false;
        this.children = new observable_array_1.ObservableArray();
        if (typeof obj === "object") {
            this._id = obj && obj.id || '';
            this._entityId = obj && obj.entityId || 'root';
            this._name = obj && obj.name || '';
            if (obj && obj.folder) {
                this._isFolder = true;
                this.set('childCount', obj.folder.childCount);
            }
        }
        else if (typeof obj === "string") {
            this._entityId = obj;
        }
    }
    Object.defineProperty(ExplorerPageViewModel.prototype, "id", {
        get: function () {
            return this._id;
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
    ExplorerPageViewModel.prototype.loadChildren = function () {
        var expandStr = "children";
        //var itemId = this.entityId ? this.entityId : 'root';
        var childrenRequest = msGraphModule.client.me().drive().items(this.entityId).request().expand(expandStr);
        return this.loadChildrenWithRequest(childrenRequest);
    };
    ExplorerPageViewModel.prototype.onLoadedChildren = function (items) {
        var theItems = [];
        var arrLength = items.count;
        this.set('childCount', arrLength);
        for (var i = 0; i < arrLength; i++) {
            var item = items[i];
            var childVm = new ExplorerPageViewModel(item);
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
    ExplorerPageViewModel.prototype.loadChildrenWithRequest = function (childrenRequest) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            childrenRequest.getWithCompletion(function (response, nextRequest, error) {
                async_helper_1.invokeOnRunLoop(function () {
                    if (!error) {
                        if (response) {
                            _this.onLoadedChildren(response.children);
                            resolve();
                        }
                        if (nextRequest) {
                            _this.loadChildrenWithRequest(nextRequest);
                        }
                    }
                    else if (error.isAuthenticationError) {
                        _this.showErrorAlert(error);
                        _this.onLoadedChildren(null);
                        reject(error);
                    }
                });
            });
        });
    };
    ExplorerPageViewModel.prototype.showErrorAlert = function (error) {
        alert(error);
    };
    return ExplorerPageViewModel;
}(observable_1.Observable));
exports.ExplorerPageViewModel = ExplorerPageViewModel;
//# sourceMappingURL=explorer-page-vm.js.map
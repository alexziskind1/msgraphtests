"use strict";
var observable_1 = require("data/observable");
var observable_array_1 = require('data/observable-array');
var models_1 = require('../../shared/models');
var sessions_service_1 = require('../../services/sessions-service');
var msAuthModule = require('../../shared/ms-auth');
var folderData = require('../../shared/folder-data');
var a = 2;
var LOAD_SESSIONS = false;
var invokeOnRunLoop = (function () {
    var runloop = CFRunLoopGetMain();
    return function (func) {
        CFRunLoopPerformBlock(runloop, kCFRunLoopDefaultMode, func);
        CFRunLoopWakeUp(runloop);
    };
}());
var ExplorerPageViewModel = (function (_super) {
    __extends(ExplorerPageViewModel, _super);
    /*
    get items() {
        console.log('items getter called');
        return this._items;
    }
    set items(value) {
        this._items = value;
        console.log('items setter called');
        this.notify({ object: this, eventName: Observable.propertyChangeEvent, propertyName: "items", value: this._items });
    }
    */
    function ExplorerPageViewModel(driveItemModel) {
        _super.call(this);
        this._items = [];
        this.itemsLookup = [];
        this.children = new Array();
        this.items = new observable_array_1.ObservableArray();
        this.currentItem = driveItemModel;
        this._sessionsService = new sessions_service_1.SessionsService();
        this.driveItems = NSMutableDictionary.dictionary();
        this.items.push(new models_1.DriveItemModel('item1'));
        //this.set('items', ['item1', 'item2', 'item3']);
    }
    ExplorerPageViewModel.prototype.driveItemTap = function () {
        alert('tap');
    };
    ExplorerPageViewModel.prototype.loadChildren = function () {
        console.log('load children called');
        //this._page = page;
        //this._listView = <ListView>this._page.getViewById('theListView');
        var expandStr = "children";
        var itemId = (this.currentItem) ? this.currentItem.entityId : 'root';
        if (folderData.map[itemId]) {
            this.updateDriveItemModelsView(folderData.map[itemId]);
        }
        else {
            //var childrenRequest = msAuthModule.client.me().drive().items(itemId).children('').request();
            var childrenRequest = msAuthModule.client.me().drive().items(itemId).request().expand('children');
            //let childrenRequest = msAuthModule.client.me().drive().root().request().expand(expandStr);
            //[childrenRequest expand:@"thumbnails"];
            if (LOAD_SESSIONS) {
                return this.loadSessions();
            }
            else {
                return this.loadChildrenWithRequest(childrenRequest);
            }
        }
    };
    ExplorerPageViewModel.prototype.loadSessions = function () {
        var _this = this;
        console.log('load sessions called');
        return this._sessionsService.loadSessions()
            .then(function (result) {
            invokeOnRunLoop(function () {
                _this.pushSessions(result);
            });
            //this.onDataLoaded();
        });
    };
    ExplorerPageViewModel.prototype.pushSessions = function (sessionsFromService) {
        var theItems = this.get('items');
        for (var i = 0; i < sessionsFromService.length; i++) {
            theItems.push(new models_1.DriveItemModel(sessionsFromService[i].title));
        }
        this.set('items', theItems);
    };
    ExplorerPageViewModel.prototype.onLoadedChildren = function (children) {
        console.log('onLoadedChildren caled with ' + children.count + ' children.');
        //var theItems = this.items;
        var theItems = this.get('items');
        var arrLength = children.count;
        for (var i = 0; i < arrLength; i++) {
            //var item = children[i];
            var item = children[i];
            var driveItemModel = new models_1.DriveItemModel(item);
            //driveItemModel.isFolder = item.folder;
            theItems.push(driveItemModel);
        }
        //this.items = theItems;
        //var itemId = (this.currentItem) ? this.currentItem.entityId : 'root'; 
        if (!folderData.map[item.entityId]) {
            folderData.map[item.entityId] = theItems;
        }
        //this.set('items', theItems);
        this.updateDriveItemModelsView(theItems);
        //[self loadThumbnails:children];
        //[self.collectionView reloadData];
    };
    ExplorerPageViewModel.prototype.updateDriveItemModelsView = function (driveItemModels) {
        //var theItems = <Array<DriveItemModel>>this.get('items');
        //for
        this.set('items', driveItemModels);
    };
    ExplorerPageViewModel.prototype.loadChildrenWithRequest = function (childrenRequest) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            childrenRequest.getWithCompletion(function (response, nextRequest, error) {
                invokeOnRunLoop(function () {
                    var a = 0;
                    console.log('response received from api');
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
"use strict";
var observable_1 = require("data/observable");
var msAuthModule = require('../../shared/ms-auth');
var a = 1;
var ExplorerPageViewModel = (function (_super) {
    __extends(ExplorerPageViewModel, _super);
    function ExplorerPageViewModel() {
        _super.call(this);
        this._items = [];
        this.itemsLookup = [];
        this.driveItems = NSMutableDictionary.dictionary();
        this.items = ['item1', 'item2', 'item3'];
        //this.set('items', ['item1', 'item2', 'item3']);
    }
    Object.defineProperty(ExplorerPageViewModel.prototype, "items", {
        get: function () {
            console.log('items getter called');
            return this._items;
        },
        set: function (value) {
            this._items = value;
            console.log('items setter called');
            this.notify({ object: this, eventName: observable_1.Observable.propertyChangeEvent, propertyName: "items", value: this._items });
        },
        enumerable: true,
        configurable: true
    });
    ExplorerPageViewModel.prototype.loadChildren = function () {
        var expandStr = "children";
        var itemId = (this.currentItem) ? this.currentItem.entityId : 'root';
        //var childrenRequest = msAuthModule.client.me().drive().items(itemId).children('').request();
        var childrenRequest = msAuthModule.client.me().drive().items(itemId).request().expand('children');
        //let childrenRequest = msAuthModule.client.me().drive().root().request().expand(expandStr);
        //[childrenRequest expand:@"thumbnails"];
        this.loadChildrenWithRequest(childrenRequest);
    };
    ExplorerPageViewModel.prototype.onLoadedChildren = function (children) {
        console.log('onLoadedChildren caled with ' + children.count + ' children.');
        var theItems = this.items;
        for (var i = 0; i < children.count; i++) {
            var item = children[i];
            theItems.push('newItem' + i);
            if (this.itemsLookup.indexOf(item.entityId) == -1) {
                this.itemsLookup.push(item.entityId);
            }
            this.driveItems[item.entityId] = item;
        }
        this.items = theItems;
        //this.set('items', theItems);
        //[self loadThumbnails:children];
        //[self.collectionView reloadData];
    };
    ExplorerPageViewModel.prototype.loadChildrenWithRequest = function (childrenRequest) {
        var _this = this;
        childrenRequest.getWithCompletion(function (response, nextRequest, error) {
            var a = 0;
            console.log('response received from api');
            if (!error) {
                if (response) {
                    _this.onLoadedChildren(response.children);
                }
                if (nextRequest) {
                    _this.loadChildrenWithRequest(nextRequest);
                }
            }
            else if (error.isAuthenticationError) {
                _this.showErrorAlert(error);
                _this.onLoadedChildren(null);
            }
            /*
                this.driveItems = [];
                if (list != null && list.value != null) {
                    for (var i = 0; i < list.value.count; i++) {
                        let item = list.value[i];
                        this.driveItems.push(item);
                    }
                }
                */
            //self.myTableView.reloadData();
        });
    };
    ExplorerPageViewModel.prototype.showErrorAlert = function (error) {
        alert(error);
    };
    return ExplorerPageViewModel;
}(observable_1.Observable));
exports.ExplorerPageViewModel = ExplorerPageViewModel;
//# sourceMappingURL=explorer-page-vm.js.map
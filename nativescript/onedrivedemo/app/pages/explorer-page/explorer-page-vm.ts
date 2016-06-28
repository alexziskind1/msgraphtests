import { Observable, EventData } from "data/observable";
import { ObservableArray } from 'data/observable-array';
import * as msAuthModule from '../../shared/ms-auth';

 var a = 1;
 
export class ExplorerPageViewModel extends Observable {
    
    private _items = [];
    public driveItems: NSMutableDictionary;
    public currentItem: MSGraphDriveItem;
    private itemsLookup = [];
    
    get items() {
        console.log('items getter called');
        return this._items;
    }
    set items(value) {
        this._items = value;
        console.log('items setter called');
        this.notify({ object: this, eventName: Observable.propertyChangeEvent, propertyName: "items", value: this._items });
    }
    
    constructor() {
        super();
        this.driveItems = NSMutableDictionary.dictionary();
        this.items = ['item1', 'item2', 'item3'];
        //this.set('items', ['item1', 'item2', 'item3']);
    }
    
    public loadChildren() {
        var expandStr = "children";
        var itemId = (this.currentItem) ? this.currentItem.entityId : 'root'; 
        //var childrenRequest = msAuthModule.client.me().drive().items(itemId).children('').request();
        var childrenRequest = msAuthModule.client.me().drive().items(itemId).request().expand('children');
        //let childrenRequest = msAuthModule.client.me().drive().root().request().expand(expandStr);
        //[childrenRequest expand:@"thumbnails"];
        this.loadChildrenWithRequest(childrenRequest);
    }
    
    private onLoadedChildren(children) {
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
    }
    
    private loadChildrenWithRequest(childrenRequest) {
        childrenRequest.getWithCompletion((response, nextRequest, error) => {
            var a = 0;
            console.log('response received from api');
            
            if (!error){
                if (response){
                    this.onLoadedChildren(response.children);
                }
                if (nextRequest){
                    this.loadChildrenWithRequest(nextRequest);
                }
            }
            else if (error.isAuthenticationError) {
                this.showErrorAlert(error);
                this.onLoadedChildren(null);
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
    }
    
    private showErrorAlert(error) {
        alert(error);
    }
}
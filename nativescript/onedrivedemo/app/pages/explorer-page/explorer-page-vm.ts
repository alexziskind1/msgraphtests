import { Observable, EventData } from "data/observable";
import { ObservableArray } from 'data/observable-array';
import { DriveItemModel } from '../../shared/models';
import { Page } from 'ui/page';
import { ListView } from 'ui/list-view';
import { SessionsService } from '../../services/sessions-service';
import { ConferenceDay, Speaker, RoomInfo, Session, FavouriteSession } from '../../shared/interfaces';

import * as msAuthModule from '../../shared/ms-auth';

 var a = 1;
 
export class ExplorerPageViewModel extends Observable {
    private _page: Page;
    private _listView: ListView;
    private _items = [];
    public driveItems: NSMutableDictionary;
    public currentItem: MSGraphDriveItem;
    private itemsLookup = [];
    private _sessionsService: SessionsService;
    
    public items = new ObservableArray();
    
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
    
    constructor() {
        super();
        this._sessionsService = new SessionsService();
        this.driveItems = NSMutableDictionary.dictionary();
        this.items.push(new DriveItemModel('item1'));
        //this.set('items', ['item1', 'item2', 'item3']);
    }
    
    public driveItemTap() {
        alert('tap');
    }
    
    public loadChildren(page: Page) {
        this._page = page;
        this._listView = <ListView>this._page.getViewById('theListView');
        var expandStr = "children";
        var itemId = (this.currentItem) ? this.currentItem.entityId : 'root'; 
        //var childrenRequest = msAuthModule.client.me().drive().items(itemId).children('').request();
        var childrenRequest = msAuthModule.client.me().drive().items(itemId).request().expand('children');
        //let childrenRequest = msAuthModule.client.me().drive().root().request().expand(expandStr);
        //[childrenRequest expand:@"thumbnails"];
        this.loadChildrenWithRequest(childrenRequest);
        //this.loadSessions();
    }
    
    private loadSessions() {
        console.log('load sessions called');
        this._sessionsService.loadSessions<Array<Session>>()
            .then((result: Array<Session>) => {
                this.pushSessions(result);
                //this.onDataLoaded();
            });
    }
    
    private pushSessions(sessionsFromService: Array<Session>) {
        var theItems = this.get('items');
        for (var i = 0; i < sessionsFromService.length; i++) {
            theItems.push(new DriveItemModel(sessionsFromService[i].title));
        }
        this.set('items', theItems);
    }
    
    private onLoadedChildren(children) {
        console.log('onLoadedChildren caled with ' + children.count + ' children.');
        //var theItems = this.items;
        var theItems = this.get('items');
        var arrLength = children.count;
        for (var i = 0; i < arrLength; i++) {
            //var item = children[i];
            var item = children[i];
            var driveItemModel = new DriveItemModel(item);
            //driveItemModel.isFolder = item.folder;
            theItems.push(driveItemModel);
            /*
            if (this.itemsLookup.indexOf(item.entityId) == -1) {
                this.itemsLookup.push(item.entityId);
            }
            this.driveItems[item.entityId] = item;
            */
        }
        //this.items = theItems;
        this.set('items', theItems);
        
        //this._listView.refresh();

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
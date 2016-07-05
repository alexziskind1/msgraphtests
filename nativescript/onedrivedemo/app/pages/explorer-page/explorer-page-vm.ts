import { Observable, EventData } from "data/observable";
import { ObservableArray } from 'data/observable-array';
import { DriveItemModel } from '../../shared/models';
import { Page } from 'ui/page';
import { ListView } from 'ui/list-view';
import { SessionsService } from '../../services/sessions-service';
import { ConferenceDay, Speaker, RoomInfo, Session, FavouriteSession } from '../../shared/interfaces';

import * as msAuthModule from '../../shared/ms-auth';
import * as folderData from '../../shared/folder-data';

var a = 2;
let LOAD_SESSIONS = false;

let invokeOnRunLoop = (function() {
    var runloop = CFRunLoopGetMain();

    return function(func) {
        CFRunLoopPerformBlock(runloop, kCFRunLoopDefaultMode, func);
        CFRunLoopWakeUp(runloop);
    }
}());
 
export class ExplorerPageViewModel extends Observable {
    private _page: Page;
    private _listView: ListView;
    private _items = [];
    public driveItems: NSMutableDictionary;
    public currentItem: DriveItemModel;
    private itemsLookup = [];
    private _sessionsService: SessionsService;
    public children: Array<ExplorerPageViewModel> = new Array<ExplorerPageViewModel>();
    
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
    
    constructor(driveItemModel: DriveItemModel) {
        super();
        this.currentItem = driveItemModel;
        this._sessionsService = new SessionsService();
        this.driveItems = NSMutableDictionary.dictionary();
        this.items.push(new DriveItemModel('item1'));
        //this.set('items', ['item1', 'item2', 'item3']);
    }
    
    public driveItemTap() {
        alert('tap');
    }
    
    public loadChildren() {
        console.log('load children called');
        //this._page = page;
        //this._listView = <ListView>this._page.getViewById('theListView');
        var expandStr = "children";
        var itemId = (this.currentItem) ? this.currentItem.entityId : 'root';

        if (folderData.map[itemId]) {
            this.updateDriveItemModelsView(folderData.map[itemId]);
        } else {

            //var childrenRequest = msAuthModule.client.me().drive().items(itemId).children('').request();
            var childrenRequest = msAuthModule.client.me().drive().items(itemId).request().expand('children');
            //let childrenRequest = msAuthModule.client.me().drive().root().request().expand(expandStr);
            //[childrenRequest expand:@"thumbnails"];

            if (LOAD_SESSIONS) {
                return this.loadSessions();
            } else {
                return this.loadChildrenWithRequest(childrenRequest);
            }
        }
    }
    
    private loadSessions<T>() {
        console.log('load sessions called');

        return this._sessionsService.loadSessions<T>()
            .then((result: any) => {
                invokeOnRunLoop(()=>{
                    this.pushSessions(result);
                });
                
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
        var theItems = <Array<DriveItemModel>>this.get('items');
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
            */
            //this.driveItems[item.entityId] = item;
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
    }

    private updateDriveItemModelsView(driveItemModels: Array<DriveItemModel>) {
        //var theItems = <Array<DriveItemModel>>this.get('items');
        //for
        this.set('items', driveItemModels);
    }

    
    private loadChildrenWithRequest<T>(childrenRequest) {
        return new Promise<void>((resolve, reject)=>{
            childrenRequest.getWithCompletion((response, nextRequest, error) => {
                invokeOnRunLoop(()=>{
                    var a = 0;
                    console.log('response received from api');
                    
                    if (!error){
                        if (response){
                            this.onLoadedChildren(response.children);
                            resolve();
                        }
                        if (nextRequest){
                            this.loadChildrenWithRequest(nextRequest);
                        }
                    }
                    else if (error.isAuthenticationError) {
                        this.showErrorAlert(error);
                        this.onLoadedChildren(null);
                        reject(error);
                    }
                });
            });
        });
    }
    
    private showErrorAlert(error) {
        alert(error);
    }
}
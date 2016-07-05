import { Observable, EventData } from "data/observable";
import { ObservableArray } from 'data/observable-array';
import { DriveItem } from '../../shared/interfaces';
import { StackLayout } from 'ui/layouts/stack-layout';

import * as msGraphModule from '../../shared/ms-graph';
import * as navigationModule from '../../shared/navigation';
import { invokeOnRunLoop } from '../../shared/async-helper';

var a = 1;
 
export class ExplorerPageViewModel extends Observable implements DriveItem {
    private _id: string;
    private _entityId: string;
    private _name: string;
    private _isFolder: boolean = false;

    public children = new ObservableArray();

    public get id() {
        return this._id;
    }

    public get entityId() {
        return this._entityId;
    }
    
    public get name() {
        return this._name;
    }
    
    public get isFolder() {
        return this._isFolder;
    }
    
    public get fileSize() {
        return '51 KB';
    }


    constructor(item: DriveItem);
    constructor(entityId: string);
    constructor(obj: string | DriveItem);
    constructor(obj?: any) {
        super();
        
        if (typeof obj === "object") {
            this._id = obj && obj.id || '';
            this._entityId = obj && obj.entityId || 'root';
            this._name = obj && obj.name || '';
            if (obj && obj.folder) {
                this._isFolder = true;
                this.set('childCount', obj.folder.childCount);
            }
            //this.children = obj && obj.children || new ObservableArray();
        } else if (typeof obj === "string") {
            this._entityId = obj;
        }
    }

    public loadChildren() {
        var expandStr = "children";
        //var itemId = this.entityId ? this.entityId : 'root';
        var childrenRequest = msGraphModule.client.me().drive().items(this.entityId).request().expand(expandStr);
        return this.loadChildrenWithRequest(childrenRequest);
    }
    
    private onLoadedChildren(items) {
        var theItems: Array<ExplorerPageViewModel> = [];
        var arrLength = items.count;
        this.set('childCount', arrLength);
        for (var i = 0; i < arrLength; i++) {
            var item = items[i];
            var childVm = new ExplorerPageViewModel(item);
            theItems.push(childVm);
        }
        this.updateDriveItemModelsView(theItems);
    }

    private updateDriveItemModelsView(childVms: Array<ExplorerPageViewModel>) {
        this.children.splice(0, this.children.length);
        for (var i = 0; i < childVms.length; i++) {
            this.children.push(childVms[i]);
        }
    }
    
    private loadChildrenWithRequest<T>(childrenRequest) {
        return new Promise<void>((resolve, reject)=>{
            childrenRequest.getWithCompletion((response, nextRequest, error) => {
                invokeOnRunLoop(()=>{
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
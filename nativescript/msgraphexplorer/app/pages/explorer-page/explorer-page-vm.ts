import { Observable, EventData } from "data/observable";
import { ObservableArray } from 'data/observable-array';
import { StackLayout } from 'ui/layouts/stack-layout';
import {SDKHelper} from 'nativescript-msgraph';
import * as httpModule from 'http';
import * as navigationModule from '../../shared/navigation';
import * as constantsModule from '../../shared/constants';
import {ExplorerPageDriveItem} from '../../models/ExplorerPageDriveItem';
import * as filesizeModule from 'filesize';

export class ExplorerPageViewModel extends ExplorerPageDriveItem {
    private _id: string;
    private _entityId: string;
    private _name: string;
    private _size: number;
    private _isFolder: boolean = false;
    private _downloadUrl: string;
    private _childCount: number = 0;
    private _par: ExplorerPageViewModel;

    public children = new ObservableArray();

    public get id() {
        return this._id;
    }

    public get par() {
        return this._par;
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

    public get downloadUrl() {
        return this._downloadUrl;
    }
    
    public get fileSize() {
        return this._size;
    }

    public get info() {
        if (this._isFolder) {
            return this._childCount + ' items';
        }
        else {
            return filesizeModule(this.fileSize);
        }
    }

    constructor(item: ExplorerPageDriveItem, par: ExplorerPageDriveItem);
    constructor(entityId: string, par: ExplorerPageDriveItem);
    constructor(obj: string | ExplorerPageDriveItem, par: ExplorerPageDriveItem);
    constructor(obj?: any, par?: any) {
        super();

        if (typeof obj === "object") {
            this._id = obj && obj.id || '';
            this._entityId = obj && obj.entityId || obj.id || 'root';
            this._name = obj && obj.name || '';
            this._size = obj.size;

            if (obj && obj.folder) {
                this._isFolder = true;
                this.set('childCount', obj.folder.childCount);
                this._childCount = obj.folder.childCount;
            } else if (obj && !obj.folder) {
                this._downloadUrl = obj["@microsoft.graph.downloadUrl"];
            //this.children = obj && obj.children || new ObservableArray();
                //Not calling loadThumbnails for now because it's been turned off on the Graph API side (7/27/16)
                //this.loadThumbnail(obj);
            }
        } else if (typeof obj === "string") {
            this._entityId = obj;
        }
        if (typeof par === "object") {
            this._par = par;
        }

        this.set('isSelected', false);
        this.set('inSelectMode', false);

    }



    public toggleSelected() {
        var isSel = <boolean>this.get('isSelected');
        this.set('isSelected', !isSel);
    }

    public selectedChildren() {
        var selArr = [];
        for (var i = 0; i < this.children.length; i++) {
            var child = <Observable>this.children.getItem(i);
            if (<boolean>child.get('isSelected')) {
                selArr.push(child);
            }
        }
        console.log('selected items length: ' + selArr.length);
        return selArr;
    }

    public toggleSelectMode() {
        var selMode = <boolean>this.get('inSelectMode');
        this.set('inSelectMode', !selMode);
        //console.log('inSelectMode set to: '  + !selMode);
    }

    public getInSelectMode() : boolean {
        //console.log('getInSelectMode called');
        if (this.par) {
            return this.par.get('inSelectMode');
        }
        return false;
    }

    public deleteSelectedItems() : Promise<void> {
        var selArr = this.selectedChildren();

        return new Promise<void>((resolve, reject)=>{
            let msGraphClient = SDKHelper.GetAuthenticatedClient();
            var promises = [];

            for (var i = 0; i < selArr.length; i++) {
                promises.push(msGraphClient.Me.Drive.Items.Item(selArr[i].id).Request().Delete());
            }

            Promise.all(promises)
                            .then(()=>{
                                this.loadChildren()
                                    .then(()=>{
                                        resolve();
                                    });
                                this.toggleSelectMode();
                            })
                            .catch((er)=>{
                                console.error(er);
                                reject(er);
                            });

        });
    }

    public createNewFolderWithName(folderName: string) {
        return new Promise<void>((resolve, reject)=>{
            let msGraphClient = SDKHelper.GetAuthenticatedClient();

            let newDriveItem = {
                name: folderName,
                folder: {},
                "@name.conflictBehavior": "rename"
            };

            msGraphClient.Me.Drive.Items.Item(this.entityId).Children.Request().Add(<any>newDriveItem)
                .then((result: any)=>{
                    console.dir(result);
                    var childVm = new ExplorerPageViewModel(result, this);
                    this.children.push(childVm);
                    //this.children.push(result);
                })
                .catch((er)=>{
                    console.error('error');
                    console.dir(er);
                });

        });
    }

    private onLoadedChildren(items) {
        var theItems: Array<ExplorerPageViewModel> = [];
        var arrLength = items.length;
        this.set('childCount', arrLength);
        for (var i = 0; i < arrLength; i++) {
            var item = items[i];
            var childVm = new ExplorerPageViewModel(item, this);
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

    public loadChildren() : Promise<any> {
        return new Promise((resolve, reject)=>{
            var expandStr = "children";
            var itemId = this.entityId ? this.entityId : 'root';
            
            let client = SDKHelper.GetAuthenticatedClient();
            client.Me.Drive.Items.Item(itemId).Request().Expand(expandStr).Get()
                .then((result: any)=>{
                    this.onLoadedChildren(result.Children);
                    resolve();
                })
                .catch((er)=>{
                    this.showErrorAlert(er);
                    this.onLoadedChildren(null);
                    reject(er);
                });
        });
    }


    private showErrorAlert(error) {
        console.error("error");
        console.dir(error);
    }
}
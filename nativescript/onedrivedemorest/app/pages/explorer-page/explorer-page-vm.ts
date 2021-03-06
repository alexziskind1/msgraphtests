import { Observable, EventData } from "data/observable";
import { ObservableArray } from 'data/observable-array';
import { DriveItem } from '../../shared/interfaces';
import { StackLayout } from 'ui/layouts/stack-layout';

import * as httpModule from 'http';
import * as msGraphModule from '../../shared/ms-graph';
import * as navigationModule from '../../shared/navigation';
import * as constantsModule from '../../shared/constants';
import { invokeOnRunLoop } from '../../shared/async-helper';

var a = 2;

export class ExplorerPageViewModel extends Observable implements DriveItem {
    private _id: string;
    private _entityId: string;
    private _name: string;
    private _isFolder: boolean = false;
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
    
    public get fileSize() {
        return '51 KB';
    }

    public get info() {
        if (this._isFolder) {
            return this._childCount + ' items';
        }
        else {
            return this.fileSize;
        }
    }


    constructor(item: DriveItem, par: DriveItem);
    constructor(entityId: string, par: DriveItem);
    constructor(obj: string | DriveItem, par: DriveItem);
    constructor(obj?: any, par?: any) {
        super();
        
        if (typeof obj === "object") {
            this._id = obj && obj.id || '';
            this._entityId = obj && obj.entityId || obj.id || 'root';
            this._name = obj && obj.name || '';
            if (obj && obj.folder) {
                this._isFolder = true;
                this.set('childCount', obj.folder.childCount);
                this._childCount = obj.folder.childCount;
            } else if (obj && !obj.folder) {
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

    public loadThumbnail(obj) {
        var req : httpModule.HttpRequestOptions = {
            url: constantsModule.GRAPH_RESOURCE + 'v1.0/me/drive/items/'+obj.id+'/thumbnails/0/small/content',
            method: "GET",
            headers: {
                Authorization: "Bearer " + msGraphModule.accessToken
            }
        };

        return msGraphModule.login()
            .then(()=>{
                return new Promise<void>((resolve, reject)=>{
                    if (msGraphModule.accessTokenExpired()) {
                        var er = 'access token expired';
                        this.showErrorAlert(er);
                        reject(er);
                    } else {
                        httpModule.getJSON(req)
                            .then((response:any)=>{
                                var jsonStr = JSON.stringify(response, null, 2);
                                //console.log(jsonStr);
                                //this.onLoadedChildren(response.children);
                                resolve();
                            })
                            .catch((error)=>{
                                this.showErrorAlert(error);
                                //this.onLoadedChildren(null);
                                reject(error);
                            });
                    }
                });
            });
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

    public deleteSelectedItems() {
        var selArr = this.selectedChildren();

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

    public loadChildren() {
        var expandStr = "children";
        var itemId = this.entityId ? this.entityId : 'root';
        var req : httpModule.HttpRequestOptions = {
            url: constantsModule.GRAPH_RESOURCE + 'v1.0/me/drive/items/'+ itemId +'?$expand=' + expandStr,
            method: "GET",
            headers: {
                Authorization: "Bearer " + msGraphModule.accessToken
            }
        };

        return this.loadChildrenWithRequest(req);
    }

    private loadChildrenWithRequest<T>(req) {
        return msGraphModule.login()
            .then(()=>{
                return new Promise<void>((resolve, reject)=>{
                    if (msGraphModule.accessTokenExpired()) {
                        var er = 'access token expired';
                        this.showErrorAlert(er);
                        reject(er);
                    } else {
                        httpModule.getJSON(req)
                            .then((response:any)=>{
                                var jsonStr = JSON.stringify(response, null, 2);
                                //console.log(jsonStr);
                                this.onLoadedChildren(response.children);
                                resolve();
                            })
                            .catch((error)=>{
                                this.showErrorAlert(error);
                                this.onLoadedChildren(null);
                                reject(error);
                            });
                    }
                });
            });
    }


    private showErrorAlert(error) {
        alert(error);
    }
}
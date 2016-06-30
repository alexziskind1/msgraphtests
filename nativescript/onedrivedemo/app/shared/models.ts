import { Observable } from 'data/observable';
import { DriveItem } from './interfaces';
import * as navigationModule from './navigation';

export class DriveItemModel extends Observable implements DriveItem {
    private _id: string;
    private _entityId: string;
    private _name: string;
    private _isFolder: boolean = false;
    private _childCount: number;
    private _children: Array<DriveItem>;
    private _pageId: number;

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
    
    public get childCount() {
        return this._childCount;
    }
    
    public get children() {
        return this._children;
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

    public get pageId() {
        return this._pageId;
    }
    public set pageId(val) {
        this._pageId = val;
    }
    
    constructor(item: MSGraphDriveItem);
    constructor(name: string);
    constructor(obj: string | MSGraphDriveItem);
    constructor(obj?: any) {
        super();
        
        if (typeof obj === "object") {
            this._id = obj && obj.id || '';
            this._entityId = obj && obj.entityId || '';
            this._name = obj && obj.name || '';
            if (obj && obj.folder) {
                this._isFolder = true;
                this._childCount = obj.folder.childCount;
            }
            this._children = obj && obj.children || [];
        } else if (typeof obj === "string") {
            this._name = obj;
        }
    }

    
    public driveItemTap() {
        console.log('driveItemTap ' + this._isFolder);
        var nextPageId = this.pageId ? (this.pageId == 1 ? 2 : 1) : 2;
        navigationModule.goToExplorerPage(this, nextPageId);
    }
    
}
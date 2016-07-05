import { DriveItemModel } from './models';
import { ExplorerPageViewModel } from '../pages/explorer-page/explorer-page-vm';
import * as utils from 'utils/utils';

export var map: { [entityId: string]: Array<DriveItemModel>; } = { };
export var vmMap: { [entityId: string]: ExplorerPageViewModel; } = { };

export function driveItemExists(entityId: string) {
    return map[entityId] != null;
}

export function explorerPageViewModelExists(entityId: string) {
    return vmMap[entityId] != null;
}

export function getDriveItemsById(entityId: string) : Array<DriveItemModel> {
    if (!driveItemExists(entityId)) {
        map[entityId] = new Array<DriveItemModel>(); 
    }
    return map[entityId];
}

export function getExplorerPageViewModelById(driveItemModel: DriveItemModel) {
    var entityId = driveItemModel.entityId;
    if (!explorerPageViewModelExists(entityId)) {
        vmMap[entityId] = new ExplorerPageViewModel(driveItemModel);
    }
    return vmMap[entityId];
}

export class SharedFolderDataStorage {
    private static instance: SharedFolderDataStorage;

    constructor() {
        if (SharedFolderDataStorage.instance) {
            throw new Error("Error - use SharedFolderDataStorage.getInstance()");
        }
        this.member = 0;
    }

    static getInstance(): SharedFolderDataStorage {
        SharedFolderDataStorage.instance = SharedFolderDataStorage.instance || new SharedFolderDataStorage();
        return SharedFolderDataStorage.instance;
    }

    member: number;
}
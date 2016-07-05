"use strict";
var explorer_page_vm_1 = require('../pages/explorer-page/explorer-page-vm');
exports.map = {};
exports.vmMap = {};
function driveItemExists(entityId) {
    return exports.map[entityId] != null;
}
exports.driveItemExists = driveItemExists;
function explorerPageViewModelExists(entityId) {
    return exports.vmMap[entityId] != null;
}
exports.explorerPageViewModelExists = explorerPageViewModelExists;
function getDriveItemsById(entityId) {
    if (!driveItemExists(entityId)) {
        exports.map[entityId] = new Array();
    }
    return exports.map[entityId];
}
exports.getDriveItemsById = getDriveItemsById;
function getExplorerPageViewModelById(driveItemModel) {
    var entityId = driveItemModel.entityId;
    if (!explorerPageViewModelExists(entityId)) {
        exports.vmMap[entityId] = new explorer_page_vm_1.ExplorerPageViewModel(driveItemModel);
    }
    return exports.vmMap[entityId];
}
exports.getExplorerPageViewModelById = getExplorerPageViewModelById;
var SharedFolderDataStorage = (function () {
    function SharedFolderDataStorage() {
        if (SharedFolderDataStorage.instance) {
            throw new Error("Error - use SharedFolderDataStorage.getInstance()");
        }
        this.member = 0;
    }
    SharedFolderDataStorage.getInstance = function () {
        SharedFolderDataStorage.instance = SharedFolderDataStorage.instance || new SharedFolderDataStorage();
        return SharedFolderDataStorage.instance;
    };
    return SharedFolderDataStorage;
}());
exports.SharedFolderDataStorage = SharedFolderDataStorage;
//# sourceMappingURL=folder-data.js.map
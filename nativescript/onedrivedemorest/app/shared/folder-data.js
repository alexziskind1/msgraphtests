"use strict";
var observable_1 = require('data/observable');
var explorer_page_vm_1 = require('../pages/explorer-page/explorer-page-vm');
exports.vmMap = {};
exports.inSelect = new observable_1.Observable(false);
function explorerPageViewModelExists(entityId) {
    return exports.vmMap[entityId] != null;
}
exports.explorerPageViewModelExists = explorerPageViewModelExists;
function getExplorerPageViewModelById(model) {
    var entityId = model.entityId;
    if (!explorerPageViewModelExists(entityId)) {
        exports.vmMap[entityId] = new explorer_page_vm_1.ExplorerPageViewModel(model, null);
    }
    return exports.vmMap[entityId];
}
exports.getExplorerPageViewModelById = getExplorerPageViewModelById;
function clear() {
    exports.lastVm = null;
    exports.vmMap = {};
}
exports.clear = clear;
//# sourceMappingURL=folder-data.js.map
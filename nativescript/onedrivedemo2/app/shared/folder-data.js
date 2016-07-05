"use strict";
var explorer_page_vm_1 = require('../pages/explorer-page/explorer-page-vm');
exports.vmMap = {};
function explorerPageViewModelExists(entityId) {
    return exports.vmMap[entityId] != null;
}
exports.explorerPageViewModelExists = explorerPageViewModelExists;
function getExplorerPageViewModelById(model) {
    var entityId = model.entityId;
    if (!explorerPageViewModelExists(entityId)) {
        exports.vmMap[entityId] = new explorer_page_vm_1.ExplorerPageViewModel(model);
    }
    return exports.vmMap[entityId];
}
exports.getExplorerPageViewModelById = getExplorerPageViewModelById;
//# sourceMappingURL=folder-data.js.map
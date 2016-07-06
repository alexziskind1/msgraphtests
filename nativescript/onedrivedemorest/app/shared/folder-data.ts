import { Observable } from 'data/observable';
import { ExplorerPageViewModel } from '../pages/explorer-page/explorer-page-vm';
import * as utils from 'utils/utils';


export var lastVm: ExplorerPageViewModel;
export var vmMap: { [entityId: string]: ExplorerPageViewModel; } = { };
export var inSelect: Observable = new Observable(false);

export function explorerPageViewModelExists(entityId: string) {
    return vmMap[entityId] != null;
}

export function getExplorerPageViewModelById(model: ExplorerPageViewModel) {
    var entityId = model.entityId;
    if (!explorerPageViewModelExists(entityId)) {
        vmMap[entityId] = new ExplorerPageViewModel(model, null);
    }
    return vmMap[entityId];
}

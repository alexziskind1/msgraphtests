import { MainViewModel } from "./main-view-model";

function onNavigatingTo(args) {
    var page = args.object;
    page.bindingContext = new MainViewModel();
}
exports.onNavigatingTo = onNavigatingTo;
"use strict";
var explorer_vm_1 = require("./explorer-vm");
function navigatingTo(args) {
    // Get the event sender
    var page = args.object;
    page.bindingContext = new explorer_vm_1.ExplorerModel();
    console.log('explorer navigatingTo');
}
exports.navigatingTo = navigatingTo;
//# sourceMappingURL=explorer.js.map
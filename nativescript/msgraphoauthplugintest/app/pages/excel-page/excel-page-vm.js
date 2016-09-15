"use strict";
var observable_1 = require("data/observable");
var SDKHelper_1 = require('../../SDKHelper');
var workbookName = "Expenses.xlsx";
var expensesWorkbookFileId = "012FEALTQBOH2BSE4IHZB26WYRW3Z5MKC7";
var ExcelPageViewModel = (function (_super) {
    __extends(ExcelPageViewModel, _super);
    function ExcelPageViewModel() {
        _super.call(this);
    }
    ExcelPageViewModel.prototype.loadWorkbook = function () {
        return new Promise(function (resolve, reject) {
            var msGraphClient = SDKHelper_1.SDKHelper.GetAuthenticatedClient();
            msGraphClient.Me.Drive.Items.Item(expensesWorkbookFileId).Workbook.Tables.Table('TransactionsTable').Rows.Request().Get()
                .then(function (result) {
                console.dir(result);
            })
                .catch(function (er) {
                console.log(er);
                reject(er);
            });
        });
    };
    ExcelPageViewModel.prototype.showErrorAlert = function (error) {
        alert(error);
        console.error(error);
    };
    return ExcelPageViewModel;
}(observable_1.Observable));
exports.ExcelPageViewModel = ExcelPageViewModel;
//# sourceMappingURL=excel-page-vm.js.map
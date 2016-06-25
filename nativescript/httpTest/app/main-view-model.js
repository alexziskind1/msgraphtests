"use strict";
var Observable = require("data/observable").Observable;
var http = require("http");
exports.AZURE_URL = 'https://rpsdataservice.azurewebsites.net/';
exports.AZURE_TABLE_PATH = 'api/';
exports.AZURE_TABLE_NAME = 'session';
exports.AZURE_VERSION_HEADER = { 'ZUMO-API-VERSION': '2.0.0' };
function getMessage(counter) {
    if (counter <= 0) {
        return "Hoorraaay! You unlocked the NativeScript clicker achievement!";
    }
    else {
        return counter + " taps left";
    }
}
function createViewModel() {
    var viewModel = new Observable();
    viewModel.counter = 42;
    viewModel.message = getMessage(viewModel.counter);
    viewModel.onTap = function () {
        loadSessionsViaHttp()
            .then(function (val) {
            console.log('ok');
            console.log(JSON.stringify(val));
        })
            .catch(function (er) {
            console.log('error');
            console.log(er);
        });
    };
    return viewModel;
}
function loadSessionsViaHttp() {
    var url = exports.AZURE_URL + exports.AZURE_TABLE_PATH + exports.AZURE_TABLE_NAME + '?$orderby=start';
    var reqParams = {
        url: url,
        method: 'GET',
        headers: exports.AZURE_VERSION_HEADER
    };
    /*
    return fetchModule.fetch(url, {
        method: "GET",
        headers: AZURE_VERSION_HEADER
    });
    */
    return http.getJSON(reqParams);
}
exports.createViewModel = createViewModel;
//# sourceMappingURL=main-view-model.js.map
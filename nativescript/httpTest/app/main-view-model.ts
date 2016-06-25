var Observable = require("data/observable").Observable;
import * as http from "http";
import * as fetchModule from "fetch";


export const AZURE_URL = 'https://rpsdataservice.azurewebsites.net/';
export const AZURE_TABLE_PATH = 'api/';
export const AZURE_TABLE_NAME = 'session';
export const AZURE_VERSION_HEADER = { 'ZUMO-API-VERSION' : '2.0.0' };


function getMessage(counter) {
    if (counter <= 0) {
        return "Hoorraaay! You unlocked the NativeScript clicker achievement!";
    } else {
        return counter + " taps left";
    }
}

function createViewModel() {
    var viewModel = new Observable();
    viewModel.counter = 42;
    viewModel.message = getMessage(viewModel.counter);

    viewModel.onTap = function() {
        loadSessionsViaHttp()
        .then((val)=>{
            console.log('ok');
            console.log(JSON.stringify(val));
        })
        .catch((er)=>{
            console.log('error');
            console.log(er);
        });
    }

    return viewModel;
}

function loadSessionsViaHttp<T>() : Promise<T>  {
    var url = AZURE_URL + AZURE_TABLE_PATH + AZURE_TABLE_NAME + '?$orderby=start';
    var reqParams = {
        url: url,
        method: 'GET',
        headers: AZURE_VERSION_HEADER
    };

    /*
    return fetchModule.fetch(url, {
        method: "GET",
        headers: AZURE_VERSION_HEADER
    });
    */

    return http.getJSON<T>(reqParams);
}

exports.createViewModel = createViewModel;
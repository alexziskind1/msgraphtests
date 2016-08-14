"use strict";
var BaseRequest_1 = require('./BaseRequest');
var QueryOption_1 = require('./QueryOption');
var DriveItemRequest = (function (_super) {
    __extends(DriveItemRequest, _super);
    function DriveItemRequest(requestUrl, client, options) {
        _super.call(this, requestUrl, client, options);
    }
    DriveItemRequest.prototype.Create = function (driveItemToCreate, cancellationToken) {
        return new Promise(function (resolve, reject) {
            //TODO convert this
            /*
        this.ContentType = "application/json";
        this.Method = "PUT";
        var newEntity = <Microsoft.Graph.DriveItem>this.Send(driveItemToCreate, cancellationToken);
        this.InitializeCollectionProperties(newEntity);
        return newEntity;
            */
        });
    };
    DriveItemRequest.prototype.Delete = function (cancellationToken) {
        //TODO:
    };
    DriveItemRequest.prototype.Get = function (cancellationToken) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.Send(null)
                .then(function (result) {
                //this.InitializeCollectionProperties(retrievedEntity);
                resolve();
            })
                .catch(function () {
                reject();
            });
        });
    };
    DriveItemRequest.prototype.Update = function (driveItemToUpdate, cancellationToken) {
        return new Promise(function (resolve, reject) {
            //TODO convert this
            /*
         this.ContentType = "application/json";
        this.Method = "PATCH";
        var updatedEntity = <Microsoft.Graph.DriveItem>  this.Send(driveItemToUpdate, cancellationToken);
        this.InitializeCollectionProperties(updatedEntity);
        return updatedEntity;
            */
        });
    };
    DriveItemRequest.prototype.Expand = function (value) {
        this.QueryOptions.push(new QueryOption_1.QueryOption("$expand", value));
        return this;
    };
    DriveItemRequest.prototype.Select = function (value) {
        this.QueryOptions.push(new QueryOption_1.QueryOption("$select", value));
        return this;
    };
    DriveItemRequest.prototype.InitializeCollectionProperties = function (driveItemToInitialize) {
        //TODO
    };
    return DriveItemRequest;
}(BaseRequest_1.BaseRequest));
exports.DriveItemRequest = DriveItemRequest;
//# sourceMappingURL=DriveItemRequest.js.map
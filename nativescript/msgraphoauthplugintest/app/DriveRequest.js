"use strict";
var BaseRequest_1 = require('./BaseRequest');
var QueryOption_1 = require('./QueryOption');
var DriveRequest = (function (_super) {
    __extends(DriveRequest, _super);
    function DriveRequest(requestUrl, client, options) {
        _super.call(this, requestUrl, client, options);
    }
    DriveRequest.prototype.Create = function (driveToCreate, cancellationToken) {
        return new Promise(function (resolve, reject) {
            //TODO convert this
            /*
        this.ContentType = "application/json";
        this.Method = "PUT";
        var newEntity = <Microsoft.Graph.Drive>this.Send(driveToCreate, cancellationToken);
        this.InitializeCollectionProperties(newEntity);
        return newEntity;
            */
        });
    };
    DriveRequest.prototype.Delete = function (cancellationToken) {
        //TODO:
    };
    DriveRequest.prototype.Get = function (cancellationToken) {
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
            //TODO convert this
            /*
        this.Method = "GET";
        var retrievedEntity = <Microsoft.Graph.Drive> this.Send(null, cancellationToken);
        this.InitializeCollectionProperties(retrievedEntity);
        return retrievedEntity;
            */
        });
    };
    DriveRequest.prototype.Update = function (driveToUpdate, cancellationToken) {
        return new Promise(function (resolve, reject) {
            //TODO convert this
            /*
         this.ContentType = "application/json";
        this.Method = "PATCH";
        var updatedEntity = <Microsoft.Graph.Drive>  this.Send(driveToUpdate, cancellationToken);
        this.InitializeCollectionProperties(updatedEntity);
        return updatedEntity;
            */
        });
    };
    DriveRequest.prototype.Expand = function (value) {
        this.QueryOptions.push(new QueryOption_1.QueryOption("$expand", value));
        return this;
    };
    DriveRequest.prototype.Select = function (value) {
        this.QueryOptions.push(new QueryOption_1.QueryOption("$select", value));
        return this;
    };
    DriveRequest.prototype.InitializeCollectionProperties = function (driveToInitialize) {
        //TODO
    };
    return DriveRequest;
}(BaseRequest_1.BaseRequest));
exports.DriveRequest = DriveRequest;
//# sourceMappingURL=DriveRequest.js.map
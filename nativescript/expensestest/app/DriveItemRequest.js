"use strict";
var BaseRequest_1 = require('./BaseRequest');
var QueryOption_1 = require('./QueryOption');
var DriveItemRequest = (function (_super) {
    __extends(DriveItemRequest, _super);
    function DriveItemRequest(requestUrl, client, options) {
        _super.call(this, requestUrl, client, options);
    }
    DriveItemRequest.prototype.Create = function (driveItemToCreate, cancellationToken) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.ContentType = "application/json";
            _this.Method = "PUT";
            _this.SendGen(driveItemToCreate, cancellationToken)
                .then(function (result) {
                _this.InitializeCollectionProperties(result);
                resolve(result);
            })
                .catch(function (er) {
                reject(er);
            });
        });
    };
    DriveItemRequest.prototype.Delete = function (cancellationToken) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.Method = "DELETE";
            _this.SendGen(null, cancellationToken)
                .then(function () {
                resolve();
            })
                .catch(function (er) {
                reject(er);
            });
        });
    };
    DriveItemRequest.prototype.Get = function (cancellationToken) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.SendGen(null, cancellationToken)
                .then(function (result) {
                _this.InitializeCollectionProperties(result);
                resolve(result);
            })
                .catch(function (er) {
                reject(er);
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
    DriveItemRequest.prototype.InitializeCollectionProperties = function (di) {
        di.Children = di.children;
        di.Id = di.id;
        di.Name = di.name;
        di.Folder = di.folder;
        di.Size = di.size;
        di.WebUrl = di.weburl;
    };
    return DriveItemRequest;
}(BaseRequest_1.BaseRequest));
exports.DriveItemRequest = DriveItemRequest;
//# sourceMappingURL=DriveItemRequest.js.map
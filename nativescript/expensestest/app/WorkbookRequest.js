"use strict";
var BaseRequest_1 = require('./BaseRequest');
var QueryOption_1 = require('./QueryOption');
var WorkbookRequest = (function (_super) {
    __extends(WorkbookRequest, _super);
    function WorkbookRequest(requestUrl, client, options) {
        _super.call(this, requestUrl, client, options);
    }
    WorkbookRequest.prototype.Create = function (workbookToCreate, cancellationToken) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.ContentType = "application/json";
            _this.Method = "PUT";
            _this.SendGen(workbookToCreate, cancellationToken)
                .then(function (result) {
                _this.InitializeCollectionProperties(result);
                resolve(result);
            })
                .catch(function (er) {
                reject(er);
            });
        });
    };
    WorkbookRequest.prototype.Delete = function (cancellationToken) {
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
    WorkbookRequest.prototype.Get = function (cancellationToken) {
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
    WorkbookRequest.prototype.Update = function (workbookToUpdate, cancellationToken) {
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
    WorkbookRequest.prototype.Expand = function (value) {
        this.QueryOptions.push(new QueryOption_1.QueryOption("$expand", value));
        return this;
    };
    WorkbookRequest.prototype.Select = function (value) {
        this.QueryOptions.push(new QueryOption_1.QueryOption("$select", value));
        return this;
    };
    WorkbookRequest.prototype.InitializeCollectionProperties = function (wb) {
        //di.Children = (<any>di).children;
        //di.Id = (<any>di).id;
        //di.Name = (<any>di).name;
        //di.Folder = (<any>di).folder;
        //di.Size = (<any>di).size;
        //di.WebUrl = (<any>di).weburl;
    };
    return WorkbookRequest;
}(BaseRequest_1.BaseRequest));
exports.WorkbookRequest = WorkbookRequest;
//# sourceMappingURL=WorkbookRequest.js.map
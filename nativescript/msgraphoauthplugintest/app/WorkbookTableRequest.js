"use strict";
var BaseRequest_1 = require('./BaseRequest');
var QueryOption_1 = require('./QueryOption');
var WorkbookTableRequest = (function (_super) {
    __extends(WorkbookTableRequest, _super);
    function WorkbookTableRequest(requestUrl, client, options) {
        _super.call(this, requestUrl, client, options);
    }
    WorkbookTableRequest.prototype.Create = function (workbookTableToCreate, cancellationToken) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.ContentType = "application/json";
            _this.Method = "PUT";
            _this.SendGen(workbookTableToCreate, cancellationToken)
                .then(function (result) {
                _this.InitializeCollectionProperties(result);
                resolve(result);
            })
                .catch(function (er) {
                reject(er);
            });
        });
    };
    WorkbookTableRequest.prototype.Delete = function (cancellationToken) {
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
    WorkbookTableRequest.prototype.Get = function (cancellationToken) {
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
    WorkbookTableRequest.prototype.Update = function (workbookTableToUpdate, cancellationToken) {
        return new Promise(function (resolve, reject) {
            //TODO convert this
            /*
         this.ContentType = "application/json";
        this.Method = "PATCH";
        var updatedEntity = <Microsoft.Graph.WorkbookTable>  this.Send(WorkbookTableToUpdate, cancellationToken);
        this.InitializeCollectionProperties(updatedEntity);
        return updatedEntity;
            */
        });
    };
    WorkbookTableRequest.prototype.Expand = function (value) {
        this.QueryOptions.push(new QueryOption_1.QueryOption("$expand", value));
        return this;
    };
    WorkbookTableRequest.prototype.Select = function (value) {
        this.QueryOptions.push(new QueryOption_1.QueryOption("$select", value));
        return this;
    };
    WorkbookTableRequest.prototype.InitializeCollectionProperties = function (wt) {
        /*
        di.Children = (<any>di).children;
        di.Id = (<any>di).id;
        di.Name = (<any>di).name;
        di.Folder = (<any>di).folder;
        di.Size = (<any>di).size;
        di.WebUrl = (<any>di).weburl;
        */
    };
    return WorkbookTableRequest;
}(BaseRequest_1.BaseRequest));
exports.WorkbookTableRequest = WorkbookTableRequest;
//# sourceMappingURL=WorkbookTableRequest.js.map
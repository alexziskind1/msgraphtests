"use strict";
var BaseRequest_1 = require('./BaseRequest');
var UserRequest = (function (_super) {
    __extends(UserRequest, _super);
    function UserRequest(requestUrl, client, options) {
        _super.call(this, requestUrl, client, options);
    }
    UserRequest.prototype.Create = function (userToCreate, cancellationToken) {
        return new Promise(function (resolve, reject) {
            //TODO convert this
            /*
        this.ContentType = "application/json";
        this.Method = "PUT";
        var newEntity = <Microsoft.Graph.User>this.Send(userToCreate, cancellationToken);
        this.InitializeCollectionProperties(newEntity);
        return newEntity;
            */
        });
    };
    UserRequest.prototype.Delete = function () {
        //TODO:
    };
    UserRequest.prototype.Get = function (cancellationToken) {
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
        var retrievedEntity = <Microsoft.Graph.User> this.Send(null, cancellationToken);
        this.InitializeCollectionProperties(retrievedEntity);
        return retrievedEntity;
            */
        });
    };
    UserRequest.prototype.Update = function (userToUpdate, cancellationToken) {
        return new Promise(function (resolve, reject) {
            //TODO convert this
            /*
         this.ContentType = "application/json";
        this.Method = "PATCH";
        var updatedEntity = <Microsoft.Graph.User>  this.Send(userToUpdate, cancellationToken);
        this.InitializeCollectionProperties(updatedEntity);
        return updatedEntity;
            */
        });
    };
    UserRequest.prototype.InitializeCollectionProperties = function (userToInitialize) {
        //TODO
    };
    return UserRequest;
}(BaseRequest_1.BaseRequest));
exports.UserRequest = UserRequest;
//# sourceMappingURL=UserRequest.js.map
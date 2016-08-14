"use strict";
var BaseRequest_1 = require('./BaseRequest');
var DirectoryObjectRequest = (function (_super) {
    __extends(DirectoryObjectRequest, _super);
    function DirectoryObjectRequest(requestUrl, client, options) {
        _super.call(this, requestUrl, client, options);
    }
    /// <summary>
    /// Creates the specified DirectoryObject using PUT.
    /// </summary>
    /// <param name="directoryObjectToCreate">The DirectoryObject to create.</param>
    /// <param name="cancellationToken">The <see cref="CancellationToken"/> for the request.</param>
    /// <returns>The created DirectoryObject.</returns>
    DirectoryObjectRequest.prototype.Create = function (directoryObjectToCreate, cancellationToken) {
        return new Promise(function (resolve, reject) {
            //TODO convert this
            /*
        this.ContentType = "application/json";
        this.Method = "PUT";
        var newEntity = <Microsoft.Graph.DirectoryObject> this.Send(directoryObjectToCreate, cancellationToken);
        this.InitializeCollectionProperties(newEntity);
        return newEntity;
            */
        });
    };
    /// <summary>
    /// Deletes the specified DirectoryObject.
    /// </summary>
    /// <param name="cancellationToken">The <see cref="CancellationToken"/> for the request.</param>
    /// <returns>The task to await.</returns>
    DirectoryObjectRequest.prototype.Delete = function (cancellationToken) {
        this.Method = "DELETE";
        this.Send(null, cancellationToken);
    };
    /// <summary>
    /// Gets the specified DirectoryObject.
    /// </summary>
    /// <param name="cancellationToken">The <see cref="CancellationToken"/> for the request.</param>
    /// <returns>The DirectoryObject.</returns>
    DirectoryObjectRequest.prototype.Get = function (cancellationToken) {
        return new Promise(function (resolve, reject) {
            //TODO convert this
            /*
        this.Method = "GET";
        var retrievedEntity = <Microsoft.Graph.DirectoryObject> this.Send(null, cancellationToken);
        this.InitializeCollectionProperties(retrievedEntity);
        return retrievedEntity;
            */
        });
    };
    /// <summary>
    /// Updates the specified DirectoryObject using PATCH.
    /// </summary>
    /// <param name="directoryObjectToUpdate">The DirectoryObject to update.</param>
    /// <param name="cancellationToken">The <see cref="CancellationToken"/> for the request.</param>
    /// <returns>The updated DirectoryObject.</returns>
    DirectoryObjectRequest.prototype.Update = function (directoryObjectToUpdate, cancellationToken) {
        return new Promise(function (resolve, reject) {
            //TODO convert this
            /*
        this.ContentType = "application/json";
        this.Method = "PATCH";
        var updatedEntity = <Microsoft.Graph.DirectoryObject> this.Send(directoryObjectToUpdate, cancellationToken);
        this.InitializeCollectionProperties(updatedEntity);
        return updatedEntity;
            */
        });
    };
    /// <summary>
    /// Initializes any collection properties after deserialization, like next requests for paging.
    /// </summary>
    /// <param name="directoryObjectToInitialize">The <see cref="DirectoryObject"/> with the collection properties to initialize.</param>
    DirectoryObjectRequest.prototype.InitializeCollectionProperties = function (directoryObjectToInitialize) {
        //TODO
    };
    return DirectoryObjectRequest;
}(BaseRequest_1.BaseRequest));
exports.DirectoryObjectRequest = DirectoryObjectRequest;
//# sourceMappingURL=DirectoryObjectRequest.js.map
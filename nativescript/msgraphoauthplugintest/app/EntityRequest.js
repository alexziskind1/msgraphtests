"use strict";
var BaseRequest_1 = require('./BaseRequest');
var QueryOption_1 = require('./QueryOption');
var EntityRequest = (function (_super) {
    __extends(EntityRequest, _super);
    /// <summary>
    /// Constructs a new EntityRequest.
    /// </summary>
    /// <param name="requestUrl">The URL for the built request.</param>
    /// <param name="client">The <see cref="IBaseClient"/> for handling requests.</param>
    /// <param name="options">Query and header option name value pairs for the request.</param>
    function EntityRequest(requestUrl, client, options) {
        _super.call(this, requestUrl, client, options);
    }
    /// <summary>
    /// Creates the specified Entity using PUT.
    /// </summary>
    /// <param name="entityToCreate">The Entity to create.</param>
    /// <param name="cancellationToken">The <see cref="CancellationToken"/> for the request.</param>
    /// <returns>The created Entity.</returns>
    EntityRequest.prototype.Create = function (entityToCreate, cancellationToken) {
        return new Promise(function (resolve, reject) {
            //TODO convert this
            /*
            this.ContentType = "application/json";
            this.Method = "PUT";

            var newEntity = <Entity>this.Send(entityToCreate, cancellationToken);
            //this.InitializeCollectionProperties(newEntity);
            return newEntity;
            */
        });
    };
    /// <summary>
    /// Deletes the specified Entity.
    /// </summary>
    /// <param name="cancellationToken">The <see cref="CancellationToken"/> for the request.</param>
    /// <returns>The task to await.</returns>
    EntityRequest.prototype.Delete = function (cancellationToken) {
        this.Method = "DELETE";
        //await this.SendAsync<Entity>(null, cancellationToken).ConfigureAwait(false);
        this.Send(null, cancellationToken);
    };
    /// <summary>
    /// Gets the specified Entity.
    /// </summary>
    /// <param name="cancellationToken">The <see cref="CancellationToken"/> for the request.</param>
    /// <returns>The Entity.</returns>
    EntityRequest.prototype.Get = function (cancellationToken) {
        return new Promise(function (resolve, reject) {
            //TODO convert this
            /*
        this.Method = "GET";
        var retrievedEntity = <Entity>this.Send(null, cancellationToken);
        this.InitializeCollectionProperties(retrievedEntity);
        return retrievedEntity;
            */
        });
    };
    /// <summary>
    /// Updates the specified Entity using PATCH.
    /// </summary>
    /// <param name="entityToUpdate">The Entity to update.</param>
    /// <param name="cancellationToken">The <see cref="CancellationToken"/> for the request.</param>
    /// <returns>The updated Entity.</returns>
    EntityRequest.prototype.Update = function (entityToUpdate, cancellationToken) {
        return new Promise(function (resolve, reject) {
            //TODO convert this
            /*
        this.ContentType = "application/json";
        this.Method = "PATCH";
        var updatedEntity = <Entity>this.Send(entityToUpdate, cancellationToken);
        this.InitializeCollectionProperties(updatedEntity);
        return updatedEntity;
            */
        });
    };
    /// <summary>
    /// Adds the specified expand value to the request.
    /// </summary>
    /// <param name="value">The expand value.</param>
    /// <returns>The request object to send.</returns>
    EntityRequest.prototype.Expand = function (value) {
        this.QueryOptions.push(new QueryOption_1.QueryOption("$expand", value));
        return this;
    };
    /// <summary>
    /// Adds the specified select value to the request.
    /// </summary>
    /// <param name="value">The select value.</param>
    /// <returns>The request object to send.</returns>
    EntityRequest.prototype.Select = function (value) {
        this.QueryOptions.push(new QueryOption_1.QueryOption("$select", value));
        return this;
    };
    /// <summary>
    /// Initializes any collection properties after deserialization, like next requests for paging.
    /// </summary>
    /// <param name="entityToInitialize">The <see cref="Entity"/> with the collection properties to initialize.</param>
    EntityRequest.prototype.InitializeCollectionProperties = function (entityToInitialize) {
        console.log('InitializeCollectionProperties');
    };
    return EntityRequest;
}(BaseRequest_1.BaseRequest));
exports.EntityRequest = EntityRequest;
//# sourceMappingURL=EntityRequest.js.map
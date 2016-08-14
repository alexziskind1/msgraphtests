import {IBaseClient} from './IBaseClient';
import {IEntityRequest} from './IEntityRequest';
import {BaseRequest} from './BaseRequest';
import {Option} from './Option';
import {QueryOption} from './QueryOption';
import {Entity} from './Entity';
import {CancellationToken} from './CancellationToken';
import * as http from 'http';

export class EntityRequest extends BaseRequest implements IEntityRequest {
        /// <summary>
        /// Constructs a new EntityRequest.
        /// </summary>
        /// <param name="requestUrl">The URL for the built request.</param>
        /// <param name="client">The <see cref="IBaseClient"/> for handling requests.</param>
        /// <param name="options">Query and header option name value pairs for the request.</param>
    constructor(requestUrl:string, client: IBaseClient, options: Option[]) {
        super(requestUrl,client,options);
    }


        /// <summary>
        /// Creates the specified Entity using PUT.
        /// </summary>
        /// <param name="entityToCreate">The Entity to create.</param>
        /// <param name="cancellationToken">The <see cref="CancellationToken"/> for the request.</param>
        /// <returns>The created Entity.</returns>
        public Create( entityToCreate:Entity,  cancellationToken?: CancellationToken) : Promise<Entity> {
            return new Promise<Entity>((resolve, reject)=>{
                //TODO convert this
                /*
                this.ContentType = "application/json";
                this.Method = "PUT";

                var newEntity = <Entity>this.Send(entityToCreate, cancellationToken);
                //this.InitializeCollectionProperties(newEntity);
                return newEntity;
                */
            });
        }


        /// <summary>
        /// Deletes the specified Entity.
        /// </summary>
        /// <param name="cancellationToken">The <see cref="CancellationToken"/> for the request.</param>
        /// <returns>The task to await.</returns>
        public Delete( cancellationToken?:CancellationToken) {
            this.Method = "DELETE";
            //await this.SendAsync<Entity>(null, cancellationToken).ConfigureAwait(false);
            this.Send(null, cancellationToken);
        }


        /// <summary>
        /// Gets the specified Entity.
        /// </summary>
        /// <param name="cancellationToken">The <see cref="CancellationToken"/> for the request.</param>
        /// <returns>The Entity.</returns>
        public Get( cancellationToken?:CancellationToken) : Promise<Entity> {
            return new Promise<Entity>((resolve, reject)=>{
                this.Method = "GET";
                this.Send(null, cancellationToken)
                    .then((result: http.HttpResponse)=>{
                        //this.InitializeCollectionProperties(retrievedEntity);
                        resolve();
                    })
                    .catch(()=>{
                        reject();
                    });
            });
        }


        /// <summary>
        /// Updates the specified Entity using PATCH.
        /// </summary>
        /// <param name="entityToUpdate">The Entity to update.</param>
        /// <param name="cancellationToken">The <see cref="CancellationToken"/> for the request.</param>
        /// <returns>The updated Entity.</returns>
        public Update( entityToUpdate:Entity,  cancellationToken?:CancellationToken) : Promise<Entity> {
            return new Promise<Entity>((resolve, reject)=>{
                //TODO convert this
                /*
            this.ContentType = "application/json";
            this.Method = "PATCH";
            var updatedEntity = <Entity>this.Send(entityToUpdate, cancellationToken);
            this.InitializeCollectionProperties(updatedEntity);
            return updatedEntity;
                */
            });

        }

        /// <summary>
        /// Adds the specified expand value to the request.
        /// </summary>
        /// <param name="value">The expand value.</param>
        /// <returns>The request object to send.</returns>
        public Expand(value:string) : IEntityRequest {
            this.QueryOptions.push(new QueryOption("$expand", value));
            return this;
        }

        /// <summary>
        /// Adds the specified select value to the request.
        /// </summary>
        /// <param name="value">The select value.</param>
        /// <returns>The request object to send.</returns>
        public  Select(value: string) : IEntityRequest {
            this.QueryOptions.push(new QueryOption("$select", value));
            return this;
        }

        /// <summary>
        /// Initializes any collection properties after deserialization, like next requests for paging.
        /// </summary>
        /// <param name="entityToInitialize">The <see cref="Entity"/> with the collection properties to initialize.</param>
        private InitializeCollectionProperties( entityToInitialize:Entity) {
            console.log('InitializeCollectionProperties');
        }
}
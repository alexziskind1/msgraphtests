import * as Microsoft from './Microsoft';
import {IBaseClient} from './IBaseClient';
import {IDirectoryObjectRequest} from './IDirectoryObjectRequest';
import {BaseRequest} from './BaseRequest';
import {Option} from './Option'; 
import {CancellationToken} from './CancellationToken';

export class DirectoryObjectRequest extends BaseRequest implements IDirectoryObjectRequest {

    constructor(
             requestUrl:string,
             client: IBaseClient,
             options: Option[])
            
        {
            super(requestUrl, client, options);
        }


        /// <summary>
        /// Creates the specified DirectoryObject using PUT.
        /// </summary>
        /// <param name="directoryObjectToCreate">The DirectoryObject to create.</param>
        /// <param name="cancellationToken">The <see cref="CancellationToken"/> for the request.</param>
        /// <returns>The created DirectoryObject.</returns>
        public Create(directoryObjectToCreate: Microsoft.Graph.DirectoryObject,  cancellationToken?:CancellationToken) :  Promise<Microsoft.Graph.DirectoryObject> {
            return new Promise<Microsoft.Graph.User>((resolve, reject)=>{
                //TODO convert this
                /*
            this.ContentType = "application/json";
            this.Method = "PUT";
            var newEntity = <Microsoft.Graph.DirectoryObject> this.Send(directoryObjectToCreate, cancellationToken);
            this.InitializeCollectionProperties(newEntity);
            return newEntity;
                */
            });

        }



        /// <summary>
        /// Deletes the specified DirectoryObject.
        /// </summary>
        /// <param name="cancellationToken">The <see cref="CancellationToken"/> for the request.</param>
        /// <returns>The task to await.</returns>
        public Delete( cancellationToken?:CancellationToken) {
            this.Method = "DELETE";
            this.Send(null, cancellationToken);
        }

 

        /// <summary>
        /// Gets the specified DirectoryObject.
        /// </summary>
        /// <param name="cancellationToken">The <see cref="CancellationToken"/> for the request.</param>
        /// <returns>The DirectoryObject.</returns>
        public Get( cancellationToken?:CancellationToken):  Promise<Microsoft.Graph.DirectoryObject> {
            return new Promise<Microsoft.Graph.User>((resolve, reject)=>{
                //TODO convert this
                /*
            this.Method = "GET";
            var retrievedEntity = <Microsoft.Graph.DirectoryObject> this.Send(null, cancellationToken);
            this.InitializeCollectionProperties(retrievedEntity);
            return retrievedEntity;
                */
            });

        }


        /// <summary>
        /// Updates the specified DirectoryObject using PATCH.
        /// </summary>
        /// <param name="directoryObjectToUpdate">The DirectoryObject to update.</param>
        /// <param name="cancellationToken">The <see cref="CancellationToken"/> for the request.</param>
        /// <returns>The updated DirectoryObject.</returns>
        public  Update(directoryObjectToUpdate: Microsoft.Graph.DirectoryObject,  cancellationToken?:CancellationToken):  Promise<Microsoft.Graph.DirectoryObject> {
             return new Promise<Microsoft.Graph.User>((resolve, reject)=>{
                //TODO convert this
                /*
            this.ContentType = "application/json";
            this.Method = "PATCH";
            var updatedEntity = <Microsoft.Graph.DirectoryObject> this.Send(directoryObjectToUpdate, cancellationToken);
            this.InitializeCollectionProperties(updatedEntity);
            return updatedEntity;
                */
            });

        }

        /// <summary>
        /// Initializes any collection properties after deserialization, like next requests for paging.
        /// </summary>
        /// <param name="directoryObjectToInitialize">The <see cref="DirectoryObject"/> with the collection properties to initialize.</param>
        private  InitializeCollectionProperties( directoryObjectToInitialize: Microsoft.Graph.DirectoryObject) {
            //TODO
        }

}
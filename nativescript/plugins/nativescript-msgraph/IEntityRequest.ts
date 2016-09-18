import * as Microsoft from './Microsoft';
import {IBaseRequest} from './IBaseRequest';
import {Entity} from './Entity';
import {CancellationToken} from './CancellationToken';

export interface IEntityRequest extends IBaseRequest {
        /// Creates the specified Entity using PUT.
        /// </summary>
        /// <param name="entityToCreate">The Entity to create.</param>
        /// <param name="cancellationToken">The <see cref="CancellationToken"/> for the request.</param>
        /// <returns>The created Entity.</returns>
        Create(entityToCreate:Entity,  cancellationToken? :CancellationToken): Promise<Entity>;

        /// <summary>
        /// Deletes the specified Entity.
        /// </summary>
        /// <param name="cancellationToken">The <see cref="CancellationToken"/> for the request.</param>
        /// <returns>The task to await.</returns>
        Delete( cancellationToken?:CancellationToken);

        /// <summary>
        /// Gets the specified Entity.
        /// </summary>
        /// <param name="cancellationToken">The <see cref="CancellationToken"/> for the request.</param>
        /// <returns>The Entity.</returns>
        Get( cancellationToken?:CancellationToken):Promise<Entity>;


        /// <summary>
        /// Updates the specified Entity using PATCH.
        /// </summary>
        /// <param name="entityToUpdate">The Entity to update.</param>
        /// <param name="cancellationToken">The <see cref="CancellationToken"/> for the request.</param>
        /// <returns>The updated Entity.</returns>
        Update( entityToUpdate:Entity,  cancellationToken?:CancellationToken):Promise<Entity>;

        /// <summary>
        /// Adds the specified expand value to the request.
        /// </summary>
        /// <param name="value">The expand value.</param>
        /// <returns>The request object to send.</returns>
         Expand( value:string): IEntityRequest;

        /// <summary>
        /// Adds the specified select value to the request.
        /// </summary>
        /// <param name="value">The select value.</param>
        /// <returns>The request object to send.</returns>
         Select(value: string):IEntityRequest;

    }
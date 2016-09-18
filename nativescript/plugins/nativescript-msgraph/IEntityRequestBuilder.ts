import * as Microsoft from './Microsoft';
import {IBaseRequestBuilder} from './IBaseRequestBuilder';
import {IEntityRequest} from './IEntityRequest';
import {Option} from './Option';

export interface IEntityRequestBuilder extends IBaseRequestBuilder {

        /// <summary>
        /// Builds the request.
        /// </summary>
        /// <param name="options">The query and header options for the request.</param>
        /// <returns>The built request.</returns>
        Request(options?: Option[]) : IEntityRequest;
    
    }
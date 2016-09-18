import { IBaseClient } from './IBaseClient';
import { BaseRequestBuilder } from './BaseRequestBuilder';
import {IEntityRequestBuilder} from './IEntityRequestBuilder';
import {Option} from './Option';
import {IEntityRequest} from './IEntityRequest';
import {EntityRequest} from './EntityRequest';

export class EntityRequestBuilder extends BaseRequestBuilder implements IEntityRequestBuilder {
    constructor(requestUrl: string, client: IBaseClient) {
        super(requestUrl, client);
    }

    /// <summary>
    /// Builds the request.
    /// </summary>
    /// <param name="options">The query and header options for the request.</param>
    /// <returns>The built request.</returns>
    public  Request(options?: Option[]) : IEntityRequest {
        return new EntityRequest(this.RequestUrl, this.Client, options);
    }
}
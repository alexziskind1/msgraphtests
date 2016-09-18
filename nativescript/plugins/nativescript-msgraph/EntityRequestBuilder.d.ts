import { IBaseClient } from './IBaseClient';
import { BaseRequestBuilder } from './BaseRequestBuilder';
import { IEntityRequestBuilder } from './IEntityRequestBuilder';
import { Option } from './Option';
import { IEntityRequest } from './IEntityRequest';
export declare class EntityRequestBuilder extends BaseRequestBuilder implements IEntityRequestBuilder {
    constructor(requestUrl: string, client: IBaseClient);
    Request(options?: Option[]): IEntityRequest;
}

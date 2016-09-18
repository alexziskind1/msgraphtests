import { IBaseRequestBuilder } from './IBaseRequestBuilder';
import { IEntityRequest } from './IEntityRequest';
import { Option } from './Option';
export interface IEntityRequestBuilder extends IBaseRequestBuilder {
    Request(options?: Option[]): IEntityRequest;
}

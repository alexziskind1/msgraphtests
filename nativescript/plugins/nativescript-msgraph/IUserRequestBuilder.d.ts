import * as Microsoft from './Microsoft';
import { Option } from './Option';
import { IUserRequest } from './IUserRequest';
export interface IUserRequestBuilder extends Microsoft.Graph.IUserRequestBuilder {
    Request(options?: Option[]): IUserRequest;
}

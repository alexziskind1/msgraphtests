import * as Microsoft from './Microsoft';
import { IHttpProvider } from './IHttpProvider';
export interface IBaseClient extends Microsoft.Graph.IBaseClient {
    HttpProvider: IHttpProvider;
}

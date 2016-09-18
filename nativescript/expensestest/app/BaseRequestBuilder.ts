import { IBaseClient } from './IBaseClient';

export class BaseRequestBuilder {
    public Client: IBaseClient;
    public RequestUrl: string;

    constructor(requestUrl: string,  client: IBaseClient) {
        this.Client = client;
        this.RequestUrl = requestUrl;
    }

    public AppendSegmentToRequestUrl(urlSegment: string) : string {
        return `${this.RequestUrl}/${urlSegment}`;
    }
}
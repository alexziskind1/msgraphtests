import * as Microsoft from './Microsoft';
import {IBaseClient} from './IBaseClient';
import {BaseRequest} from './BaseRequest';
import {IDriveItemChildrenCollectionRequest} from './IDriveItemChildrenCollectionRequest';
import {Option} from './Option';
import {QueryOption} from './QueryOption';
import {CancellationToken} from './CancellationToken';
import {IDriveItemChildrenCollectionPage} from './IDriveItemChildrenCollectionPage';
import * as http from 'http';


export class DriveItemChildrenCollectionRequest extends BaseRequest implements IDriveItemChildrenCollectionRequest {

    constructor(requestUrl: string,
             client: IBaseClient,
             options?: Option[]) 
    {
        super(requestUrl, client, options);
    }



    /// <summary>
    /// Adds the specified DriveItem to the collection via POST.
    /// </summary>
    /// <param name="driveItem">The DriveItem to add.</param>
    /// <param name="cancellationToken">The <see cref="CancellationToken"/> for the request.</param>
    /// <returns>The created DriveItem.</returns>
    public Add(driveItem: Microsoft.Graph.DriveItem, cancellationToken?: CancellationToken) : Promise<Microsoft.Graph.DriveItem> {
        return new Promise<Microsoft.Graph.DriveItem>((resolve, reject)=>{
            this.ContentType = "application/json";
            this.Method = "POST";

            this.SendGen<Microsoft.Graph.DriveItem>(driveItem, cancellationToken)
                .then((result: Microsoft.Graph.DriveItem)=>{
                    this.InitializeCollectionProperties(result);
                    resolve(result);
                })
                .catch((er)=>{
                    reject(er);
                });
        });
    }


    /// <summary>
    /// Gets the collection page.
    /// </summary>
    /// <param name="cancellationToken">The <see cref="CancellationToken"/> for the request.</param>
    /// <returns>The collection page.</returns>
    public Get(cancellationToken?: CancellationToken) : Promise<IDriveItemChildrenCollectionPage> {
        return new Promise((resolve, reject)=>{
            this.Method = "GET";
            this.SendGen(null, cancellationToken)
                .then((result: http.HttpResponse)=>{
                    /*
        this.Method = "GET";
        var response = await this.SendAsync<DriveItemChildrenCollectionResponse>(null, cancellationToken).ConfigureAwait(false);
        if (response != null && response.Value != null && response.Value.CurrentPage != null)
        {
            if (response.AdditionalData != null)
            {
                object nextPageLink;
                response.AdditionalData.TryGetValue("@odata.nextLink", out nextPageLink);

                var nextPageLinkString = nextPageLink as string;

                if (!string.IsNullOrEmpty(nextPageLinkString))
                {
                    response.Value.InitializeNextPageRequest(
                        this.Client,
                        nextPageLinkString);
                }

                // Copy the additional data collection to the page itself so that information is not lost
                response.Value.AdditionalData = response.AdditionalData;
            }

            return response.Value;
        }

        return null;
                    */
                })
                .catch((er)=>{
                    reject(er);
                });
        });
    }

    /// <summary>
    /// Adds the specified expand value to the request.
    /// </summary>
    /// <param name="value">The expand value.</param>
    /// <returns>The request object to send.</returns>
    public Expand(value: string) : IDriveItemChildrenCollectionRequest {
        this.QueryOptions.push(new QueryOption("$expand", value));
        return this;
    }

    /// <summary>
    /// Adds the specified select value to the request.
    /// </summary>
    /// <param name="value">The select value.</param>
    /// <returns>The request object to send.</returns>
    public Select(value: string) : IDriveItemChildrenCollectionRequest {
        this.QueryOptions.push(new QueryOption("$select", value));
        return this;
    }

    /// <summary>
    /// Adds the specified top value to the request.
    /// </summary>
    /// <param name="value">The top value.</param>
    /// <returns>The request object to send.</returns>
    public Top(value: number) : IDriveItemChildrenCollectionRequest {
        this.QueryOptions.push(new QueryOption("$top", value.toString()));
        return this;
    }

    /// <summary>
    /// Adds the specified filter value to the request.
    /// </summary>
    /// <param name="value">The filter value.</param>
    /// <returns>The request object to send.</returns>
    public Filter(value: string) : IDriveItemChildrenCollectionRequest {
        this.QueryOptions.push(new QueryOption("$filter", value));
        return this;
    }

    /// <summary>
    /// Adds the specified skip value to the request.
    /// </summary>
    /// <param name="value">The skip value.</param>
    /// <returns>The request object to send.</returns>
    public Skip(value: number) : IDriveItemChildrenCollectionRequest {
        this.QueryOptions.push(new QueryOption("$skip", value.toString()));
        return this;
    }

    /// <summary>
    /// Adds the specified orderby value to the request.
    /// </summary>
    /// <param name="value">The orderby value.</param>
    /// <returns>The request object to send.</returns>
    public OrderBy(value: string) : IDriveItemChildrenCollectionRequest {
        this.QueryOptions.push(new QueryOption("$orderby", value));
        return this;
    }

    private InitializeCollectionProperties(di: Microsoft.Graph.DriveItem) {
        di.Children = (<any>di).children;
        di.Id = (<any>di).id;
        di.Name = (<any>di).name;
        di.Folder = (<any>di).folder;
        di.Size = (<any>di).size;
        di.WebUrl = (<any>di).weburl;
    }

}
import {IBaseClient} from './IBaseClient';
import {BaseRequest} from './BaseRequest';
import {IWorkbookTablesCollectionRequest} from './IWorkbookTablesCollectionRequest';
import {Option} from './Option';
import {QueryOption} from './QueryOption';
import {CancellationToken} from './CancellationToken';
import {WorkbookTable} from './WorkbookTable';
import {IWorkbookTablesCollectionPage} from './IWorkbookTablesCollectionPage';
import * as http from 'http';

export class  WorkbookTablesCollectionRequest extends BaseRequest implements IWorkbookTablesCollectionRequest {

    constructor(
             requestUrl: string,
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
        public Add(workbookTable: WorkbookTable, cancellationToken?: CancellationToken ) : Promise<WorkbookTable> {
            return new Promise<WorkbookTable>((resolve, reject)=>{
                this.ContentType = "application/json";
                this.Method = "POST";

                this.SendGen<WorkbookTable>(workbookTable, cancellationToken)
                    .then((result: WorkbookTable)=>{
                        //this.InitializeCollectionProperties(retrievedEntity);
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
        public Get(cancellationToken?: CancellationToken ) : Promise<IWorkbookTablesCollectionPage> {
            return new Promise((resolve, reject)=>{
                this.Method = "GET";
                this.Send(null, cancellationToken)
                    .then((result: http.HttpResponse)=>{
                        /*
                        var response = await this.SendAsync< WorkbookTablesCollectionResponse>(null, cancellationToken).ConfigureAwait(false);
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
        public Expand(value: string) : IWorkbookTablesCollectionRequest {
            this.QueryOptions.push(new QueryOption("$expand", value));
            return this;
        }

        /// <summary>
        /// Adds the specified select value to the request.
        /// </summary>
        /// <param name="value">The select value.</param>
        /// <returns>The request object to send.</returns>
        public Select(value: string) : IWorkbookTablesCollectionRequest {
            this.QueryOptions.push(new QueryOption("$select", value));
            return this;
        }

        /// <summary>
        /// Adds the specified top value to the request.
        /// </summary>
        /// <param name="value">The top value.</param>
        /// <returns>The request object to send.</returns>
        public Top(value: number) : IWorkbookTablesCollectionRequest {
            this.QueryOptions.push(new QueryOption("$top", value.toString()));
            return this;
        }

        /// <summary>
        /// Adds the specified filter value to the request.
        /// </summary>
        /// <param name="value">The filter value.</param>
        /// <returns>The request object to send.</returns>
        public Filter(value: string) : IWorkbookTablesCollectionRequest {
            this.QueryOptions.push(new QueryOption("$filter", value));
            return this;
        }

        /// <summary>
        /// Adds the specified skip value to the request.
        /// </summary>
        /// <param name="value">The skip value.</param>
        /// <returns>The request object to send.</returns>
        public Skip(value: number) : IWorkbookTablesCollectionRequest {
            this.QueryOptions.push(new QueryOption("$skip", value.toString()));
            return this;
        }

        /// <summary>
        /// Adds the specified orderby value to the request.
        /// </summary>
        /// <param name="value">The orderby value.</param>
        /// <returns>The request object to send.</returns>
        public OrderBy(value: string) : IWorkbookTablesCollectionRequest {
            this.QueryOptions.push(new QueryOption("$orderby", value));
            return this;
        }

}
import {IBaseRequest} from './IBaseRequest';
import {CancellationToken} from './CancellationToken';
import {IDriveItemChildrenCollectionPage} from './IDriveItemChildrenCollectionPage';

export interface IDriveItemChildrenCollectionRequest extends IBaseRequest {


    /// <summary>
    /// Adds the specified DriveItem to the collection via POST.
    /// </summary>
    /// <param name="driveItem">The DriveItem to add.</param>
    /// <param name="cancellationToken">The <see cref="CancellationToken"/> for the request.</param>
    /// <returns>The created DriveItem.</returns>
    Add(driveItem: Microsoft.Graph.DriveItem, cancellationToken?: CancellationToken) : Promise<Microsoft.Graph.DriveItem>;


    /// <summary>
    /// Gets the collection page.
    /// </summary>
    /// <param name="cancellationToken">The <see cref="CancellationToken"/> for the request.</param>
    /// <returns>The collection page.</returns>
    Get(cancellationToken?: CancellationToken) : Promise<IDriveItemChildrenCollectionPage>;

    /// <summary>
    /// Adds the specified expand value to the request.
    /// </summary>
    /// <param name="value">The expand value.</param>
    /// <returns>The request object to send.</returns>
    Expand(value: string) : IDriveItemChildrenCollectionRequest;

    /// <summary>
    /// Adds the specified select value to the request.
    /// </summary>
    /// <param name="value">The select value.</param>
    /// <returns>The request object to send.</returns>
    Select(value: string) : IDriveItemChildrenCollectionRequest;

    /// <summary>
    /// Adds the specified top value to the request.
    /// </summary>
    /// <param name="value">The top value.</param>
    /// <returns>The request object to send.</returns>
    Top(value: number) : IDriveItemChildrenCollectionRequest;

    /// <summary>
    /// Adds the specified filter value to the request.
    /// </summary>
    /// <param name="value">The filter value.</param>
    /// <returns>The request object to send.</returns>
    Filter(value: string) : IDriveItemChildrenCollectionRequest;

    /// <summary>
    /// Adds the specified skip value to the request.
    /// </summary>
    /// <param name="value">The skip value.</param>
    /// <returns>The request object to send.</returns>
    Skip(value: number) : IDriveItemChildrenCollectionRequest;

    /// <summary>
    /// Adds the specified orderby value to the request.
    /// </summary>
    /// <param name="value">The orderby value.</param>
    /// <returns>The request object to send.</returns>
    OrderBy(value: string) : IDriveItemChildrenCollectionRequest;

}
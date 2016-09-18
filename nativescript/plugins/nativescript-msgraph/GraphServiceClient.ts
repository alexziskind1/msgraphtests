import * as Microsoft from './Microsoft';
import {BaseClient} from './BaseClient';
import {UserRequestBuilder} from './UserRequestBuilder';
import {IHttpProvider} from './IHttpProvider';
import {IAuthenticationProvider} from './IAuthenticationProvider';

export class GraphServiceClient extends BaseClient implements Microsoft.Graph.GraphServiceClient {
    Devices: Microsoft.Graph.IGraphServiceDevicesCollectionRequestBuilder;
    DirectoryObjects: Microsoft.Graph.IGraphServiceDirectoryObjectsCollectionRequestBuilder;
    DirectoryRoles: Microsoft.Graph.IGraphServiceDirectoryRolesCollectionRequestBuilder;
    DirectoryRoleTemplates: Microsoft.Graph.IGraphServiceDirectoryRoleTemplatesCollectionRequestBuilder;
    Drive: Microsoft.Graph.IDriveRequestBuilder;
    Drives: Microsoft.Graph.IGraphServiceDrivesCollectionRequestBuilder;
    Groups: Microsoft.Graph.IGraphServiceGroupsCollectionRequestBuilder;
    //Me: Microsoft.Graph.IUserRequestBuilder;
    Organization: Microsoft.Graph.IGraphServiceOrganizationCollectionRequestBuilder;
    SubscribedSkus: Microsoft.Graph.IGraphServiceSubscribedSkusCollectionRequestBuilder;
    Subscriptions: Microsoft.Graph.IGraphServiceSubscriptionsCollectionRequestBuilder;
    Users: Microsoft.Graph.IGraphServiceUsersCollectionRequestBuilder;

    constructor(authenticationProvider:IAuthenticationProvider, httpProvider:IHttpProvider, baseUrl?: string) {
        if (baseUrl) {
            super(baseUrl, authenticationProvider, httpProvider);
        } else {
            super("https://graph.microsoft.com/v1.0", authenticationProvider, httpProvider);
        }

    }

    /// <summary>
    /// Gets the GraphServiceMe request builder.
    /// </summary>
    public get Me() : UserRequestBuilder {
        return new UserRequestBuilder(this.BaseUrl + "/me", this);
    }

    /// <summary>
    /// Gets the GraphServiceDrive request builder.
    /// </summary>
    //public get Drive() : Microsoft.Graph.IDriveRequestBuilder {
    //    return new DriveRequestBuilder(this.BaseUrl + "/drive", this);
    //}
}
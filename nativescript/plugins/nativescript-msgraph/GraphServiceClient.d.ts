import * as Microsoft from './Microsoft';
import { BaseClient } from './BaseClient';
import { UserRequestBuilder } from './UserRequestBuilder';
import { IHttpProvider } from './IHttpProvider';
import { IAuthenticationProvider } from './IAuthenticationProvider';
export declare class GraphServiceClient extends BaseClient implements Microsoft.Graph.GraphServiceClient {
    Devices: Microsoft.Graph.IGraphServiceDevicesCollectionRequestBuilder;
    DirectoryObjects: Microsoft.Graph.IGraphServiceDirectoryObjectsCollectionRequestBuilder;
    DirectoryRoles: Microsoft.Graph.IGraphServiceDirectoryRolesCollectionRequestBuilder;
    DirectoryRoleTemplates: Microsoft.Graph.IGraphServiceDirectoryRoleTemplatesCollectionRequestBuilder;
    Drive: Microsoft.Graph.IDriveRequestBuilder;
    Drives: Microsoft.Graph.IGraphServiceDrivesCollectionRequestBuilder;
    Groups: Microsoft.Graph.IGraphServiceGroupsCollectionRequestBuilder;
    Organization: Microsoft.Graph.IGraphServiceOrganizationCollectionRequestBuilder;
    SubscribedSkus: Microsoft.Graph.IGraphServiceSubscribedSkusCollectionRequestBuilder;
    Subscriptions: Microsoft.Graph.IGraphServiceSubscriptionsCollectionRequestBuilder;
    Users: Microsoft.Graph.IGraphServiceUsersCollectionRequestBuilder;
    constructor(authenticationProvider: IAuthenticationProvider, httpProvider: IHttpProvider, baseUrl?: string);
    Me: UserRequestBuilder;
}

import {GraphServiceClient} from './GraphServiceClient';
import {DelegateAuthenticationProvider} from './DelegateAuthenticationProvider';
import {SampleAuthProvider} from './SampleAuthProvider';
import {AuthenticationHeaderValue} from './AuthenticationHeaderValue';
import {HttpProvider} from './HttpProvider';
import * as http from 'http';
import * as tnsOAuthModule from 'nativescript-oauth';

var baseUrl = 'https://graph.microsoft.com/v1.0';

 export class SDKHelper {

    public static Initialize(p_clientId: string, p_scope: Array<string>): Promise<void> {
        let options : tnsOAuthModule.ITnsOAuthOptionsOffice365 = {
            clientId: p_clientId,
            scope: p_scope
        };
        return tnsOAuthModule.initOffice365(options);
    }

    // Get an authenticated Microsoft Graph Service client.
    public static GetAuthenticatedClient() : GraphServiceClient {
         let graphClient : GraphServiceClient = new GraphServiceClient(
            new DelegateAuthenticationProvider(
                (requestMessage: http.HttpRequestOptions) => {
                    return new Promise<http.HttpRequestOptions>((resolve, reject)=>{
                        
                        tnsOAuthModule.ensureValidToken()
                            .then((accessToken: string)=>{
                                requestMessage.headers["Authorization"] = "bearer " + accessToken;
                                resolve(requestMessage);
                            })
                            .catch((er)=>{
                                reject(er);
                            });
                    });
                }),
                new HttpProvider(), 
                baseUrl);
        return graphClient;
    }

    public static SignOutClient(returnPage: string): Promise<any> {
        return tnsOAuthModule.logout(returnPage);
    }

    public static SignInClient(returnPage?: string) : Promise<any> {
        return tnsOAuthModule.login(returnPage);
    }

    public static AccessTokenExpired() : boolean {
        return tnsOAuthModule.accessTokenExpired();
    }
}





export * from './AuthenticationHeaderValue';



export * from './BaseClient';



export * from './BaseRequest';



export * from './BaseRequestBuilder';
export * from './CancellationToken';
export * from './CoreConstants';
export * from './DelegateAuthenticationProvider';
export * from './DirectoryObjectRequest';
export * from './DirectoryObjectRequestBuilder';
export * from './DriveItemChildrenCollectionRequest';
export * from './DriveItemChildrenCollectionRequestBuilder';
export * from './DriveItemRequest';
export * from './DriveItemRequestBuilder';
export * from './DriveItemsCollectionRequest';
export * from './DriveItemsCollectionRequestBuilder';
export * from './DriveRequest';
export * from './DriveRequestBuilder';



export * from './Entity';



export * from './EntityRequest';



export * from './EntityRequestBuilder';



export * from './GraphServiceClient';



export * from './HeaderOption';



export * from './HttpProvider';



export * from './IAuthenticationProvider';



export * from './IBaseClient';



export * from './IBaseRequest';



export * from './IBaseRequestBuilder';



export * from './ICollectionPage';



export * from './IDirectoryObjectRequest';



export * from './IDriveItemChildrenCollectionPage';



export * from './IDriveItemChildrenCollectionRequest';



export * from './IDriveItemChildrenCollectionRequestBuilder';



export * from './IDriveItemRequest';



export * from './IDriveItemRequestBuilder';



export * from './IDriveItemsCollectionPage';



export * from './IDriveItemsCollectionRequest';



export * from './IDriveItemsCollectionRequestBuilder';



export * from './IDriveRequest';



export * from './IDriveRequestBuilder';



export * from './IEntityRequest';



export * from './IEntityRequestBuilder';



export * from './IHttpProvider';



export * from './ISerializer';



export * from './IUserRequest';



export * from './IUserRequestBuilder';



export * from './IWorkbookRequest';



export * from './IWorkbookRequestBuilder';



export * from './IWorkbookTableRequest';



export * from './IWorkbookTableRequestBuilder';



export * from './IWorkbookTableRowsCollectionPage';



export * from './IWorkbookTableRowsCollectionRequest';



export * from './IWorkbookTableRowsCollectionRequestBuilder';



export * from './IWorkbookTablesCollectionPage';



export * from './IWorkbookTablesCollectionRequest';



export * from './IWorkbookTablesCollectionRequestBuilder';



export * from './Option';



export * from './QueryOption';



//export * from './SDKHelper';



export * from './SampleAuthProvider';



export * from './Serializer';






export * from './UserRequest';



export * from './UserRequestBuilder';



export * from './Workbook';



export * from './WorkbookRequest';



export * from './WorkbookRequestBuilder';



export * from './WorkbookTable';



export * from './WorkbookTableRequest';



export * from './WorkbookTableRequestBuilder';



export * from './WorkbookTableRow';



export * from './WorkbookTableRowsCollectionRequest';



export * from './WorkbookTableRowsCollectionRequestBuilder';



export * from './WorkbookTablesCollectionRequest';



export * from './WorkbookTablesCollectionRequestBuilder';



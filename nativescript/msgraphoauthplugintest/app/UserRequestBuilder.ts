import {IBaseClient} from './IBaseClient';
import {DirectoryObjectRequestBuilder} from './DirectoryObjectRequestBuilder';
import {DriveRequestBuilder} from './DriveRequestBuilder';
import {Option} from './Option';
import {IUserRequest} from './IUserRequest';
import {UserRequest} from './UserRequest';

export class UserRequestBuilder extends DirectoryObjectRequestBuilder implements Microsoft.Graph.UserRequestBuilder {
    Calendar: Microsoft.Graph.ICalendarRequestBuilder;
    CalendarGroups: Microsoft.Graph.IUserCalendarGroupsCollectionRequestBuilder;
    Calendars: Microsoft.Graph.IUserCalendarsCollectionRequestBuilder;
    CalendarView: Microsoft.Graph.IUserCalendarViewCollectionRequestBuilder;
    ContactFolders: Microsoft.Graph.IUserContactFoldersCollectionRequestBuilder;
    Contacts: Microsoft.Graph.IUserContactsCollectionRequestBuilder;
    CreatedObjects: Microsoft.Graph.IUserCreatedObjectsCollectionWithReferencesRequestBuilder;
    DirectReports: Microsoft.Graph.IUserDirectReportsCollectionWithReferencesRequestBuilder;
    //Drive: Microsoft.Graph.IDriveRequestBuilder;
    Events: Microsoft.Graph.IUserEventsCollectionRequestBuilder;
    InferenceClassification: Microsoft.Graph.IInferenceClassificationRequestBuilder;
    MailFolders: Microsoft.Graph.IUserMailFoldersCollectionRequestBuilder;
    Manager: Microsoft.Graph.IDirectoryObjectWithReferenceRequestBuilder;
    MemberOf: Microsoft.Graph.IUserMemberOfCollectionWithReferencesRequestBuilder;
    Messages: Microsoft.Graph.IUserMessagesCollectionRequestBuilder;
    OwnedDevices: Microsoft.Graph.IUserOwnedDevicesCollectionWithReferencesRequestBuilder;
    OwnedObjects: Microsoft.Graph.IUserOwnedObjectsCollectionWithReferencesRequestBuilder;
    Photo: Microsoft.Graph.IProfilePhotoRequestBuilder;
    RegisteredDevices: Microsoft.Graph.IUserRegisteredDevicesCollectionWithReferencesRequestBuilder;

    constructor(requestUrl: string,  client: IBaseClient) {
        super(requestUrl, client);
    }

    public get Drive() : Microsoft.Graph.IDriveRequestBuilder {
        return new DriveRequestBuilder(this.AppendSegmentToRequestUrl("drive"), this.Client);
    }

    public Request(options?: Option[]): IUserRequest {
        return new UserRequest(this.RequestUrl, this.Client, options);
    }


}
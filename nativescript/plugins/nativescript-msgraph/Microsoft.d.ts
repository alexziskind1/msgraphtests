import * as System from './System';
export declare module Graph {
    const enum AttendeeType {
        Required = 0,
        Optional = 1,
        Resource = 2,
    }
    const enum BodyType {
        Text = 0,
        Html = 1,
    }
    const enum CalendarColor {
        LightBlue = 0,
        LightGreen = 1,
        LightOrange = 2,
        LightGray = 3,
        LightYellow = 4,
        LightTeal = 5,
        LightPink = 6,
        LightBrown = 7,
        LightRed = 8,
        MaxColor = 9,
        Auto = 10,
    }
    const enum DayOfWeek {
        Sunday = 0,
        Monday = 1,
        Tuesday = 2,
        Wednesday = 3,
        Thursday = 4,
        Friday = 5,
        Saturday = 6,
    }
    const enum EventType {
        SingleInstance = 0,
        Occurrence = 1,
        Exception = 2,
        SeriesMaster = 3,
    }
    const enum FreeBusyStatus {
        Free = 0,
        Tentative = 1,
        Busy = 2,
        Oof = 3,
        WorkingElsewhere = 4,
        Unknown = 5,
    }
    const enum Importance {
        Low = 0,
        Normal = 1,
        High = 2,
    }
    const enum InferenceClassificationType {
        Focused = 0,
        Other = 1,
    }
    const enum RecurrencePatternType {
        Daily = 0,
        Weekly = 1,
        AbsoluteMonthly = 2,
        RelativeMonthly = 3,
        AbsoluteYearly = 4,
        RelativeYearly = 5,
    }
    const enum RecurrenceRangeType {
        EndDate = 0,
        NoEnd = 1,
        Numbered = 2,
    }
    const enum ResponseType {
        None = 0,
        Organizer = 1,
        TentativelyAccepted = 2,
        Accepted = 3,
        Declined = 4,
        NotResponded = 5,
    }
    const enum Sensitivity {
        Normal = 0,
        Personal = 1,
        Private = 2,
        Confidential = 3,
    }
    const enum WeekIndex {
        First = 0,
        Second = 1,
        Third = 2,
        Fourth = 3,
        Last = 4,
    }
    interface AssignedLicense {
        AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
        DisabledPlans: System.Guid[];
        SkuId: System.Guid;
    }
    interface AssignedPlan {
        AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
        AssignedDateTime: Date;
        CapabilityStatus: string;
        Service: string;
        ServicePlanId: System.Guid;
    }
    interface Attachment extends Graph.Entity {
        ContentType: string;
        IsInline: boolean;
        LastModifiedDateTime: Date;
        Name: string;
        Size: number;
    }
    interface Attendee extends Graph.Recipient {
        Status: Graph.ResponseStatus;
        Type: Graph.AttendeeType;
    }
    interface Audio {
        AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
        Album: string;
        AlbumArtist: string;
        Artist: string;
        Bitrate: number;
        Composers: string;
        Copyright: string;
        Disc: number;
        DiscCount: number;
        Duration: number;
        Genre: string;
        HasDrm: boolean;
        IsVariableBitrate: boolean;
        Title: string;
        Track: number;
        TrackCount: number;
        Year: number;
    }
    interface BaseClient {
        AuthenticationProvider: Graph.IAuthenticationProvider;
        BaseUrl: string;
        HttpProvider: Graph.IHttpProvider;
    }
    interface BaseRequest {
        Client: Graph.IBaseClient;
        ContentType: string;
        Headers: Graph.HeaderOption[];
        Method: string;
        QueryOptions: Graph.QueryOption[];
        RequestUrl: string;
    }
    interface BaseRequestBuilder {
        Client: Graph.IBaseClient;
        RequestUrl: string;
    }
    interface Calendar extends Graph.Entity {
        CalendarView: Graph.Event[];
        ChangeKey: string;
        Color: Graph.CalendarColor;
        Events: Graph.Event[];
        Name: string;
    }
    interface CalendarGroup extends Graph.Entity {
        Calendars: Graph.Calendar[];
        ChangeKey: string;
        ClassId: System.Guid;
        Name: string;
    }
    interface Contact extends Graph.OutlookItem {
        AssistantName: string;
        Birthday: Date;
        BusinessAddress: Graph.PhysicalAddress;
        BusinessHomePage: string;
        BusinessPhones: string[];
        Children: string[];
        CompanyName: string;
        Department: string;
        DisplayName: string;
        EmailAddresses: Graph.EmailAddress[];
        Extensions: Graph.Extension[];
        FileAs: string;
        Generation: string;
        GivenName: string;
        HomeAddress: Graph.PhysicalAddress;
        HomePhones: string[];
        ImAddresses: string[];
        Initials: string;
        JobTitle: string;
        Manager: string;
        MiddleName: string;
        MobilePhone: string;
        NickName: string;
        OfficeLocation: string;
        OtherAddress: Graph.PhysicalAddress;
        ParentFolderId: string;
        PersonalNotes: string;
        Photo: Graph.ProfilePhoto;
        Profession: string;
        SpouseName: string;
        Surname: string;
        Title: string;
        YomiCompanyName: string;
        YomiGivenName: string;
        YomiSurname: string;
    }
    interface ContactFolder extends Graph.Entity {
        ChildFolders: Graph.ContactFolder[];
        Contacts: Graph.Contact[];
        DisplayName: string;
        ParentFolderId: string;
    }
    interface Date {
        Day: number;
        Month: number;
        Year: number;
    }
    interface DateTimeTimeZone {
        AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
        DateTime: string;
        TimeZone: string;
    }
    interface Deleted {
        AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
        State: string;
    }
    interface DirectoryObject extends Graph.Entity {
    }
    interface DirectoryObjectRequestBuilder extends Graph.EntityRequestBuilder {
    }
    interface Drive extends Graph.Entity {
        DriveType: string;
        Items: Graph.DriveItem[];
        Owner: Graph.IdentitySet;
        Quota: Graph.Quota;
        Root: Graph.DriveItem;
        Special: Graph.DriveItem[];
    }
    interface DriveItem extends Graph.Entity {
        Audio: Graph.Audio;
        Children: Graph.DriveItem[];
        Content: System.IO.Stream;
        CreatedBy: Graph.IdentitySet;
        CreatedByUser: Graph.User;
        CreatedDateTime: Date;
        CTag: string;
        Deleted: Graph.Deleted;
        Description: string;
        ETag: string;
        File: Graph.File;
        FileSystemInfo: Graph.FileSystemInfo;
        Folder: Graph.Folder;
        Image: Graph.Image;
        LastModifiedBy: Graph.IdentitySet;
        LastModifiedByUser: Graph.User;
        LastModifiedDateTime: Date;
        Location: Graph.GeoCoordinates;
        Name: string;
        Package: Graph.Package;
        ParentReference: Graph.ItemReference;
        Permissions: Graph.Permission[];
        Photo: Graph.Photo;
        RemoteItem: Graph.RemoteItem;
        SearchResult: Graph.SearchResult;
        Shared: Graph.Shared;
        Size: number;
        SpecialFolder: Graph.SpecialFolder;
        Thumbnails: Graph.ThumbnailSet[];
        Video: Graph.Video;
        WebDavUrl: string;
        WebUrl: string;
    }
    interface DriveItemRequest extends Graph.BaseRequest {
    }
    interface DriveItemRequestBuilder extends Graph.EntityRequestBuilder {
        Children: Graph.IDriveItemChildrenCollectionRequestBuilder;
        Content: Graph.IDriveItemContentRequestBuilder;
        CreatedByUser: Graph.IUserWithReferenceRequestBuilder;
        LastModifiedByUser: Graph.IUserWithReferenceRequestBuilder;
        Permissions: Graph.IDriveItemPermissionsCollectionRequestBuilder;
        Thumbnails: Graph.IDriveItemThumbnailsCollectionRequestBuilder;
    }
    interface DriveItemsCollectionRequest extends Graph.BaseRequest {
    }
    interface DriveItemsCollectionRequestBuilder extends Graph.BaseRequestBuilder {
        Item: Graph.IDriveItemRequestBuilder;
    }
    interface DriveItemsCollectionResponse {
        AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
        Value: Graph.DriveItem[];
    }
    interface DriveRequest extends Graph.BaseRequest {
    }
    interface DriveRequestBuilder extends Graph.EntityRequestBuilder {
        Items: Graph.IDriveItemsCollectionRequestBuilder;
        Root: Graph.IDriveItemRequestBuilder;
        Special: Graph.IDriveSpecialCollectionRequestBuilder;
    }
    interface EmailAddress {
        AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
        Address: string;
        Name: string;
    }
    interface Entity {
        AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
        Id: string;
        ODataType: string;
    }
    interface EntityRequestBuilder extends Graph.BaseRequestBuilder {
    }
    interface Event extends Graph.OutlookItem {
        Attachments: Graph.Attachment[];
        Attendees: Graph.Attendee[];
        Body: Graph.ItemBody;
        BodyPreview: string;
        Calendar: Graph.Calendar;
        End: Graph.DateTimeTimeZone;
        Extensions: Graph.Extension[];
        HasAttachments: boolean;
        ICalUId: string;
        Importance: Graph.Importance;
        Instances: Graph.Event[];
        IsAllDay: boolean;
        IsCancelled: boolean;
        IsOrganizer: boolean;
        IsReminderOn: boolean;
        Location: Graph.Location;
        Organizer: Graph.Recipient;
        OriginalEndTimeZone: string;
        OriginalStart: Date;
        OriginalStartTimeZone: string;
        Recurrence: Graph.PatternedRecurrence;
        ReminderMinutesBeforeStart: number;
        ResponseRequested: boolean;
        ResponseStatus: Graph.ResponseStatus;
        Sensitivity: Graph.Sensitivity;
        SeriesMasterId: string;
        ShowAs: Graph.FreeBusyStatus;
        Start: Graph.DateTimeTimeZone;
        Subject: string;
        Type: Graph.EventType;
        WebLink: string;
    }
    interface Extension extends Graph.Entity {
    }
    interface File {
        AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
        Hashes: Graph.Hashes;
        MimeType: string;
    }
    interface FileSystemInfo {
        AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
        CreatedDateTime: Date;
        LastModifiedDateTime: Date;
    }
    interface Folder {
        AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
        ChildCount: number;
    }
    interface GeoCoordinates {
        AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
        Altitude: number;
        Latitude: number;
        Longitude: number;
    }
    interface GraphServiceClient extends Graph.BaseClient {
        Devices: Graph.IGraphServiceDevicesCollectionRequestBuilder;
        DirectoryObjects: Graph.IGraphServiceDirectoryObjectsCollectionRequestBuilder;
        DirectoryRoles: Graph.IGraphServiceDirectoryRolesCollectionRequestBuilder;
        DirectoryRoleTemplates: Graph.IGraphServiceDirectoryRoleTemplatesCollectionRequestBuilder;
        Drive: Graph.IDriveRequestBuilder;
        Drives: Graph.IGraphServiceDrivesCollectionRequestBuilder;
        Groups: Graph.IGraphServiceGroupsCollectionRequestBuilder;
        Me: Graph.IUserRequestBuilder;
        Organization: Graph.IGraphServiceOrganizationCollectionRequestBuilder;
        SubscribedSkus: Graph.IGraphServiceSubscribedSkusCollectionRequestBuilder;
        Subscriptions: Graph.IGraphServiceSubscriptionsCollectionRequestBuilder;
        Users: Graph.IGraphServiceUsersCollectionRequestBuilder;
    }
    interface Hashes {
        AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
        Crc32Hash: string;
        Sha1Hash: string;
    }
    interface HeaderOption extends Graph.Option {
    }
    interface IAttachmentRequestBuilder {
    }
    interface IAuthenticationProvider {
        AuthenticateRequest(request: any): any;
    }
    interface IBaseClient {
        AuthenticationProvider: Graph.IAuthenticationProvider;
        BaseUrl: string;
        HttpProvider: Graph.IHttpProvider;
    }
    interface ICalendarCalendarViewCollectionRequestBuilder {
        Item: Graph.IEventRequestBuilder;
    }
    interface ICalendarEventsCollectionRequestBuilder {
        Item: Graph.IEventRequestBuilder;
    }
    interface ICalendarGroupCalendarsCollectionRequestBuilder {
        Item: Graph.ICalendarRequestBuilder;
    }
    interface ICalendarGroupRequestBuilder {
        Calendars: Graph.ICalendarGroupCalendarsCollectionRequestBuilder;
    }
    interface ICalendarRequestBuilder {
        CalendarView: Graph.ICalendarCalendarViewCollectionRequestBuilder;
        Events: Graph.ICalendarEventsCollectionRequestBuilder;
    }
    interface IContactExtensionsCollectionRequestBuilder {
        Item: Graph.IExtensionRequestBuilder;
    }
    interface IContactFolderChildFoldersCollectionRequestBuilder {
        Item: Graph.IContactFolderRequestBuilder;
    }
    interface IContactFolderContactsCollectionRequestBuilder {
        Item: Graph.IContactRequestBuilder;
    }
    interface IContactFolderRequestBuilder {
        ChildFolders: Graph.IContactFolderChildFoldersCollectionRequestBuilder;
        Contacts: Graph.IContactFolderContactsCollectionRequestBuilder;
    }
    interface IContactRequestBuilder {
        Extensions: Graph.IContactExtensionsCollectionRequestBuilder;
        Photo: Graph.IProfilePhotoRequestBuilder;
    }
    interface IConversationRequestBuilder {
        Threads: Graph.IConversationThreadsCollectionRequestBuilder;
    }
    interface IConversationThreadPostsCollectionRequestBuilder {
        Item: Graph.IPostRequestBuilder;
    }
    interface IConversationThreadRequestBuilder {
        Posts: Graph.IConversationThreadPostsCollectionRequestBuilder;
    }
    interface IConversationThreadsCollectionRequestBuilder {
        Item: Graph.IConversationThreadRequestBuilder;
    }
    interface Identity {
        AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
        DisplayName: string;
        Id: string;
    }
    interface IdentitySet {
        AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
        Application: Graph.Identity;
        Device: Graph.Identity;
        User: Graph.Identity;
    }
    interface IDeviceRegisteredOwnersCollectionReferencesRequestBuilder {
    }
    interface IDeviceRegisteredOwnersCollectionWithReferencesRequestBuilder {
        Item: Graph.IDirectoryObjectWithReferenceRequestBuilder;
        References: Graph.IDeviceRegisteredOwnersCollectionReferencesRequestBuilder;
    }
    interface IDeviceRegisteredUsersCollectionReferencesRequestBuilder {
    }
    interface IDeviceRegisteredUsersCollectionWithReferencesRequestBuilder {
        Item: Graph.IDirectoryObjectWithReferenceRequestBuilder;
        References: Graph.IDeviceRegisteredUsersCollectionReferencesRequestBuilder;
    }
    interface IDeviceRequestBuilder {
        RegisteredOwners: Graph.IDeviceRegisteredOwnersCollectionWithReferencesRequestBuilder;
        RegisteredUsers: Graph.IDeviceRegisteredUsersCollectionWithReferencesRequestBuilder;
    }
    interface IDirectoryObjectReferenceRequestBuilder {
    }
    interface IDirectoryObjectRequestBuilder {
    }
    interface IDirectoryObjectWithReferenceRequestBuilder {
        Reference: Graph.IDirectoryObjectReferenceRequestBuilder;
    }
    interface IDirectoryRoleMembersCollectionReferencesRequestBuilder {
    }
    interface IDirectoryRoleMembersCollectionWithReferencesRequestBuilder {
        Item: Graph.IDirectoryObjectWithReferenceRequestBuilder;
        References: Graph.IDirectoryRoleMembersCollectionReferencesRequestBuilder;
    }
    interface IDirectoryRoleRequestBuilder {
        Members: Graph.IDirectoryRoleMembersCollectionWithReferencesRequestBuilder;
    }
    interface IDirectoryRoleTemplateRequestBuilder {
    }
    interface IDriveItemChildrenCollectionRequestBuilder {
    }
    interface IDriveItemContentRequestBuilder {
    }
    interface IDriveItemPermissionsCollectionRequestBuilder {
        Item: Graph.IPermissionRequestBuilder;
    }
    interface IDriveItemRequestBuilder {
        Children: Graph.IDriveItemChildrenCollectionRequestBuilder;
        Content: Graph.IDriveItemContentRequestBuilder;
        CreatedByUser: Graph.IUserWithReferenceRequestBuilder;
        LastModifiedByUser: Graph.IUserWithReferenceRequestBuilder;
        Permissions: Graph.IDriveItemPermissionsCollectionRequestBuilder;
        Thumbnails: Graph.IDriveItemThumbnailsCollectionRequestBuilder;
    }
    interface IDriveItemsCollectionRequestBuilder {
    }
    interface IDriveItemThumbnailsCollectionRequestBuilder {
        Item: Graph.IThumbnailSetRequestBuilder;
    }
    interface IDriveRequestBuilder {
        Items: Graph.IDriveItemsCollectionRequestBuilder;
        Root: Graph.IDriveItemRequestBuilder;
        Special: Graph.IDriveSpecialCollectionRequestBuilder;
    }
    interface IDriveSpecialCollectionRequestBuilder {
        AppRoot: Graph.IDriveItemRequestBuilder;
        Item: Graph.IDriveItemRequestBuilder;
    }
    interface IEventAttachmentsCollectionRequestBuilder {
        Item: Graph.IAttachmentRequestBuilder;
    }
    interface IEventExtensionsCollectionRequestBuilder {
        Item: Graph.IExtensionRequestBuilder;
    }
    interface IEventInstancesCollectionRequestBuilder {
        Item: Graph.IEventRequestBuilder;
    }
    interface IEventRequestBuilder {
        Attachments: Graph.IEventAttachmentsCollectionRequestBuilder;
        Calendar: Graph.ICalendarRequestBuilder;
        Extensions: Graph.IEventExtensionsCollectionRequestBuilder;
        Instances: Graph.IEventInstancesCollectionRequestBuilder;
    }
    interface IExtensionRequestBuilder {
    }
    interface IGraphServiceDevicesCollectionRequestBuilder {
        Item: Graph.IDeviceRequestBuilder;
    }
    interface IGraphServiceDirectoryObjectsCollectionRequestBuilder {
        Item: Graph.IDirectoryObjectRequestBuilder;
    }
    interface IGraphServiceDirectoryRolesCollectionRequestBuilder {
        Item: Graph.IDirectoryRoleRequestBuilder;
    }
    interface IGraphServiceDirectoryRoleTemplatesCollectionRequestBuilder {
        Item: Graph.IDirectoryRoleTemplateRequestBuilder;
    }
    interface IGraphServiceDrivesCollectionRequestBuilder {
        Item: Graph.IDriveRequestBuilder;
    }
    interface IGraphServiceGroupsCollectionRequestBuilder {
        Item: Graph.IGroupRequestBuilder;
    }
    interface IGraphServiceOrganizationCollectionRequestBuilder {
        Item: Graph.IOrganizationRequestBuilder;
    }
    interface IGraphServiceSubscribedSkusCollectionRequestBuilder {
        Item: Graph.ISubscribedSkuRequestBuilder;
    }
    interface IGraphServiceSubscriptionsCollectionRequestBuilder {
        Item: Graph.ISubscriptionRequestBuilder;
    }
    interface IGraphServiceUsersCollectionRequestBuilder {
        Item: Graph.IUserRequestBuilder;
    }
    interface IGroupAcceptedSendersCollectionRequestBuilder {
        Item: Graph.IDirectoryObjectRequestBuilder;
    }
    interface IGroupCalendarViewCollectionRequestBuilder {
        Item: Graph.IEventRequestBuilder;
    }
    interface IGroupConversationsCollectionRequestBuilder {
        Item: Graph.IConversationRequestBuilder;
    }
    interface IGroupEventsCollectionRequestBuilder {
        Item: Graph.IEventRequestBuilder;
    }
    interface IGroupMemberOfCollectionReferencesRequestBuilder {
    }
    interface IGroupMemberOfCollectionWithReferencesRequestBuilder {
        Item: Graph.IDirectoryObjectWithReferenceRequestBuilder;
        References: Graph.IGroupMemberOfCollectionReferencesRequestBuilder;
    }
    interface IGroupMembersCollectionReferencesRequestBuilder {
    }
    interface IGroupMembersCollectionWithReferencesRequestBuilder {
        Item: Graph.IDirectoryObjectWithReferenceRequestBuilder;
        References: Graph.IGroupMembersCollectionReferencesRequestBuilder;
    }
    interface IGroupOwnersCollectionReferencesRequestBuilder {
    }
    interface IGroupOwnersCollectionWithReferencesRequestBuilder {
        Item: Graph.IDirectoryObjectWithReferenceRequestBuilder;
        References: Graph.IGroupOwnersCollectionReferencesRequestBuilder;
    }
    interface IGroupRejectedSendersCollectionRequestBuilder {
        Item: Graph.IDirectoryObjectRequestBuilder;
    }
    interface IGroupRequestBuilder {
        AcceptedSenders: Graph.IGroupAcceptedSendersCollectionRequestBuilder;
        Calendar: Graph.ICalendarRequestBuilder;
        CalendarView: Graph.IGroupCalendarViewCollectionRequestBuilder;
        Conversations: Graph.IGroupConversationsCollectionRequestBuilder;
        CreatedOnBehalfOf: Graph.IDirectoryObjectWithReferenceRequestBuilder;
        Drive: Graph.IDriveRequestBuilder;
        Events: Graph.IGroupEventsCollectionRequestBuilder;
        MemberOf: Graph.IGroupMemberOfCollectionWithReferencesRequestBuilder;
        Members: Graph.IGroupMembersCollectionWithReferencesRequestBuilder;
        Owners: Graph.IGroupOwnersCollectionWithReferencesRequestBuilder;
        Photo: Graph.IProfilePhotoRequestBuilder;
        RejectedSenders: Graph.IGroupRejectedSendersCollectionRequestBuilder;
        Threads: Graph.IGroupThreadsCollectionRequestBuilder;
    }
    interface IGroupThreadsCollectionRequestBuilder {
        Item: Graph.IConversationThreadRequestBuilder;
    }
    interface IHttpProvider {
        Serializer: Graph.ISerializer;
    }
    interface IInferenceClassificationOverrideRequestBuilder {
    }
    interface IInferenceClassificationOverridesCollectionRequestBuilder {
        Item: Graph.IInferenceClassificationOverrideRequestBuilder;
    }
    interface IInferenceClassificationRequestBuilder {
        Overrides: Graph.IInferenceClassificationOverridesCollectionRequestBuilder;
    }
    interface Image {
        AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
        Height: number;
        Width: number;
    }
    interface IMailFolderChildFoldersCollectionRequestBuilder {
        Item: Graph.IMailFolderRequestBuilder;
    }
    interface IMailFolderMessagesCollectionRequestBuilder {
        Item: Graph.IMessageRequestBuilder;
    }
    interface IMailFolderRequestBuilder {
        ChildFolders: Graph.IMailFolderChildFoldersCollectionRequestBuilder;
        Messages: Graph.IMailFolderMessagesCollectionRequestBuilder;
    }
    interface IMessageAttachmentsCollectionRequestBuilder {
        Item: Graph.IAttachmentRequestBuilder;
    }
    interface IMessageExtensionsCollectionRequestBuilder {
        Item: Graph.IExtensionRequestBuilder;
    }
    interface IMessageRequestBuilder {
        Attachments: Graph.IMessageAttachmentsCollectionRequestBuilder;
        Extensions: Graph.IMessageExtensionsCollectionRequestBuilder;
    }
    interface InferenceClassification extends Graph.Entity {
        Overrides: Graph.InferenceClassificationOverride[];
    }
    interface InferenceClassificationOverride extends Graph.Entity {
        ClassifyAs: Graph.InferenceClassificationType;
        SenderEmailAddress: Graph.EmailAddress;
    }
    interface IOrganizationRequestBuilder {
    }
    interface IPermissionRequestBuilder {
    }
    interface IPostAttachmentsCollectionRequestBuilder {
        Item: Graph.IAttachmentRequestBuilder;
    }
    interface IPostExtensionsCollectionRequestBuilder {
        Item: Graph.IExtensionRequestBuilder;
    }
    interface IPostRequestBuilder {
        Attachments: Graph.IPostAttachmentsCollectionRequestBuilder;
        Extensions: Graph.IPostExtensionsCollectionRequestBuilder;
        InReplyTo: Graph.IPostRequestBuilder;
    }
    interface IProfilePhotoContentRequestBuilder {
    }
    interface IProfilePhotoRequestBuilder {
        Content: Graph.IProfilePhotoContentRequestBuilder;
    }
    interface ISerializer {
    }
    interface ISubscribedSkuRequestBuilder {
    }
    interface ISubscriptionRequestBuilder {
    }
    interface ItemBody {
        AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
        Content: string;
        ContentType: Graph.BodyType;
    }
    interface ItemReference {
        AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
        DriveId: string;
        Id: string;
        Path: string;
    }
    interface IThumbnailContentRequestBuilder {
    }
    interface IThumbnailRequestBuilder {
        Content: Graph.IThumbnailContentRequestBuilder;
    }
    interface IThumbnailSetRequestBuilder {
        Item: Graph.IThumbnailRequestBuilder;
    }
    interface IUserCalendarGroupsCollectionRequestBuilder {
        Item: Graph.ICalendarGroupRequestBuilder;
    }
    interface IUserCalendarsCollectionRequestBuilder {
        Item: Graph.ICalendarRequestBuilder;
    }
    interface IUserCalendarViewCollectionRequestBuilder {
        Item: Graph.IEventRequestBuilder;
    }
    interface IUserContactFoldersCollectionRequestBuilder {
        Item: Graph.IContactFolderRequestBuilder;
    }
    interface IUserContactsCollectionRequestBuilder {
        Item: Graph.IContactRequestBuilder;
    }
    interface IUserCreatedObjectsCollectionReferencesRequestBuilder {
    }
    interface IUserCreatedObjectsCollectionWithReferencesRequestBuilder {
        Item: Graph.IDirectoryObjectWithReferenceRequestBuilder;
        References: Graph.IUserCreatedObjectsCollectionReferencesRequestBuilder;
    }
    interface IUserDirectReportsCollectionReferencesRequestBuilder {
    }
    interface IUserDirectReportsCollectionWithReferencesRequestBuilder {
        Item: Graph.IDirectoryObjectWithReferenceRequestBuilder;
        References: Graph.IUserDirectReportsCollectionReferencesRequestBuilder;
    }
    interface IUserEventsCollectionRequestBuilder {
        Item: Graph.IEventRequestBuilder;
    }
    interface IUserMailFoldersCollectionRequestBuilder {
        DeletedItems: Graph.IMailFolderRequestBuilder;
        Drafts: Graph.IMailFolderRequestBuilder;
        Inbox: Graph.IMailFolderRequestBuilder;
        Item: Graph.IMailFolderRequestBuilder;
        SentItems: Graph.IMailFolderRequestBuilder;
    }
    interface IUserMemberOfCollectionReferencesRequestBuilder {
    }
    interface IUserMemberOfCollectionWithReferencesRequestBuilder {
        Item: Graph.IDirectoryObjectWithReferenceRequestBuilder;
        References: Graph.IUserMemberOfCollectionReferencesRequestBuilder;
    }
    interface IUserMessagesCollectionRequestBuilder {
        Item: Graph.IMessageRequestBuilder;
    }
    interface IUserOwnedDevicesCollectionReferencesRequestBuilder {
    }
    interface IUserOwnedDevicesCollectionWithReferencesRequestBuilder {
        Item: Graph.IDirectoryObjectWithReferenceRequestBuilder;
        References: Graph.IUserOwnedDevicesCollectionReferencesRequestBuilder;
    }
    interface IUserOwnedObjectsCollectionReferencesRequestBuilder {
    }
    interface IUserOwnedObjectsCollectionWithReferencesRequestBuilder {
        Item: Graph.IDirectoryObjectWithReferenceRequestBuilder;
        References: Graph.IUserOwnedObjectsCollectionReferencesRequestBuilder;
    }
    interface IUserReferenceRequestBuilder {
    }
    interface IUserRegisteredDevicesCollectionReferencesRequestBuilder {
    }
    interface IUserRegisteredDevicesCollectionWithReferencesRequestBuilder {
        Item: Graph.IDirectoryObjectWithReferenceRequestBuilder;
        References: Graph.IUserRegisteredDevicesCollectionReferencesRequestBuilder;
    }
    interface IUserRequestBuilder {
        Calendar: Graph.ICalendarRequestBuilder;
        CalendarGroups: Graph.IUserCalendarGroupsCollectionRequestBuilder;
        Calendars: Graph.IUserCalendarsCollectionRequestBuilder;
        CalendarView: Graph.IUserCalendarViewCollectionRequestBuilder;
        ContactFolders: Graph.IUserContactFoldersCollectionRequestBuilder;
        Contacts: Graph.IUserContactsCollectionRequestBuilder;
        CreatedObjects: Graph.IUserCreatedObjectsCollectionWithReferencesRequestBuilder;
        DirectReports: Graph.IUserDirectReportsCollectionWithReferencesRequestBuilder;
        Drive: Graph.IDriveRequestBuilder;
        Events: Graph.IUserEventsCollectionRequestBuilder;
        InferenceClassification: Graph.IInferenceClassificationRequestBuilder;
        MailFolders: Graph.IUserMailFoldersCollectionRequestBuilder;
        Manager: Graph.IDirectoryObjectWithReferenceRequestBuilder;
        MemberOf: Graph.IUserMemberOfCollectionWithReferencesRequestBuilder;
        Messages: Graph.IUserMessagesCollectionRequestBuilder;
        OwnedDevices: Graph.IUserOwnedDevicesCollectionWithReferencesRequestBuilder;
        OwnedObjects: Graph.IUserOwnedObjectsCollectionWithReferencesRequestBuilder;
        Photo: Graph.IProfilePhotoRequestBuilder;
        RegisteredDevices: Graph.IUserRegisteredDevicesCollectionWithReferencesRequestBuilder;
    }
    interface IUserWithReferenceRequestBuilder {
        Reference: Graph.IUserReferenceRequestBuilder;
    }
    interface Location {
        AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
        Address: Graph.PhysicalAddress;
        DisplayName: string;
    }
    interface MailFolder extends Graph.Entity {
        ChildFolderCount: number;
        ChildFolders: Graph.MailFolder[];
        DisplayName: string;
        Messages: Graph.Message[];
        ParentFolderId: string;
        TotalItemCount: number;
        UnreadItemCount: number;
    }
    interface Message extends Graph.OutlookItem {
        Attachments: Graph.Attachment[];
        BccRecipients: Graph.Recipient[];
        Body: Graph.ItemBody;
        BodyPreview: string;
        CcRecipients: Graph.Recipient[];
        ConversationId: string;
        Extensions: Graph.Extension[];
        From: Graph.Recipient;
        HasAttachments: boolean;
        Importance: Graph.Importance;
        InferenceClassification: Graph.InferenceClassificationType;
        InternetMessageId: string;
        IsDeliveryReceiptRequested: boolean;
        IsDraft: boolean;
        IsRead: boolean;
        IsReadReceiptRequested: boolean;
        ParentFolderId: string;
        ReceivedDateTime: Date;
        ReplyTo: Graph.Recipient[];
        Sender: Graph.Recipient;
        SentDateTime: Date;
        Subject: string;
        ToRecipients: Graph.Recipient[];
        UniqueBody: Graph.ItemBody;
        WebLink: string;
    }
    interface Option {
        Name: string;
        Value: string;
    }
    interface OutlookItem extends Graph.Entity {
        Categories: string[];
        ChangeKey: string;
        CreatedDateTime: Date;
        LastModifiedDateTime: Date;
    }
    interface Package {
        AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
        Type: string;
    }
    interface PasswordProfile {
        AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
        ForceChangePasswordNextSignIn: boolean;
        Password: string;
    }
    interface PatternedRecurrence {
        AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
        Pattern: Graph.RecurrencePattern;
        Range: Graph.RecurrenceRange;
    }
    interface Permission extends Graph.Entity {
        GrantedTo: Graph.IdentitySet;
        InheritedFrom: Graph.ItemReference;
        Invitation: Graph.SharingInvitation;
        Link: Graph.SharingLink;
        Roles: string[];
        ShareId: string;
    }
    interface Photo {
        AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
        CameraMake: string;
        CameraModel: string;
        ExposureDenominator: number;
        ExposureNumerator: number;
        FNumber: number;
        FocalLength: number;
        Iso: number;
        TakenDateTime: Date;
    }
    interface PhysicalAddress {
        AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
        City: string;
        CountryOrRegion: string;
        PostalCode: string;
        State: string;
        Street: string;
    }
    interface ProfilePhoto extends Graph.Entity {
        Height: number;
        Width: number;
    }
    interface ProvisionedPlan {
        AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
        CapabilityStatus: string;
        ProvisioningStatus: string;
        Service: string;
    }
    interface QueryOption extends Graph.Option {
    }
    interface Quota {
        AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
        Deleted: number;
        Remaining: number;
        State: string;
        Total: number;
        Used: number;
    }
    interface Recipient {
        AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
        EmailAddress: Graph.EmailAddress;
    }
    interface RecurrencePattern {
        AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
        DayOfMonth: number;
        DaysOfWeek: Graph.DayOfWeek[];
        FirstDayOfWeek: Graph.DayOfWeek;
        Index: Graph.WeekIndex;
        Interval: number;
        Month: number;
        Type: Graph.RecurrencePatternType;
    }
    interface RecurrenceRange {
        AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
        EndDate: Graph.Date;
        NumberOfOccurrences: number;
        RecurrenceTimeZone: string;
        StartDate: Graph.Date;
        Type: Graph.RecurrenceRangeType;
    }
    interface RemoteItem {
        AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
        File: Graph.File;
        FileSystemInfo: Graph.FileSystemInfo;
        Folder: Graph.Folder;
        Id: string;
        Name: string;
        ParentReference: Graph.ItemReference;
        Size: number;
    }
    interface ResponseStatus {
        AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
        Response: Graph.ResponseType;
        Time: Date;
    }
    interface SearchResult {
        AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
        OnClickTelemetryUrl: string;
    }
    interface Shared {
        AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
        Owner: Graph.IdentitySet;
        Scope: string;
    }
    interface SharingInvitation {
        AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
        Email: string;
        InvitedBy: Graph.IdentitySet;
        RedeemedBy: string;
        SignInRequired: boolean;
    }
    interface SharingLink {
        AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
        Application: Graph.Identity;
        Type: string;
        WebUrl: string;
    }
    interface SpecialFolder {
        AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
        Name: string;
    }
    interface Thumbnail {
        AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
        Content: System.IO.Stream;
        Height: number;
        Url: string;
        Width: number;
    }
    interface ThumbnailSet extends Graph.Entity {
        Item: Graph.Thumbnail;
        Large: Graph.Thumbnail;
        Medium: Graph.Thumbnail;
        Small: Graph.Thumbnail;
        Source: Graph.Thumbnail;
    }
    interface User extends Graph.DirectoryObject {
        AboutMe: string;
        AccountEnabled: boolean;
        AssignedLicenses: Graph.AssignedLicense[];
        AssignedPlans: Graph.AssignedPlan[];
        Birthday: Date;
        BusinessPhones: string[];
        Calendar: Graph.Calendar;
        CalendarGroups: Graph.CalendarGroup[];
        Calendars: Graph.Calendar[];
        CalendarView: Graph.Event[];
        City: string;
        CompanyName: string;
        ContactFolders: Graph.ContactFolder[];
        Contacts: Graph.Contact[];
        Country: string;
        CreatedObjects: Graph.DirectoryObject[];
        Department: string;
        DirectReports: Graph.DirectoryObject[];
        DisplayName: string;
        Drive: Graph.Drive;
        Events: Graph.Event[];
        GivenName: string;
        HireDate: Date;
        InferenceClassification: Graph.InferenceClassification;
        Interests: string[];
        JobTitle: string;
        Mail: string;
        MailFolders: Graph.MailFolder[];
        MailNickname: string;
        Manager: Graph.DirectoryObject;
        MemberOf: Graph.DirectoryObject[];
        Messages: Graph.Message[];
        MobilePhone: string;
        MySite: string;
        OfficeLocation: string;
        OnPremisesImmutableId: string;
        OnPremisesLastSyncDateTime: Date;
        OnPremisesSecurityIdentifier: string;
        OnPremisesSyncEnabled: boolean;
        OwnedDevices: Graph.DirectoryObject[];
        OwnedObjects: Graph.DirectoryObject[];
        PasswordPolicies: string;
        PasswordProfile: Graph.PasswordProfile;
        PastProjects: string[];
        Photo: Graph.ProfilePhoto;
        PostalCode: string;
        PreferredLanguage: string;
        PreferredName: string;
        ProvisionedPlans: Graph.ProvisionedPlan[];
        ProxyAddresses: string[];
        RegisteredDevices: Graph.DirectoryObject[];
        Responsibilities: string[];
        Schools: string[];
        Skills: string[];
        State: string;
        StreetAddress: string;
        Surname: string;
        UsageLocation: string;
        UserPrincipalName: string;
        UserType: string;
    }
    interface UserRequest extends Graph.BaseRequest {
    }
    interface UserRequestBuilder extends Graph.DirectoryObjectRequestBuilder {
        Calendar: Graph.ICalendarRequestBuilder;
        CalendarGroups: Graph.IUserCalendarGroupsCollectionRequestBuilder;
        Calendars: Graph.IUserCalendarsCollectionRequestBuilder;
        CalendarView: Graph.IUserCalendarViewCollectionRequestBuilder;
        ContactFolders: Graph.IUserContactFoldersCollectionRequestBuilder;
        Contacts: Graph.IUserContactsCollectionRequestBuilder;
        CreatedObjects: Graph.IUserCreatedObjectsCollectionWithReferencesRequestBuilder;
        DirectReports: Graph.IUserDirectReportsCollectionWithReferencesRequestBuilder;
        Drive: Graph.IDriveRequestBuilder;
        Events: Graph.IUserEventsCollectionRequestBuilder;
        InferenceClassification: Graph.IInferenceClassificationRequestBuilder;
        MailFolders: Graph.IUserMailFoldersCollectionRequestBuilder;
        Manager: Graph.IDirectoryObjectWithReferenceRequestBuilder;
        MemberOf: Graph.IUserMemberOfCollectionWithReferencesRequestBuilder;
        Messages: Graph.IUserMessagesCollectionRequestBuilder;
        OwnedDevices: Graph.IUserOwnedDevicesCollectionWithReferencesRequestBuilder;
        OwnedObjects: Graph.IUserOwnedObjectsCollectionWithReferencesRequestBuilder;
        Photo: Graph.IProfilePhotoRequestBuilder;
        RegisteredDevices: Graph.IUserRegisteredDevicesCollectionWithReferencesRequestBuilder;
    }
    interface Video {
        AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
        Bitrate: number;
        Duration: number;
        Height: number;
        Width: number;
    }
}

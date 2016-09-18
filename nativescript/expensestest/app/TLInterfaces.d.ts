
 
 

 


declare module Microsoft.Graph {
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
	interface Attachment extends Microsoft.Graph.Entity {
		ContentType: string;
		IsInline: boolean;
		LastModifiedDateTime: Date;
		Name: string;
		Size: number;
	}
	interface Attendee extends Microsoft.Graph.Recipient {
		Status: Microsoft.Graph.ResponseStatus;
		Type: Microsoft.Graph.AttendeeType;
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
		AuthenticationProvider: Microsoft.Graph.IAuthenticationProvider;
		BaseUrl: string;
		HttpProvider: Microsoft.Graph.IHttpProvider;
	}
	interface BaseRequest {
		Client: Microsoft.Graph.IBaseClient;
		ContentType: string;
		Headers: Microsoft.Graph.HeaderOption[];
		Method: string;
		QueryOptions: Microsoft.Graph.QueryOption[];
		RequestUrl: string;
	}
	interface BaseRequestBuilder {
		Client: Microsoft.Graph.IBaseClient;
		RequestUrl: string;
	}
	interface Calendar extends Microsoft.Graph.Entity {
		CalendarView: Microsoft.Graph.Event[];
		ChangeKey: string;
		Color: Microsoft.Graph.CalendarColor;
		Events: Microsoft.Graph.Event[];
		Name: string;
	}
	interface CalendarGroup extends Microsoft.Graph.Entity {
		Calendars: Microsoft.Graph.Calendar[];
		ChangeKey: string;
		ClassId: System.Guid;
		Name: string;
	}
	interface Contact extends Microsoft.Graph.OutlookItem {
		AssistantName: string;
		Birthday: Date;
		BusinessAddress: Microsoft.Graph.PhysicalAddress;
		BusinessHomePage: string;
		BusinessPhones: string[];
		Children: string[];
		CompanyName: string;
		Department: string;
		DisplayName: string;
		EmailAddresses: Microsoft.Graph.EmailAddress[];
		Extensions: Microsoft.Graph.Extension[];
		FileAs: string;
		Generation: string;
		GivenName: string;
		HomeAddress: Microsoft.Graph.PhysicalAddress;
		HomePhones: string[];
		ImAddresses: string[];
		Initials: string;
		JobTitle: string;
		Manager: string;
		MiddleName: string;
		MobilePhone: string;
		NickName: string;
		OfficeLocation: string;
		OtherAddress: Microsoft.Graph.PhysicalAddress;
		ParentFolderId: string;
		PersonalNotes: string;
		Photo: Microsoft.Graph.ProfilePhoto;
		Profession: string;
		SpouseName: string;
		Surname: string;
		Title: string;
		YomiCompanyName: string;
		YomiGivenName: string;
		YomiSurname: string;
	}
	interface ContactFolder extends Microsoft.Graph.Entity {
		ChildFolders: Microsoft.Graph.ContactFolder[];
		Contacts: Microsoft.Graph.Contact[];
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
	interface DirectoryObject extends Microsoft.Graph.Entity {
	}
	interface DirectoryObjectRequestBuilder extends Microsoft.Graph.EntityRequestBuilder {
	}
	interface Drive extends Microsoft.Graph.Entity {
		DriveType: string;
		Items: Microsoft.Graph.DriveItem[];
		Owner: Microsoft.Graph.IdentitySet;
		Quota: Microsoft.Graph.Quota;
		Root: Microsoft.Graph.DriveItem;
		Special: Microsoft.Graph.DriveItem[];
	}
	interface DriveItem extends Microsoft.Graph.Entity {
		Audio: Microsoft.Graph.Audio;
		Children: Microsoft.Graph.DriveItem[];
		Content: System.IO.Stream;
		CreatedBy: Microsoft.Graph.IdentitySet;
		CreatedByUser: Microsoft.Graph.User;
		CreatedDateTime: Date;
		CTag: string;
		Deleted: Microsoft.Graph.Deleted;
		Description: string;
		ETag: string;
		File: Microsoft.Graph.File;
		FileSystemInfo: Microsoft.Graph.FileSystemInfo;
		Folder: Microsoft.Graph.Folder;
		Image: Microsoft.Graph.Image;
		LastModifiedBy: Microsoft.Graph.IdentitySet;
		LastModifiedByUser: Microsoft.Graph.User;
		LastModifiedDateTime: Date;
		Location: Microsoft.Graph.GeoCoordinates;
		Name: string;
		Package: Microsoft.Graph.Package;
		ParentReference: Microsoft.Graph.ItemReference;
		Permissions: Microsoft.Graph.Permission[];
		Photo: Microsoft.Graph.Photo;
		RemoteItem: Microsoft.Graph.RemoteItem;
		SearchResult: Microsoft.Graph.SearchResult;
		Shared: Microsoft.Graph.Shared;
		Size: number;
		SpecialFolder: Microsoft.Graph.SpecialFolder;
		Thumbnails: Microsoft.Graph.ThumbnailSet[];
		Video: Microsoft.Graph.Video;
		WebDavUrl: string;
		WebUrl: string;
	}
	interface DriveItemRequest extends Microsoft.Graph.BaseRequest {
	}
	interface DriveItemRequestBuilder extends Microsoft.Graph.EntityRequestBuilder {
		Children: Microsoft.Graph.IDriveItemChildrenCollectionRequestBuilder;
		Content: Microsoft.Graph.IDriveItemContentRequestBuilder;
		CreatedByUser: Microsoft.Graph.IUserWithReferenceRequestBuilder;
		LastModifiedByUser: Microsoft.Graph.IUserWithReferenceRequestBuilder;
		Permissions: Microsoft.Graph.IDriveItemPermissionsCollectionRequestBuilder;
		Thumbnails: Microsoft.Graph.IDriveItemThumbnailsCollectionRequestBuilder;
	}
	interface DriveItemsCollectionRequest extends Microsoft.Graph.BaseRequest {
	}
	interface DriveItemsCollectionRequestBuilder extends Microsoft.Graph.BaseRequestBuilder {
		Item: Microsoft.Graph.IDriveItemRequestBuilder;
	}
	interface DriveItemsCollectionResponse {
		AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
		Value: Microsoft.Graph.DriveItem[];
	}
	interface DriveRequest extends Microsoft.Graph.BaseRequest {
	}
	interface DriveRequestBuilder extends Microsoft.Graph.EntityRequestBuilder {
		Items: Microsoft.Graph.IDriveItemsCollectionRequestBuilder;
		Root: Microsoft.Graph.IDriveItemRequestBuilder;
		Special: Microsoft.Graph.IDriveSpecialCollectionRequestBuilder;
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
	interface EntityRequestBuilder extends Microsoft.Graph.BaseRequestBuilder {
	}
	interface Event extends Microsoft.Graph.OutlookItem {
		Attachments: Microsoft.Graph.Attachment[];
		Attendees: Microsoft.Graph.Attendee[];
		Body: Microsoft.Graph.ItemBody;
		BodyPreview: string;
		Calendar: Microsoft.Graph.Calendar;
		End: Microsoft.Graph.DateTimeTimeZone;
		Extensions: Microsoft.Graph.Extension[];
		HasAttachments: boolean;
		ICalUId: string;
		Importance: Microsoft.Graph.Importance;
		Instances: Microsoft.Graph.Event[];
		IsAllDay: boolean;
		IsCancelled: boolean;
		IsOrganizer: boolean;
		IsReminderOn: boolean;
		Location: Microsoft.Graph.Location;
		Organizer: Microsoft.Graph.Recipient;
		OriginalEndTimeZone: string;
		OriginalStart: Date;
		OriginalStartTimeZone: string;
		Recurrence: Microsoft.Graph.PatternedRecurrence;
		ReminderMinutesBeforeStart: number;
		ResponseRequested: boolean;
		ResponseStatus: Microsoft.Graph.ResponseStatus;
		Sensitivity: Microsoft.Graph.Sensitivity;
		SeriesMasterId: string;
		ShowAs: Microsoft.Graph.FreeBusyStatus;
		Start: Microsoft.Graph.DateTimeTimeZone;
		Subject: string;
		Type: Microsoft.Graph.EventType;
		WebLink: string;
	}
	interface Extension extends Microsoft.Graph.Entity {
	}
	interface File {
		AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
		Hashes: Microsoft.Graph.Hashes;
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
	interface GraphServiceClient extends Microsoft.Graph.BaseClient {
		Devices: Microsoft.Graph.IGraphServiceDevicesCollectionRequestBuilder;
		DirectoryObjects: Microsoft.Graph.IGraphServiceDirectoryObjectsCollectionRequestBuilder;
		DirectoryRoles: Microsoft.Graph.IGraphServiceDirectoryRolesCollectionRequestBuilder;
		DirectoryRoleTemplates: Microsoft.Graph.IGraphServiceDirectoryRoleTemplatesCollectionRequestBuilder;
		Drive: Microsoft.Graph.IDriveRequestBuilder;
		Drives: Microsoft.Graph.IGraphServiceDrivesCollectionRequestBuilder;
		Groups: Microsoft.Graph.IGraphServiceGroupsCollectionRequestBuilder;
		Me: Microsoft.Graph.IUserRequestBuilder;
		Organization: Microsoft.Graph.IGraphServiceOrganizationCollectionRequestBuilder;
		SubscribedSkus: Microsoft.Graph.IGraphServiceSubscribedSkusCollectionRequestBuilder;
		Subscriptions: Microsoft.Graph.IGraphServiceSubscriptionsCollectionRequestBuilder;
		Users: Microsoft.Graph.IGraphServiceUsersCollectionRequestBuilder;
	}
	interface Hashes {
		AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
		Crc32Hash: string;
		Sha1Hash: string;
	}
	interface HeaderOption extends Microsoft.Graph.Option {
	}
	interface IAttachmentRequestBuilder {
	}
	interface IAuthenticationProvider {
		AuthenticateRequest(request: any);
	}
	interface IBaseClient {
		AuthenticationProvider: Microsoft.Graph.IAuthenticationProvider;
		BaseUrl: string;
		HttpProvider: Microsoft.Graph.IHttpProvider;
	}
	interface ICalendarCalendarViewCollectionRequestBuilder {
		Item: Microsoft.Graph.IEventRequestBuilder;
	}
	interface ICalendarEventsCollectionRequestBuilder {
		Item: Microsoft.Graph.IEventRequestBuilder;
	}
	interface ICalendarGroupCalendarsCollectionRequestBuilder {
		Item: Microsoft.Graph.ICalendarRequestBuilder;
	}
	interface ICalendarGroupRequestBuilder {
		Calendars: Microsoft.Graph.ICalendarGroupCalendarsCollectionRequestBuilder;
	}
	interface ICalendarRequestBuilder {
		CalendarView: Microsoft.Graph.ICalendarCalendarViewCollectionRequestBuilder;
		Events: Microsoft.Graph.ICalendarEventsCollectionRequestBuilder;
	}
	interface IContactExtensionsCollectionRequestBuilder {
		Item: Microsoft.Graph.IExtensionRequestBuilder;
	}
	interface IContactFolderChildFoldersCollectionRequestBuilder {
		Item: Microsoft.Graph.IContactFolderRequestBuilder;
	}
	interface IContactFolderContactsCollectionRequestBuilder {
		Item: Microsoft.Graph.IContactRequestBuilder;
	}
	interface IContactFolderRequestBuilder {
		ChildFolders: Microsoft.Graph.IContactFolderChildFoldersCollectionRequestBuilder;
		Contacts: Microsoft.Graph.IContactFolderContactsCollectionRequestBuilder;
	}
	interface IContactRequestBuilder {
		Extensions: Microsoft.Graph.IContactExtensionsCollectionRequestBuilder;
		Photo: Microsoft.Graph.IProfilePhotoRequestBuilder;
	}
	interface IConversationRequestBuilder {
		Threads: Microsoft.Graph.IConversationThreadsCollectionRequestBuilder;
	}
	interface IConversationThreadPostsCollectionRequestBuilder {
		Item: Microsoft.Graph.IPostRequestBuilder;
	}
	interface IConversationThreadRequestBuilder {
		Posts: Microsoft.Graph.IConversationThreadPostsCollectionRequestBuilder;
	}
	interface IConversationThreadsCollectionRequestBuilder {
		Item: Microsoft.Graph.IConversationThreadRequestBuilder;
	}
	interface Identity {
		AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
		DisplayName: string;
		Id: string;
	}
	interface IdentitySet {
		AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
		Application: Microsoft.Graph.Identity;
		Device: Microsoft.Graph.Identity;
		User: Microsoft.Graph.Identity;
	}
	interface IDeviceRegisteredOwnersCollectionReferencesRequestBuilder {
	}
	interface IDeviceRegisteredOwnersCollectionWithReferencesRequestBuilder {
		Item: Microsoft.Graph.IDirectoryObjectWithReferenceRequestBuilder;
		References: Microsoft.Graph.IDeviceRegisteredOwnersCollectionReferencesRequestBuilder;
	}
	interface IDeviceRegisteredUsersCollectionReferencesRequestBuilder {
	}
	interface IDeviceRegisteredUsersCollectionWithReferencesRequestBuilder {
		Item: Microsoft.Graph.IDirectoryObjectWithReferenceRequestBuilder;
		References: Microsoft.Graph.IDeviceRegisteredUsersCollectionReferencesRequestBuilder;
	}
	interface IDeviceRequestBuilder {
		RegisteredOwners: Microsoft.Graph.IDeviceRegisteredOwnersCollectionWithReferencesRequestBuilder;
		RegisteredUsers: Microsoft.Graph.IDeviceRegisteredUsersCollectionWithReferencesRequestBuilder;
	}
	interface IDirectoryObjectReferenceRequestBuilder {
	}
	interface IDirectoryObjectRequestBuilder {
	}
	interface IDirectoryObjectWithReferenceRequestBuilder {
		Reference: Microsoft.Graph.IDirectoryObjectReferenceRequestBuilder;
	}
	interface IDirectoryRoleMembersCollectionReferencesRequestBuilder {
	}
	interface IDirectoryRoleMembersCollectionWithReferencesRequestBuilder {
		Item: Microsoft.Graph.IDirectoryObjectWithReferenceRequestBuilder;
		References: Microsoft.Graph.IDirectoryRoleMembersCollectionReferencesRequestBuilder;
	}
	interface IDirectoryRoleRequestBuilder {
		Members: Microsoft.Graph.IDirectoryRoleMembersCollectionWithReferencesRequestBuilder;
	}
	interface IDirectoryRoleTemplateRequestBuilder {
	}
	interface IDriveItemChildrenCollectionRequestBuilder {
		//Item: Microsoft.Graph.IDriveItemRequestBuilder;
	}
	interface IDriveItemContentRequestBuilder {
	}
	interface IDriveItemPermissionsCollectionRequestBuilder {
		Item: Microsoft.Graph.IPermissionRequestBuilder;
	}
	interface IDriveItemRequestBuilder {
		Children: Microsoft.Graph.IDriveItemChildrenCollectionRequestBuilder;
		Content: Microsoft.Graph.IDriveItemContentRequestBuilder;
		CreatedByUser: Microsoft.Graph.IUserWithReferenceRequestBuilder;
		LastModifiedByUser: Microsoft.Graph.IUserWithReferenceRequestBuilder;
		Permissions: Microsoft.Graph.IDriveItemPermissionsCollectionRequestBuilder;
		Thumbnails: Microsoft.Graph.IDriveItemThumbnailsCollectionRequestBuilder;
	}
	interface IDriveItemsCollectionRequestBuilder {
		//Item: Microsoft.Graph.IDriveItemRequestBuilder;
	}
	interface IDriveItemThumbnailsCollectionRequestBuilder {
		Item: Microsoft.Graph.IThumbnailSetRequestBuilder;
	}
	interface IDriveRequestBuilder {
		Items: Microsoft.Graph.IDriveItemsCollectionRequestBuilder;
		Root: Microsoft.Graph.IDriveItemRequestBuilder;
		Special: Microsoft.Graph.IDriveSpecialCollectionRequestBuilder;
	}
	interface IDriveSpecialCollectionRequestBuilder {
		AppRoot: Microsoft.Graph.IDriveItemRequestBuilder;
		Item: Microsoft.Graph.IDriveItemRequestBuilder;
	}
	interface IEventAttachmentsCollectionRequestBuilder {
		Item: Microsoft.Graph.IAttachmentRequestBuilder;
	}
	interface IEventExtensionsCollectionRequestBuilder {
		Item: Microsoft.Graph.IExtensionRequestBuilder;
	}
	interface IEventInstancesCollectionRequestBuilder {
		Item: Microsoft.Graph.IEventRequestBuilder;
	}
	interface IEventRequestBuilder {
		Attachments: Microsoft.Graph.IEventAttachmentsCollectionRequestBuilder;
		Calendar: Microsoft.Graph.ICalendarRequestBuilder;
		Extensions: Microsoft.Graph.IEventExtensionsCollectionRequestBuilder;
		Instances: Microsoft.Graph.IEventInstancesCollectionRequestBuilder;
	}
	interface IExtensionRequestBuilder {
	}
	interface IGraphServiceDevicesCollectionRequestBuilder {
		Item: Microsoft.Graph.IDeviceRequestBuilder;
	}
	interface IGraphServiceDirectoryObjectsCollectionRequestBuilder {
		Item: Microsoft.Graph.IDirectoryObjectRequestBuilder;
	}
	interface IGraphServiceDirectoryRolesCollectionRequestBuilder {
		Item: Microsoft.Graph.IDirectoryRoleRequestBuilder;
	}
	interface IGraphServiceDirectoryRoleTemplatesCollectionRequestBuilder {
		Item: Microsoft.Graph.IDirectoryRoleTemplateRequestBuilder;
	}
	interface IGraphServiceDrivesCollectionRequestBuilder {
		Item: Microsoft.Graph.IDriveRequestBuilder;
	}
	interface IGraphServiceGroupsCollectionRequestBuilder {
		Item: Microsoft.Graph.IGroupRequestBuilder;
	}
	interface IGraphServiceOrganizationCollectionRequestBuilder {
		Item: Microsoft.Graph.IOrganizationRequestBuilder;
	}
	interface IGraphServiceSubscribedSkusCollectionRequestBuilder {
		Item: Microsoft.Graph.ISubscribedSkuRequestBuilder;
	}
	interface IGraphServiceSubscriptionsCollectionRequestBuilder {
		Item: Microsoft.Graph.ISubscriptionRequestBuilder;
	}
	interface IGraphServiceUsersCollectionRequestBuilder {
		Item: Microsoft.Graph.IUserRequestBuilder;
	}
	interface IGroupAcceptedSendersCollectionRequestBuilder {
		Item: Microsoft.Graph.IDirectoryObjectRequestBuilder;
	}
	interface IGroupCalendarViewCollectionRequestBuilder {
		Item: Microsoft.Graph.IEventRequestBuilder;
	}
	interface IGroupConversationsCollectionRequestBuilder {
		Item: Microsoft.Graph.IConversationRequestBuilder;
	}
	interface IGroupEventsCollectionRequestBuilder {
		Item: Microsoft.Graph.IEventRequestBuilder;
	}
	interface IGroupMemberOfCollectionReferencesRequestBuilder {
	}
	interface IGroupMemberOfCollectionWithReferencesRequestBuilder {
		Item: Microsoft.Graph.IDirectoryObjectWithReferenceRequestBuilder;
		References: Microsoft.Graph.IGroupMemberOfCollectionReferencesRequestBuilder;
	}
	interface IGroupMembersCollectionReferencesRequestBuilder {
	}
	interface IGroupMembersCollectionWithReferencesRequestBuilder {
		Item: Microsoft.Graph.IDirectoryObjectWithReferenceRequestBuilder;
		References: Microsoft.Graph.IGroupMembersCollectionReferencesRequestBuilder;
	}
	interface IGroupOwnersCollectionReferencesRequestBuilder {
	}
	interface IGroupOwnersCollectionWithReferencesRequestBuilder {
		Item: Microsoft.Graph.IDirectoryObjectWithReferenceRequestBuilder;
		References: Microsoft.Graph.IGroupOwnersCollectionReferencesRequestBuilder;
	}
	interface IGroupRejectedSendersCollectionRequestBuilder {
		Item: Microsoft.Graph.IDirectoryObjectRequestBuilder;
	}
	interface IGroupRequestBuilder {
		AcceptedSenders: Microsoft.Graph.IGroupAcceptedSendersCollectionRequestBuilder;
		Calendar: Microsoft.Graph.ICalendarRequestBuilder;
		CalendarView: Microsoft.Graph.IGroupCalendarViewCollectionRequestBuilder;
		Conversations: Microsoft.Graph.IGroupConversationsCollectionRequestBuilder;
		CreatedOnBehalfOf: Microsoft.Graph.IDirectoryObjectWithReferenceRequestBuilder;
		Drive: Microsoft.Graph.IDriveRequestBuilder;
		Events: Microsoft.Graph.IGroupEventsCollectionRequestBuilder;
		MemberOf: Microsoft.Graph.IGroupMemberOfCollectionWithReferencesRequestBuilder;
		Members: Microsoft.Graph.IGroupMembersCollectionWithReferencesRequestBuilder;
		Owners: Microsoft.Graph.IGroupOwnersCollectionWithReferencesRequestBuilder;
		Photo: Microsoft.Graph.IProfilePhotoRequestBuilder;
		RejectedSenders: Microsoft.Graph.IGroupRejectedSendersCollectionRequestBuilder;
		Threads: Microsoft.Graph.IGroupThreadsCollectionRequestBuilder;
	}
	interface IGroupThreadsCollectionRequestBuilder {
		Item: Microsoft.Graph.IConversationThreadRequestBuilder;
	}
	interface IHttpProvider {
		Serializer: Microsoft.Graph.ISerializer;
	}
	interface IInferenceClassificationOverrideRequestBuilder {
	}
	interface IInferenceClassificationOverridesCollectionRequestBuilder {
		Item: Microsoft.Graph.IInferenceClassificationOverrideRequestBuilder;
	}
	interface IInferenceClassificationRequestBuilder {
		Overrides: Microsoft.Graph.IInferenceClassificationOverridesCollectionRequestBuilder;
	}
	interface Image {
		AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
		Height: number;
		Width: number;
	}
	interface IMailFolderChildFoldersCollectionRequestBuilder {
		Item: Microsoft.Graph.IMailFolderRequestBuilder;
	}
	interface IMailFolderMessagesCollectionRequestBuilder {
		Item: Microsoft.Graph.IMessageRequestBuilder;
	}
	interface IMailFolderRequestBuilder {
		ChildFolders: Microsoft.Graph.IMailFolderChildFoldersCollectionRequestBuilder;
		Messages: Microsoft.Graph.IMailFolderMessagesCollectionRequestBuilder;
	}
	interface IMessageAttachmentsCollectionRequestBuilder {
		Item: Microsoft.Graph.IAttachmentRequestBuilder;
	}
	interface IMessageExtensionsCollectionRequestBuilder {
		Item: Microsoft.Graph.IExtensionRequestBuilder;
	}
	interface IMessageRequestBuilder {
		Attachments: Microsoft.Graph.IMessageAttachmentsCollectionRequestBuilder;
		Extensions: Microsoft.Graph.IMessageExtensionsCollectionRequestBuilder;
	}
	interface InferenceClassification extends Microsoft.Graph.Entity {
		Overrides: Microsoft.Graph.InferenceClassificationOverride[];
	}
	interface InferenceClassificationOverride extends Microsoft.Graph.Entity {
		ClassifyAs: Microsoft.Graph.InferenceClassificationType;
		SenderEmailAddress: Microsoft.Graph.EmailAddress;
	}
	interface IOrganizationRequestBuilder {
	}
	interface IPermissionRequestBuilder {
	}
	interface IPostAttachmentsCollectionRequestBuilder {
		Item: Microsoft.Graph.IAttachmentRequestBuilder;
	}
	interface IPostExtensionsCollectionRequestBuilder {
		Item: Microsoft.Graph.IExtensionRequestBuilder;
	}
	interface IPostRequestBuilder {
		Attachments: Microsoft.Graph.IPostAttachmentsCollectionRequestBuilder;
		Extensions: Microsoft.Graph.IPostExtensionsCollectionRequestBuilder;
		InReplyTo: Microsoft.Graph.IPostRequestBuilder;
	}
	interface IProfilePhotoContentRequestBuilder {
	}
	interface IProfilePhotoRequestBuilder {
		Content: Microsoft.Graph.IProfilePhotoContentRequestBuilder;
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
		ContentType: Microsoft.Graph.BodyType;
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
		Content: Microsoft.Graph.IThumbnailContentRequestBuilder;
	}
	interface IThumbnailSetRequestBuilder {
		Item: Microsoft.Graph.IThumbnailRequestBuilder;
	}
	interface IUserCalendarGroupsCollectionRequestBuilder {
		Item: Microsoft.Graph.ICalendarGroupRequestBuilder;
	}
	interface IUserCalendarsCollectionRequestBuilder {
		Item: Microsoft.Graph.ICalendarRequestBuilder;
	}
	interface IUserCalendarViewCollectionRequestBuilder {
		Item: Microsoft.Graph.IEventRequestBuilder;
	}
	interface IUserContactFoldersCollectionRequestBuilder {
		Item: Microsoft.Graph.IContactFolderRequestBuilder;
	}
	interface IUserContactsCollectionRequestBuilder {
		Item: Microsoft.Graph.IContactRequestBuilder;
	}
	interface IUserCreatedObjectsCollectionReferencesRequestBuilder {
	}
	interface IUserCreatedObjectsCollectionWithReferencesRequestBuilder {
		Item: Microsoft.Graph.IDirectoryObjectWithReferenceRequestBuilder;
		References: Microsoft.Graph.IUserCreatedObjectsCollectionReferencesRequestBuilder;
	}
	interface IUserDirectReportsCollectionReferencesRequestBuilder {
	}
	interface IUserDirectReportsCollectionWithReferencesRequestBuilder {
		Item: Microsoft.Graph.IDirectoryObjectWithReferenceRequestBuilder;
		References: Microsoft.Graph.IUserDirectReportsCollectionReferencesRequestBuilder;
	}
	interface IUserEventsCollectionRequestBuilder {
		Item: Microsoft.Graph.IEventRequestBuilder;
	}
	interface IUserMailFoldersCollectionRequestBuilder {
		DeletedItems: Microsoft.Graph.IMailFolderRequestBuilder;
		Drafts: Microsoft.Graph.IMailFolderRequestBuilder;
		Inbox: Microsoft.Graph.IMailFolderRequestBuilder;
		Item: Microsoft.Graph.IMailFolderRequestBuilder;
		SentItems: Microsoft.Graph.IMailFolderRequestBuilder;
	}
	interface IUserMemberOfCollectionReferencesRequestBuilder {
	}
	interface IUserMemberOfCollectionWithReferencesRequestBuilder {
		Item: Microsoft.Graph.IDirectoryObjectWithReferenceRequestBuilder;
		References: Microsoft.Graph.IUserMemberOfCollectionReferencesRequestBuilder;
	}
	interface IUserMessagesCollectionRequestBuilder {
		Item: Microsoft.Graph.IMessageRequestBuilder;
	}
	interface IUserOwnedDevicesCollectionReferencesRequestBuilder {
	}
	interface IUserOwnedDevicesCollectionWithReferencesRequestBuilder {
		Item: Microsoft.Graph.IDirectoryObjectWithReferenceRequestBuilder;
		References: Microsoft.Graph.IUserOwnedDevicesCollectionReferencesRequestBuilder;
	}
	interface IUserOwnedObjectsCollectionReferencesRequestBuilder {
	}
	interface IUserOwnedObjectsCollectionWithReferencesRequestBuilder {
		Item: Microsoft.Graph.IDirectoryObjectWithReferenceRequestBuilder;
		References: Microsoft.Graph.IUserOwnedObjectsCollectionReferencesRequestBuilder;
	}
	interface IUserReferenceRequestBuilder {
	}
	interface IUserRegisteredDevicesCollectionReferencesRequestBuilder {
	}
	interface IUserRegisteredDevicesCollectionWithReferencesRequestBuilder {
		Item: Microsoft.Graph.IDirectoryObjectWithReferenceRequestBuilder;
		References: Microsoft.Graph.IUserRegisteredDevicesCollectionReferencesRequestBuilder;
	}
	interface IUserRequestBuilder {
		Calendar: Microsoft.Graph.ICalendarRequestBuilder;
		CalendarGroups: Microsoft.Graph.IUserCalendarGroupsCollectionRequestBuilder;
		Calendars: Microsoft.Graph.IUserCalendarsCollectionRequestBuilder;
		CalendarView: Microsoft.Graph.IUserCalendarViewCollectionRequestBuilder;
		ContactFolders: Microsoft.Graph.IUserContactFoldersCollectionRequestBuilder;
		Contacts: Microsoft.Graph.IUserContactsCollectionRequestBuilder;
		CreatedObjects: Microsoft.Graph.IUserCreatedObjectsCollectionWithReferencesRequestBuilder;
		DirectReports: Microsoft.Graph.IUserDirectReportsCollectionWithReferencesRequestBuilder;
		Drive: Microsoft.Graph.IDriveRequestBuilder;
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
	}
	interface IUserWithReferenceRequestBuilder {
		Reference: Microsoft.Graph.IUserReferenceRequestBuilder;
	}
	interface Location {
		AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
		Address: Microsoft.Graph.PhysicalAddress;
		DisplayName: string;
	}
	interface MailFolder extends Microsoft.Graph.Entity {
		ChildFolderCount: number;
		ChildFolders: Microsoft.Graph.MailFolder[];
		DisplayName: string;
		Messages: Microsoft.Graph.Message[];
		ParentFolderId: string;
		TotalItemCount: number;
		UnreadItemCount: number;
	}
	interface Message extends Microsoft.Graph.OutlookItem {
		Attachments: Microsoft.Graph.Attachment[];
		BccRecipients: Microsoft.Graph.Recipient[];
		Body: Microsoft.Graph.ItemBody;
		BodyPreview: string;
		CcRecipients: Microsoft.Graph.Recipient[];
		ConversationId: string;
		Extensions: Microsoft.Graph.Extension[];
		From: Microsoft.Graph.Recipient;
		HasAttachments: boolean;
		Importance: Microsoft.Graph.Importance;
		InferenceClassification: Microsoft.Graph.InferenceClassificationType;
		InternetMessageId: string;
		IsDeliveryReceiptRequested: boolean;
		IsDraft: boolean;
		IsRead: boolean;
		IsReadReceiptRequested: boolean;
		ParentFolderId: string;
		ReceivedDateTime: Date;
		ReplyTo: Microsoft.Graph.Recipient[];
		Sender: Microsoft.Graph.Recipient;
		SentDateTime: Date;
		Subject: string;
		ToRecipients: Microsoft.Graph.Recipient[];
		UniqueBody: Microsoft.Graph.ItemBody;
		WebLink: string;
	}
	interface Option {
		Name: string;
		Value: string;
	}
	interface OutlookItem extends Microsoft.Graph.Entity {
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
		Pattern: Microsoft.Graph.RecurrencePattern;
		Range: Microsoft.Graph.RecurrenceRange;
	}
	interface Permission extends Microsoft.Graph.Entity {
		GrantedTo: Microsoft.Graph.IdentitySet;
		InheritedFrom: Microsoft.Graph.ItemReference;
		Invitation: Microsoft.Graph.SharingInvitation;
		Link: Microsoft.Graph.SharingLink;
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
	interface ProfilePhoto extends Microsoft.Graph.Entity {
		Height: number;
		Width: number;
	}
	interface ProvisionedPlan {
		AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
		CapabilityStatus: string;
		ProvisioningStatus: string;
		Service: string;
	}
	interface QueryOption extends Microsoft.Graph.Option {
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
		EmailAddress: Microsoft.Graph.EmailAddress;
	}
	interface RecurrencePattern {
		AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
		DayOfMonth: number;
		DaysOfWeek: Microsoft.Graph.DayOfWeek[];
		FirstDayOfWeek: Microsoft.Graph.DayOfWeek;
		Index: Microsoft.Graph.WeekIndex;
		Interval: number;
		Month: number;
		Type: Microsoft.Graph.RecurrencePatternType;
	}
	interface RecurrenceRange {
		AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
		EndDate: Microsoft.Graph.Date;
		NumberOfOccurrences: number;
		RecurrenceTimeZone: string;
		StartDate: Microsoft.Graph.Date;
		Type: Microsoft.Graph.RecurrenceRangeType;
	}
	interface RemoteItem {
		AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
		File: Microsoft.Graph.File;
		FileSystemInfo: Microsoft.Graph.FileSystemInfo;
		Folder: Microsoft.Graph.Folder;
		Id: string;
		Name: string;
		ParentReference: Microsoft.Graph.ItemReference;
		Size: number;
	}
	interface ResponseStatus {
		AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
		Response: Microsoft.Graph.ResponseType;
		Time: Date;
	}
	interface SearchResult {
		AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
		OnClickTelemetryUrl: string;
	}
	interface Shared {
		AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
		Owner: Microsoft.Graph.IdentitySet;
		Scope: string;
	}
	interface SharingInvitation {
		AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
		Email: string;
		InvitedBy: Microsoft.Graph.IdentitySet;
		RedeemedBy: string;
		SignInRequired: boolean;
	}
	interface SharingLink {
		AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
		Application: Microsoft.Graph.Identity;
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
	interface ThumbnailSet extends Microsoft.Graph.Entity {
		Item: Microsoft.Graph.Thumbnail;
		Large: Microsoft.Graph.Thumbnail;
		Medium: Microsoft.Graph.Thumbnail;
		Small: Microsoft.Graph.Thumbnail;
		Source: Microsoft.Graph.Thumbnail;
	}
	interface User extends Microsoft.Graph.DirectoryObject {
		AboutMe: string;
		AccountEnabled: boolean;
		AssignedLicenses: Microsoft.Graph.AssignedLicense[];
		AssignedPlans: Microsoft.Graph.AssignedPlan[];
		Birthday: Date;
		BusinessPhones: string[];
		Calendar: Microsoft.Graph.Calendar;
		CalendarGroups: Microsoft.Graph.CalendarGroup[];
		Calendars: Microsoft.Graph.Calendar[];
		CalendarView: Microsoft.Graph.Event[];
		City: string;
		CompanyName: string;
		ContactFolders: Microsoft.Graph.ContactFolder[];
		Contacts: Microsoft.Graph.Contact[];
		Country: string;
		CreatedObjects: Microsoft.Graph.DirectoryObject[];
		Department: string;
		DirectReports: Microsoft.Graph.DirectoryObject[];
		DisplayName: string;
		Drive: Microsoft.Graph.Drive;
		Events: Microsoft.Graph.Event[];
		GivenName: string;
		HireDate: Date;
		InferenceClassification: Microsoft.Graph.InferenceClassification;
		Interests: string[];
		JobTitle: string;
		Mail: string;
		MailFolders: Microsoft.Graph.MailFolder[];
		MailNickname: string;
		Manager: Microsoft.Graph.DirectoryObject;
		MemberOf: Microsoft.Graph.DirectoryObject[];
		Messages: Microsoft.Graph.Message[];
		MobilePhone: string;
		MySite: string;
		OfficeLocation: string;
		OnPremisesImmutableId: string;
		OnPremisesLastSyncDateTime: Date;
		OnPremisesSecurityIdentifier: string;
		OnPremisesSyncEnabled: boolean;
		OwnedDevices: Microsoft.Graph.DirectoryObject[];
		OwnedObjects: Microsoft.Graph.DirectoryObject[];
		PasswordPolicies: string;
		PasswordProfile: Microsoft.Graph.PasswordProfile;
		PastProjects: string[];
		Photo: Microsoft.Graph.ProfilePhoto;
		PostalCode: string;
		PreferredLanguage: string;
		PreferredName: string;
		ProvisionedPlans: Microsoft.Graph.ProvisionedPlan[];
		ProxyAddresses: string[];
		RegisteredDevices: Microsoft.Graph.DirectoryObject[];
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
	interface UserRequest extends Microsoft.Graph.BaseRequest {
	}
	interface UserRequestBuilder extends Microsoft.Graph.DirectoryObjectRequestBuilder {
		Calendar: Microsoft.Graph.ICalendarRequestBuilder;
		CalendarGroups: Microsoft.Graph.IUserCalendarGroupsCollectionRequestBuilder;
		Calendars: Microsoft.Graph.IUserCalendarsCollectionRequestBuilder;
		CalendarView: Microsoft.Graph.IUserCalendarViewCollectionRequestBuilder;
		ContactFolders: Microsoft.Graph.IUserContactFoldersCollectionRequestBuilder;
		Contacts: Microsoft.Graph.IUserContactsCollectionRequestBuilder;
		CreatedObjects: Microsoft.Graph.IUserCreatedObjectsCollectionWithReferencesRequestBuilder;
		DirectReports: Microsoft.Graph.IUserDirectReportsCollectionWithReferencesRequestBuilder;
		Drive: Microsoft.Graph.IDriveRequestBuilder;
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
	}
	interface Video {
		AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
		Bitrate: number;
		Duration: number;
		Height: number;
		Width: number;
	}
}
declare module System {
	interface Guid {
	}
	interface MarshalByRefObject {
	}
}
declare module System.Collections.Generic {
	interface KeyValuePair<TKey, TValue> {
		Key: TKey;
		Value: TValue;
	}
}
declare module System.IO {
	interface Stream extends System.MarshalByRefObject {
		CanRead: boolean;
		CanSeek: boolean;
		CanTimeout: boolean;
		CanWrite: boolean;
		Length: number;
		Position: number;
		ReadTimeout: number;
		WriteTimeout: number;
	}
}



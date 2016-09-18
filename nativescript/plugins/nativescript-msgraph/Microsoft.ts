import * as System from './System';

export module Graph {

	 export const enum AttendeeType {
		Required = 0,
		Optional = 1,
		Resource = 2
	}
	 export const enum BodyType {
		Text = 0,
		Html = 1
	}
	 export const enum CalendarColor {
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
		Auto = 10
	}
	 export const enum DayOfWeek {
		Sunday = 0,
		Monday = 1,
		Tuesday = 2,
		Wednesday = 3,
		Thursday = 4,
		Friday = 5,
		Saturday = 6
	}
	 export const enum EventType {
		SingleInstance = 0,
		Occurrence = 1,
		Exception = 2,
		SeriesMaster = 3
	}
	export  const enum FreeBusyStatus {
		Free = 0,
		Tentative = 1,
		Busy = 2,
		Oof = 3,
		WorkingElsewhere = 4,
		Unknown = 5
	}
	 export const enum Importance {
		Low = 0,
		Normal = 1,
		High = 2
	}
	 export const enum InferenceClassificationType {
		Focused = 0,
		Other = 1
	}
	export  const enum RecurrencePatternType {
		Daily = 0,
		Weekly = 1,
		AbsoluteMonthly = 2,
		RelativeMonthly = 3,
		AbsoluteYearly = 4,
		RelativeYearly = 5
	}
	 export const enum RecurrenceRangeType {
		EndDate = 0,
		NoEnd = 1,
		Numbered = 2
	}
	 export const enum ResponseType {
		None = 0,
		Organizer = 1,
		TentativelyAccepted = 2,
		Accepted = 3,
		Declined = 4,
		NotResponded = 5
	}
	 export const enum Sensitivity {
		Normal = 0,
		Personal = 1,
		Private = 2,
		Confidential = 3
	}
	 export const enum WeekIndex {
		First = 0,
		Second = 1,
		Third = 2,
		Fourth = 3,
		Last = 4
	}


	export interface AssignedLicense {
		AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
		DisabledPlans: System.Guid[];
		SkuId: System.Guid;
	}
	export interface AssignedPlan {
		AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
		AssignedDateTime: Date;
		CapabilityStatus: string;
		Service: string;
		ServicePlanId: System.Guid;
	}
	export interface Attachment extends Graph.Entity {
		ContentType: string;
		IsInline: boolean;
		LastModifiedDateTime: Date;
		Name: string;
		Size: number;
	}
	export interface Attendee extends Graph.Recipient {
		Status: Graph.ResponseStatus;
		Type: Graph.AttendeeType;
	}
	export interface Audio {
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
	export interface BaseClient {
		AuthenticationProvider: Graph.IAuthenticationProvider;
		BaseUrl: string;
		HttpProvider: Graph.IHttpProvider;
	}
	export interface BaseRequest {
		Client: Graph.IBaseClient;
		ContentType: string;
		Headers: Graph.HeaderOption[];
		Method: string;
		QueryOptions: Graph.QueryOption[];
		RequestUrl: string;
	}
	export interface BaseRequestBuilder {
		Client: Graph.IBaseClient;
		RequestUrl: string;
	}
	export interface Calendar extends Graph.Entity {
		CalendarView: Graph.Event[];
		ChangeKey: string;
		Color: Graph.CalendarColor;
		Events: Graph.Event[];
		Name: string;
	}
	export interface CalendarGroup extends Graph.Entity {
		Calendars: Graph.Calendar[];
		ChangeKey: string;
		ClassId: System.Guid;
		Name: string;
	}
	export interface Contact extends Graph.OutlookItem {
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
	export interface ContactFolder extends Graph.Entity {
		ChildFolders: Graph.ContactFolder[];
		Contacts: Graph.Contact[];
		DisplayName: string;
		ParentFolderId: string;
	}
	export interface Date {
		Day: number;
		Month: number;
		Year: number;
	}
	export interface DateTimeTimeZone {
		AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
		DateTime: string;
		TimeZone: string;
	}
	export interface Deleted {
		AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
		State: string;
	}
	export interface DirectoryObject extends Graph.Entity {
	}
	export interface DirectoryObjectRequestBuilder extends Graph.EntityRequestBuilder {
	}
	export interface Drive extends Graph.Entity {
		DriveType: string;
		Items: Graph.DriveItem[];
		Owner: Graph.IdentitySet;
		Quota: Graph.Quota;
		Root: Graph.DriveItem;
		Special: Graph.DriveItem[];
	}
	export interface DriveItem extends Graph.Entity {
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
	export interface DriveItemRequest extends Graph.BaseRequest {
	}
	export interface DriveItemRequestBuilder extends Graph.EntityRequestBuilder {
		Children: Graph.IDriveItemChildrenCollectionRequestBuilder;
		Content: Graph.IDriveItemContentRequestBuilder;
		CreatedByUser: Graph.IUserWithReferenceRequestBuilder;
		LastModifiedByUser: Graph.IUserWithReferenceRequestBuilder;
		Permissions: Graph.IDriveItemPermissionsCollectionRequestBuilder;
		Thumbnails: Graph.IDriveItemThumbnailsCollectionRequestBuilder;
	}
	export interface DriveItemsCollectionRequest extends Graph.BaseRequest {
	}
	export interface DriveItemsCollectionRequestBuilder extends Graph.BaseRequestBuilder {
		Item: Graph.IDriveItemRequestBuilder;
	}
	export interface DriveItemsCollectionResponse {
		AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
		Value: Graph.DriveItem[];
	}
	export interface DriveRequest extends Graph.BaseRequest {
	}
	export interface DriveRequestBuilder extends Graph.EntityRequestBuilder {
		Items: Graph.IDriveItemsCollectionRequestBuilder;
		Root: Graph.IDriveItemRequestBuilder;
		Special: Graph.IDriveSpecialCollectionRequestBuilder;
	}
	export interface EmailAddress {
		AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
		Address: string;
		Name: string;
	}
	export interface Entity {
		AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
		Id: string;
		ODataType: string;
	}
	export interface EntityRequestBuilder extends Graph.BaseRequestBuilder {
	}
	export interface Event extends Graph.OutlookItem {
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
	export interface Extension extends Graph.Entity {
	}
	export interface File {
		AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
		Hashes: Graph.Hashes;
		MimeType: string;
	}
	export interface FileSystemInfo {
		AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
		CreatedDateTime: Date;
		LastModifiedDateTime: Date;
	}
	export interface Folder {
		AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
		ChildCount: number;
	}
	export interface GeoCoordinates {
		AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
		Altitude: number;
		Latitude: number;
		Longitude: number;
	}
	export interface GraphServiceClient extends Graph.BaseClient {
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
	export interface Hashes {
		AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
		Crc32Hash: string;
		Sha1Hash: string;
	}
	export interface HeaderOption extends Graph.Option {
	}
	export interface IAttachmentRequestBuilder {
	}
	export interface IAuthenticationProvider {
		AuthenticateRequest(request: any);
	}
	export interface IBaseClient {
		AuthenticationProvider: Graph.IAuthenticationProvider;
		BaseUrl: string;
		HttpProvider: Graph.IHttpProvider;
	}
	export interface ICalendarCalendarViewCollectionRequestBuilder {
		Item: Graph.IEventRequestBuilder;
	}
	export interface ICalendarEventsCollectionRequestBuilder {
		Item: Graph.IEventRequestBuilder;
	}
	export interface ICalendarGroupCalendarsCollectionRequestBuilder {
		Item: Graph.ICalendarRequestBuilder;
	}
	export interface ICalendarGroupRequestBuilder {
		Calendars: Graph.ICalendarGroupCalendarsCollectionRequestBuilder;
	}
	export interface ICalendarRequestBuilder {
		CalendarView: Graph.ICalendarCalendarViewCollectionRequestBuilder;
		Events: Graph.ICalendarEventsCollectionRequestBuilder;
	}
	export interface IContactExtensionsCollectionRequestBuilder {
		Item: Graph.IExtensionRequestBuilder;
	}
	export interface IContactFolderChildFoldersCollectionRequestBuilder {
		Item: Graph.IContactFolderRequestBuilder;
	}
	export interface IContactFolderContactsCollectionRequestBuilder {
		Item: Graph.IContactRequestBuilder;
	}
	export interface IContactFolderRequestBuilder {
		ChildFolders: Graph.IContactFolderChildFoldersCollectionRequestBuilder;
		Contacts: Graph.IContactFolderContactsCollectionRequestBuilder;
	}
	export interface IContactRequestBuilder {
		Extensions: Graph.IContactExtensionsCollectionRequestBuilder;
		Photo: Graph.IProfilePhotoRequestBuilder;
	}
	export interface IConversationRequestBuilder {
		Threads: Graph.IConversationThreadsCollectionRequestBuilder;
	}
	export interface IConversationThreadPostsCollectionRequestBuilder {
		Item: Graph.IPostRequestBuilder;
	}
	export interface IConversationThreadRequestBuilder {
		Posts: Graph.IConversationThreadPostsCollectionRequestBuilder;
	}
	export interface IConversationThreadsCollectionRequestBuilder {
		Item: Graph.IConversationThreadRequestBuilder;
	}
	export interface Identity {
		AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
		DisplayName: string;
		Id: string;
	}
	export interface IdentitySet {
		AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
		Application: Graph.Identity;
		Device: Graph.Identity;
		User: Graph.Identity;
	}
	export interface IDeviceRegisteredOwnersCollectionReferencesRequestBuilder {
	}
	export interface IDeviceRegisteredOwnersCollectionWithReferencesRequestBuilder {
		Item: Graph.IDirectoryObjectWithReferenceRequestBuilder;
		References: Graph.IDeviceRegisteredOwnersCollectionReferencesRequestBuilder;
	}
	export interface IDeviceRegisteredUsersCollectionReferencesRequestBuilder {
	}
	export interface IDeviceRegisteredUsersCollectionWithReferencesRequestBuilder {
		Item: Graph.IDirectoryObjectWithReferenceRequestBuilder;
		References: Graph.IDeviceRegisteredUsersCollectionReferencesRequestBuilder;
	}
	export interface IDeviceRequestBuilder {
		RegisteredOwners: Graph.IDeviceRegisteredOwnersCollectionWithReferencesRequestBuilder;
		RegisteredUsers: Graph.IDeviceRegisteredUsersCollectionWithReferencesRequestBuilder;
	}
	export interface IDirectoryObjectReferenceRequestBuilder {
	}
	export interface IDirectoryObjectRequestBuilder {
	}
	export interface IDirectoryObjectWithReferenceRequestBuilder {
		Reference: Graph.IDirectoryObjectReferenceRequestBuilder;
	}
	export interface IDirectoryRoleMembersCollectionReferencesRequestBuilder {
	}
	export interface IDirectoryRoleMembersCollectionWithReferencesRequestBuilder {
		Item: Graph.IDirectoryObjectWithReferenceRequestBuilder;
		References: Graph.IDirectoryRoleMembersCollectionReferencesRequestBuilder;
	}
	export interface IDirectoryRoleRequestBuilder {
		Members: Graph.IDirectoryRoleMembersCollectionWithReferencesRequestBuilder;
	}
	export interface IDirectoryRoleTemplateRequestBuilder {
	}
	export interface IDriveItemChildrenCollectionRequestBuilder {
		//Item: Graph.IDriveItemRequestBuilder;
	}
	export interface IDriveItemContentRequestBuilder {
	}
	export interface IDriveItemPermissionsCollectionRequestBuilder {
		Item: Graph.IPermissionRequestBuilder;
	}
	export interface IDriveItemRequestBuilder {
		Children: Graph.IDriveItemChildrenCollectionRequestBuilder;
		Content: Graph.IDriveItemContentRequestBuilder;
		CreatedByUser: Graph.IUserWithReferenceRequestBuilder;
		LastModifiedByUser: Graph.IUserWithReferenceRequestBuilder;
		Permissions: Graph.IDriveItemPermissionsCollectionRequestBuilder;
		Thumbnails: Graph.IDriveItemThumbnailsCollectionRequestBuilder;
	}
	export interface IDriveItemsCollectionRequestBuilder {
		//Item: Graph.IDriveItemRequestBuilder;
	}
	export interface IDriveItemThumbnailsCollectionRequestBuilder {
		Item: Graph.IThumbnailSetRequestBuilder;
	}
	export interface IDriveRequestBuilder {
		Items: Graph.IDriveItemsCollectionRequestBuilder;
		Root: Graph.IDriveItemRequestBuilder;
		Special: Graph.IDriveSpecialCollectionRequestBuilder;
	}
	export interface IDriveSpecialCollectionRequestBuilder {
		AppRoot: Graph.IDriveItemRequestBuilder;
		Item: Graph.IDriveItemRequestBuilder;
	}
	export interface IEventAttachmentsCollectionRequestBuilder {
		Item: Graph.IAttachmentRequestBuilder;
	}
	export interface IEventExtensionsCollectionRequestBuilder {
		Item: Graph.IExtensionRequestBuilder;
	}
	export interface IEventInstancesCollectionRequestBuilder {
		Item: Graph.IEventRequestBuilder;
	}
	export interface IEventRequestBuilder {
		Attachments: Graph.IEventAttachmentsCollectionRequestBuilder;
		Calendar: Graph.ICalendarRequestBuilder;
		Extensions: Graph.IEventExtensionsCollectionRequestBuilder;
		Instances: Graph.IEventInstancesCollectionRequestBuilder;
	}
	export interface IExtensionRequestBuilder {
	}
	export interface IGraphServiceDevicesCollectionRequestBuilder {
		Item: Graph.IDeviceRequestBuilder;
	}
	export interface IGraphServiceDirectoryObjectsCollectionRequestBuilder {
		Item: Graph.IDirectoryObjectRequestBuilder;
	}
	export interface IGraphServiceDirectoryRolesCollectionRequestBuilder {
		Item: Graph.IDirectoryRoleRequestBuilder;
	}
	export interface IGraphServiceDirectoryRoleTemplatesCollectionRequestBuilder {
		Item: Graph.IDirectoryRoleTemplateRequestBuilder;
	}
	export interface IGraphServiceDrivesCollectionRequestBuilder {
		Item: Graph.IDriveRequestBuilder;
	}
	export interface IGraphServiceGroupsCollectionRequestBuilder {
		Item: Graph.IGroupRequestBuilder;
	}
	export interface IGraphServiceOrganizationCollectionRequestBuilder {
		Item: Graph.IOrganizationRequestBuilder;
	}
	export interface IGraphServiceSubscribedSkusCollectionRequestBuilder {
		Item: Graph.ISubscribedSkuRequestBuilder;
	}
	export interface IGraphServiceSubscriptionsCollectionRequestBuilder {
		Item: Graph.ISubscriptionRequestBuilder;
	}
	export interface IGraphServiceUsersCollectionRequestBuilder {
		Item: Graph.IUserRequestBuilder;
	}
	export interface IGroupAcceptedSendersCollectionRequestBuilder {
		Item: Graph.IDirectoryObjectRequestBuilder;
	}
	export interface IGroupCalendarViewCollectionRequestBuilder {
		Item: Graph.IEventRequestBuilder;
	}
	export interface IGroupConversationsCollectionRequestBuilder {
		Item: Graph.IConversationRequestBuilder;
	}
	export interface IGroupEventsCollectionRequestBuilder {
		Item: Graph.IEventRequestBuilder;
	}
	export interface IGroupMemberOfCollectionReferencesRequestBuilder {
	}
	export interface IGroupMemberOfCollectionWithReferencesRequestBuilder {
		Item: Graph.IDirectoryObjectWithReferenceRequestBuilder;
		References: Graph.IGroupMemberOfCollectionReferencesRequestBuilder;
	}
	export interface IGroupMembersCollectionReferencesRequestBuilder {
	}
	export interface IGroupMembersCollectionWithReferencesRequestBuilder {
		Item: Graph.IDirectoryObjectWithReferenceRequestBuilder;
		References: Graph.IGroupMembersCollectionReferencesRequestBuilder;
	}
	export interface IGroupOwnersCollectionReferencesRequestBuilder {
	}
	export interface IGroupOwnersCollectionWithReferencesRequestBuilder {
		Item: Graph.IDirectoryObjectWithReferenceRequestBuilder;
		References: Graph.IGroupOwnersCollectionReferencesRequestBuilder;
	}
	export interface IGroupRejectedSendersCollectionRequestBuilder {
		Item: Graph.IDirectoryObjectRequestBuilder;
	}
	export interface IGroupRequestBuilder {
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
	export interface IGroupThreadsCollectionRequestBuilder {
		Item: Graph.IConversationThreadRequestBuilder;
	}
	export interface IHttpProvider {
		Serializer: Graph.ISerializer;
	}
	export interface IInferenceClassificationOverrideRequestBuilder {
	}
	export interface IInferenceClassificationOverridesCollectionRequestBuilder {
		Item: Graph.IInferenceClassificationOverrideRequestBuilder;
	}
	export interface IInferenceClassificationRequestBuilder {
		Overrides: Graph.IInferenceClassificationOverridesCollectionRequestBuilder;
	}
	export interface Image {
		AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
		Height: number;
		Width: number;
	}
	export interface IMailFolderChildFoldersCollectionRequestBuilder {
		Item: Graph.IMailFolderRequestBuilder;
	}
	export interface IMailFolderMessagesCollectionRequestBuilder {
		Item: Graph.IMessageRequestBuilder;
	}
	export interface IMailFolderRequestBuilder {
		ChildFolders: Graph.IMailFolderChildFoldersCollectionRequestBuilder;
		Messages: Graph.IMailFolderMessagesCollectionRequestBuilder;
	}
	export interface IMessageAttachmentsCollectionRequestBuilder {
		Item: Graph.IAttachmentRequestBuilder;
	}
	export interface IMessageExtensionsCollectionRequestBuilder {
		Item: Graph.IExtensionRequestBuilder;
	}
	export interface IMessageRequestBuilder {
		Attachments: Graph.IMessageAttachmentsCollectionRequestBuilder;
		Extensions: Graph.IMessageExtensionsCollectionRequestBuilder;
	}
	export interface InferenceClassification extends Graph.Entity {
		Overrides: Graph.InferenceClassificationOverride[];
	}
	export interface InferenceClassificationOverride extends Graph.Entity {
		ClassifyAs: Graph.InferenceClassificationType;
		SenderEmailAddress: Graph.EmailAddress;
	}
	export interface IOrganizationRequestBuilder {
	}
	export interface IPermissionRequestBuilder {
	}
	export interface IPostAttachmentsCollectionRequestBuilder {
		Item: Graph.IAttachmentRequestBuilder;
	}
	export interface IPostExtensionsCollectionRequestBuilder {
		Item: Graph.IExtensionRequestBuilder;
	}
	export interface IPostRequestBuilder {
		Attachments: Graph.IPostAttachmentsCollectionRequestBuilder;
		Extensions: Graph.IPostExtensionsCollectionRequestBuilder;
		InReplyTo: Graph.IPostRequestBuilder;
	}
	export interface IProfilePhotoContentRequestBuilder {
	}
	export interface IProfilePhotoRequestBuilder {
		Content: Graph.IProfilePhotoContentRequestBuilder;
	}
	export interface ISerializer {
	}
	export interface ISubscribedSkuRequestBuilder {
	}
	export interface ISubscriptionRequestBuilder {
	}
	export interface ItemBody {
		AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
		Content: string;
		ContentType: Graph.BodyType;
	}
	export interface ItemReference {
		AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
		DriveId: string;
		Id: string;
		Path: string;
	}
	export interface IThumbnailContentRequestBuilder {
	}
	export interface IThumbnailRequestBuilder {
		Content: Graph.IThumbnailContentRequestBuilder;
	}
	export interface IThumbnailSetRequestBuilder {
		Item: Graph.IThumbnailRequestBuilder;
	}
	export interface IUserCalendarGroupsCollectionRequestBuilder {
		Item: Graph.ICalendarGroupRequestBuilder;
	}
	export interface IUserCalendarsCollectionRequestBuilder {
		Item: Graph.ICalendarRequestBuilder;
	}
	export interface IUserCalendarViewCollectionRequestBuilder {
		Item: Graph.IEventRequestBuilder;
	}
	export interface IUserContactFoldersCollectionRequestBuilder {
		Item: Graph.IContactFolderRequestBuilder;
	}
	export interface IUserContactsCollectionRequestBuilder {
		Item: Graph.IContactRequestBuilder;
	}
	export interface IUserCreatedObjectsCollectionReferencesRequestBuilder {
	}
	export interface IUserCreatedObjectsCollectionWithReferencesRequestBuilder {
		Item: Graph.IDirectoryObjectWithReferenceRequestBuilder;
		References: Graph.IUserCreatedObjectsCollectionReferencesRequestBuilder;
	}
	export interface IUserDirectReportsCollectionReferencesRequestBuilder {
	}
	export interface IUserDirectReportsCollectionWithReferencesRequestBuilder {
		Item: Graph.IDirectoryObjectWithReferenceRequestBuilder;
		References: Graph.IUserDirectReportsCollectionReferencesRequestBuilder;
	}
	export interface IUserEventsCollectionRequestBuilder {
		Item: Graph.IEventRequestBuilder;
	}
	export interface IUserMailFoldersCollectionRequestBuilder {
		DeletedItems: Graph.IMailFolderRequestBuilder;
		Drafts: Graph.IMailFolderRequestBuilder;
		Inbox: Graph.IMailFolderRequestBuilder;
		Item: Graph.IMailFolderRequestBuilder;
		SentItems: Graph.IMailFolderRequestBuilder;
	}
	export interface IUserMemberOfCollectionReferencesRequestBuilder {
	}
	export interface IUserMemberOfCollectionWithReferencesRequestBuilder {
		Item: Graph.IDirectoryObjectWithReferenceRequestBuilder;
		References: Graph.IUserMemberOfCollectionReferencesRequestBuilder;
	}
	export interface IUserMessagesCollectionRequestBuilder {
		Item: Graph.IMessageRequestBuilder;
	}
	export interface IUserOwnedDevicesCollectionReferencesRequestBuilder {
	}
	export interface IUserOwnedDevicesCollectionWithReferencesRequestBuilder {
		Item: Graph.IDirectoryObjectWithReferenceRequestBuilder;
		References: Graph.IUserOwnedDevicesCollectionReferencesRequestBuilder;
	}
	export interface IUserOwnedObjectsCollectionReferencesRequestBuilder {
	}
	export interface IUserOwnedObjectsCollectionWithReferencesRequestBuilder {
		Item: Graph.IDirectoryObjectWithReferenceRequestBuilder;
		References: Graph.IUserOwnedObjectsCollectionReferencesRequestBuilder;
	}
	export interface IUserReferenceRequestBuilder {
	}
	export interface IUserRegisteredDevicesCollectionReferencesRequestBuilder {
	}
	export interface IUserRegisteredDevicesCollectionWithReferencesRequestBuilder {
		Item: Graph.IDirectoryObjectWithReferenceRequestBuilder;
		References: Graph.IUserRegisteredDevicesCollectionReferencesRequestBuilder;
	}
	export interface IUserRequestBuilder {
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
	export interface IUserWithReferenceRequestBuilder {
		Reference: Graph.IUserReferenceRequestBuilder;
	}
	export interface Location {
		AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
		Address: Graph.PhysicalAddress;
		DisplayName: string;
	}
	export interface MailFolder extends Graph.Entity {
		ChildFolderCount: number;
		ChildFolders: Graph.MailFolder[];
		DisplayName: string;
		Messages: Graph.Message[];
		ParentFolderId: string;
		TotalItemCount: number;
		UnreadItemCount: number;
	}
	export interface Message extends Graph.OutlookItem {
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
	export interface Option {
		Name: string;
		Value: string;
	}
	export interface OutlookItem extends Graph.Entity {
		Categories: string[];
		ChangeKey: string;
		CreatedDateTime: Date;
		LastModifiedDateTime: Date;
	}
	export interface Package {
		AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
		Type: string;
	}
	export interface PasswordProfile {
		AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
		ForceChangePasswordNextSignIn: boolean;
		Password: string;
	}
	export interface PatternedRecurrence {
		AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
		Pattern: Graph.RecurrencePattern;
		Range: Graph.RecurrenceRange;
	}
	export interface Permission extends Graph.Entity {
		GrantedTo: Graph.IdentitySet;
		InheritedFrom: Graph.ItemReference;
		Invitation: Graph.SharingInvitation;
		Link: Graph.SharingLink;
		Roles: string[];
		ShareId: string;
	}
	export interface Photo {
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
	export interface PhysicalAddress {
		AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
		City: string;
		CountryOrRegion: string;
		PostalCode: string;
		State: string;
		Street: string;
	}
	export interface ProfilePhoto extends Graph.Entity {
		Height: number;
		Width: number;
	}
	export interface ProvisionedPlan {
		AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
		CapabilityStatus: string;
		ProvisioningStatus: string;
		Service: string;
	}
	export interface QueryOption extends Graph.Option {
	}
	export interface Quota {
		AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
		Deleted: number;
		Remaining: number;
		State: string;
		Total: number;
		Used: number;
	}
	export interface Recipient {
		AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
		EmailAddress: Graph.EmailAddress;
	}
	export interface RecurrencePattern {
		AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
		DayOfMonth: number;
		DaysOfWeek: Graph.DayOfWeek[];
		FirstDayOfWeek: Graph.DayOfWeek;
		Index: Graph.WeekIndex;
		Interval: number;
		Month: number;
		Type: Graph.RecurrencePatternType;
	}
	export interface RecurrenceRange {
		AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
		EndDate: Graph.Date;
		NumberOfOccurrences: number;
		RecurrenceTimeZone: string;
		StartDate: Graph.Date;
		Type: Graph.RecurrenceRangeType;
	}
	export interface RemoteItem {
		AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
		File: Graph.File;
		FileSystemInfo: Graph.FileSystemInfo;
		Folder: Graph.Folder;
		Id: string;
		Name: string;
		ParentReference: Graph.ItemReference;
		Size: number;
	}
	export interface ResponseStatus {
		AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
		Response: Graph.ResponseType;
		Time: Date;
	}
	export interface SearchResult {
		AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
		OnClickTelemetryUrl: string;
	}
	export interface Shared {
		AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
		Owner: Graph.IdentitySet;
		Scope: string;
	}
	export interface SharingInvitation {
		AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
		Email: string;
		InvitedBy: Graph.IdentitySet;
		RedeemedBy: string;
		SignInRequired: boolean;
	}
	export interface SharingLink {
		AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
		Application: Graph.Identity;
		Type: string;
		WebUrl: string;
	}
	export interface SpecialFolder {
		AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
		Name: string;
	}
	export interface Thumbnail {
		AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
		Content: System.IO.Stream;
		Height: number;
		Url: string;
		Width: number;
	}
	export interface ThumbnailSet extends Graph.Entity {
		Item: Graph.Thumbnail;
		Large: Graph.Thumbnail;
		Medium: Graph.Thumbnail;
		Small: Graph.Thumbnail;
		Source: Graph.Thumbnail;
	}
	export interface User extends Graph.DirectoryObject {
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
	export interface UserRequest extends Graph.BaseRequest {
	}
	export interface UserRequestBuilder extends Graph.DirectoryObjectRequestBuilder {
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
	export interface Video {
		AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
		Bitrate: number;
		Duration: number;
		Height: number;
		Width: number;
	}
}
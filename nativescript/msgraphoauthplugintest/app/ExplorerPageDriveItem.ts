import { Observable, EventData } from "data/observable";

export class ExplorerPageDriveItem extends Observable implements Microsoft.Graph.DriveItem {
    	Audio: Microsoft.Graph.Audio;
		Children: Microsoft.Graph.DriveItem[];
		Content: System.IO.Stream;
		CreatedBy: Microsoft.Graph.IdentitySet;
		CreatedByUser: Microsoft.Graph.User;
		CreatedDateTime: Microsoft.Graph.Date;
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
		LastModifiedDateTime: Microsoft.Graph.Date;
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

        //
        AdditionalData: System.Collections.Generic.KeyValuePair<string, any>[];
        Id: string;
        ODataType: string;
    //

    public convertPropNames(parsed: any) {
        this.Children = parsed.children;
        this.Id = parsed.id;
        this.Name = parsed.name;
        this.Size = parsed.size;
        this.Folder = parsed.folder;
        this.WebUrl = parsed.weburl;

        return this;
    }
}
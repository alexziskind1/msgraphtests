import { Observable, EventData } from "data/observable";

export class ExplorerPageDriveItem extends Observable  {
    
    public Id: string;
    public Name: string;
    public Children: Array<any>;
    public Size: number;
    public Folder: any;
    public WebUrl: string;

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
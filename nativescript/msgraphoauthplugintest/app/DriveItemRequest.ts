import {IBaseClient} from './IBaseClient';
import {BaseRequest} from './BaseRequest';
import {IDriveItemRequest} from './IDriveItemRequest';
import {Option} from './Option';
import {CancellationToken} from './CancellationToken';
import {QueryOption} from './QueryOption';
import * as http from 'http';

export class DriveItemRequest extends BaseRequest implements IDriveItemRequest {
        constructor(
             requestUrl:string,
             client: IBaseClient,
            options?: Option[])
        {
            super(requestUrl, client, options)
        }

    public Create(driveItemToCreate: Microsoft.Graph.DriveItem,  cancellationToken?:CancellationToken) : Promise<Microsoft.Graph.DriveItem> {
        return new Promise<Microsoft.Graph.DriveItem>((resolve, reject)=>{
            //TODO convert this
            /*
        this.ContentType = "application/json";
        this.Method = "PUT";
        var newEntity = <Microsoft.Graph.DriveItem>this.Send(driveItemToCreate, cancellationToken);
        this.InitializeCollectionProperties(newEntity);
        return newEntity;
            */
        });
    }

    public Delete(cancellationToken?:CancellationToken) {
        //TODO:
    }

    public Get(cancellationToken?:CancellationToken) : Promise<Microsoft.Graph.DriveItem> {
        return new Promise<Microsoft.Graph.DriveItem>((resolve, reject)=>{
            this.SendGen<Microsoft.Graph.DriveItem>(null)
                .then((result: Microsoft.Graph.DriveItem)=>{
                    this.InitializeCollectionProperties(result);
                    resolve(result);
                })
                .catch(()=>{
                    reject();
                });
        });

    }

    public Update(driveItemToUpdate: Microsoft.Graph.DriveItem,  cancellationToken?:CancellationToken) : Promise<Microsoft.Graph.DriveItem>{
        return new Promise<Microsoft.Graph.DriveItem>((resolve, reject)=>{
            //TODO convert this
            /*
         this.ContentType = "application/json";
        this.Method = "PATCH";
        var updatedEntity = <Microsoft.Graph.DriveItem>  this.Send(driveItemToUpdate, cancellationToken);
        this.InitializeCollectionProperties(updatedEntity);
        return updatedEntity;
            */
        });
    }


    public Expand(value: string) : IDriveItemRequest {
        this.QueryOptions.push(new QueryOption("$expand", value));
        return this;
    }


    public Select(value: string) : IDriveItemRequest {
        this.QueryOptions.push(new QueryOption("$select", value));
        return this;
    }

    private InitializeCollectionProperties(di: Microsoft.Graph.DriveItem) {
        di.Children = (<any>di).children;
        di.Id = (<any>di).id;
        di.Name = (<any>di).name;
        di.Folder = (<any>di).folder;
        di.Size = (<any>di).size;
        di.WebUrl = (<any>di).weburl;
    }

    
}
import * as Microsoft from './Microsoft';
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
            this.ContentType = "application/json";
            this.Method = "PUT";
            this.SendGen<Microsoft.Graph.DriveItem>(driveItemToCreate, cancellationToken)
                .then((result: Microsoft.Graph.DriveItem)=>{
                    this.InitializeCollectionProperties(result);
                    resolve(result);
                })
                .catch((er)=>{
                    reject(er);
                });
        });
    }

    public Delete(cancellationToken?:CancellationToken) : Promise<void> {
        return new Promise<void>((resolve, reject)=>{
            this.Method = "DELETE";
            this.SendGen<Microsoft.Graph.DriveItem>(null, cancellationToken)
                .then(()=>{
                    resolve();
                })
                .catch((er)=>{
                    reject(er);
                });
        });
    }

    public Get(cancellationToken?:CancellationToken) : Promise<Microsoft.Graph.DriveItem> {
        return new Promise<Microsoft.Graph.DriveItem>((resolve, reject)=>{
            this.SendGen<Microsoft.Graph.DriveItem>(null, cancellationToken)
                .then((result: Microsoft.Graph.DriveItem)=>{
                    this.InitializeCollectionProperties(result);
                    resolve(result);
                })
                .catch((er)=>{
                    reject(er);
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
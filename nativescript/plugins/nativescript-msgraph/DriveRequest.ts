import * as Microsoft from './Microsoft';
import {IBaseClient} from './IBaseClient';
import {IDriveRequest} from './IDriveRequest';
import {BaseRequest} from './BaseRequest';
import {Option} from './Option';
import {CancellationToken} from './CancellationToken';
import {QueryOption} from './QueryOption';
import * as http from 'http';

export class DriveRequest extends BaseRequest implements IDriveRequest {

    constructor(
             requestUrl:string,
             client: IBaseClient,
            options?: Option[])
        {
            super(requestUrl, client, options)
        }

    public Create(driveToCreate: Microsoft.Graph.Drive,  cancellationToken?:CancellationToken) : Promise<Microsoft.Graph.Drive> {
        return new Promise<Microsoft.Graph.Drive>((resolve, reject)=>{
            //TODO convert this
            /*
        this.ContentType = "application/json";
        this.Method = "PUT";
        var newEntity = <Microsoft.Graph.Drive>this.Send(driveToCreate, cancellationToken);
        this.InitializeCollectionProperties(newEntity);
        return newEntity;
            */
        });
    }

    public Delete(cancellationToken?:CancellationToken) {
        //TODO:
    }

    public Get(cancellationToken?:CancellationToken) : Promise<Microsoft.Graph.Drive> {
        return new Promise<Microsoft.Graph.Drive>((resolve, reject)=>{
            this.Send(null)
                .then((result: http.HttpResponse)=>{
                    //this.InitializeCollectionProperties(retrievedEntity);
                    resolve();
                })
                .catch(()=>{
                    reject();
                });
            //TODO convert this
            /*
        this.Method = "GET";
        var retrievedEntity = <Microsoft.Graph.Drive> this.Send(null, cancellationToken);
        this.InitializeCollectionProperties(retrievedEntity);
        return retrievedEntity;
            */
        });

    }

    public Update(driveToUpdate: Microsoft.Graph.Drive,  cancellationToken?:CancellationToken) : Promise<Microsoft.Graph.Drive>{
        return new Promise<Microsoft.Graph.Drive>((resolve, reject)=>{
            //TODO convert this
            /*
         this.ContentType = "application/json";
        this.Method = "PATCH";
        var updatedEntity = <Microsoft.Graph.Drive>  this.Send(driveToUpdate, cancellationToken);
        this.InitializeCollectionProperties(updatedEntity);
        return updatedEntity;
            */
        });
    }


    public Expand(value: string) : IDriveRequest {
        this.QueryOptions.push(new QueryOption("$expand", value));
        return this;
    }


    public Select(value: string) : IDriveRequest {
        this.QueryOptions.push(new QueryOption("$select", value));
        return this;
    }

    private InitializeCollectionProperties(driveToInitialize: Microsoft.Graph.Drive) {
        //TODO
    }

   
}
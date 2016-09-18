import * as Microsoft from './Microsoft';
import {IBaseClient} from './IBaseClient';
import {IUserRequest} from './IUserRequest';
import {BaseRequest} from './BaseRequest';
import {Option} from './Option';
import {CancellationToken} from './CancellationToken';
import * as http from 'http';

export class UserRequest extends BaseRequest implements IUserRequest {

    constructor(
             requestUrl:string,
             client: IBaseClient,
            options?: Option[])
        {
            super(requestUrl, client, options)
        }

    public Create(userToCreate: Microsoft.Graph.User,  cancellationToken?:CancellationToken) : Promise<Microsoft.Graph.User> {
        return new Promise<Microsoft.Graph.User>((resolve, reject)=>{
            //TODO convert this
            /*
        this.ContentType = "application/json";
        this.Method = "PUT";
        var newEntity = <Microsoft.Graph.User>this.Send(userToCreate, cancellationToken);
        this.InitializeCollectionProperties(newEntity);
        return newEntity;
            */
        });
    }

    public Delete( cancellationToken?:CancellationToken) {
        //TODO:
    }

    public Get(cancellationToken?:CancellationToken) : Promise<Microsoft.Graph.User> {
        return new Promise<Microsoft.Graph.User>((resolve, reject)=>{
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
        var retrievedEntity = <Microsoft.Graph.User> this.Send(null, cancellationToken);
        this.InitializeCollectionProperties(retrievedEntity);
        return retrievedEntity;
            */
        });

    }

    public Update(userToUpdate: Microsoft.Graph.User,  cancellationToken?:CancellationToken) : Promise<Microsoft.Graph.User>{
        return new Promise<Microsoft.Graph.User>((resolve, reject)=>{
            //TODO convert this
            /*
         this.ContentType = "application/json";
        this.Method = "PATCH";
        var updatedEntity = <Microsoft.Graph.User>  this.Send(userToUpdate, cancellationToken);
        this.InitializeCollectionProperties(updatedEntity);
        return updatedEntity;
            */
        });
    }

    private InitializeCollectionProperties( userToInitialize: Microsoft.Graph.User) {
        //TODO
    }
}
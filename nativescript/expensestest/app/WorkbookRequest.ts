import {IBaseClient} from './IBaseClient';
import {BaseRequest} from './BaseRequest';
import {IWorkbookRequest} from './IWorkbookRequest';
import {Option} from './Option';
import {CancellationToken} from './CancellationToken';
import {QueryOption} from './QueryOption';
import {Workbook} from './Workbook';
import * as http from 'http';

export class WorkbookRequest extends BaseRequest implements IWorkbookRequest {
        constructor(
             requestUrl:string,
             client: IBaseClient,
            options?: Option[])
        {
            super(requestUrl, client, options)
        }

    public Create(workbookToCreate: Workbook,  cancellationToken?:CancellationToken) : Promise<Workbook> {
        return new Promise<Workbook>((resolve, reject)=>{
            this.ContentType = "application/json";
            this.Method = "PUT";
            this.SendGen<Workbook>(workbookToCreate, cancellationToken)
                .then((result: Workbook)=>{
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
            this.SendGen<Workbook>(null, cancellationToken)
                .then(()=>{
                    resolve();
                })
                .catch((er)=>{
                    reject(er);
                });
        });
    }

    public Get(cancellationToken?:CancellationToken) : Promise<Workbook> {
        return new Promise<Workbook>((resolve, reject)=>{
            this.SendGen<Workbook>(null, cancellationToken)
                .then((result: Workbook)=>{
                    this.InitializeCollectionProperties(result);
                    resolve(result);
                })
                .catch((er)=>{
                    reject(er);
                });
        });

    }

    public Update(workbookToUpdate: Workbook, cancellationToken?:CancellationToken) : Promise<Workbook> {
        return new Promise<Workbook>((resolve, reject)=>{
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


    public Expand(value: string) : IWorkbookRequest {
        this.QueryOptions.push(new QueryOption("$expand", value));
        return this;
    }


    public Select(value: string) : IWorkbookRequest {
        this.QueryOptions.push(new QueryOption("$select", value));
        return this;
    }

    private InitializeCollectionProperties(wb: Workbook) {
        //di.Children = (<any>di).children;
        //di.Id = (<any>di).id;
        //di.Name = (<any>di).name;
        //di.Folder = (<any>di).folder;
        //di.Size = (<any>di).size;
        //di.WebUrl = (<any>di).weburl;
    }

    
}
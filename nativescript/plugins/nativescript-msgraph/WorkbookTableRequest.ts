import {IBaseClient} from './IBaseClient';
import {BaseRequest} from './BaseRequest';
import {IWorkbookTableRequest} from './IWorkbookTableRequest';
import {WorkbookTable} from './WorkbookTable';
import {Option} from './Option';
import {CancellationToken} from './CancellationToken';
import {QueryOption} from './QueryOption';
import * as http from 'http';

export class WorkbookTableRequest extends BaseRequest implements IWorkbookTableRequest {
        constructor(
             requestUrl:string,
             client: IBaseClient,
            options?: Option[])
        {
            super(requestUrl, client, options)
        }

    public Create(workbookTableToCreate: WorkbookTable, cancellationToken?: CancellationToken ): Promise<WorkbookTable> {
        return new Promise<WorkbookTable>((resolve, reject)=>{
            this.ContentType = "application/json";
            this.Method = "PUT";
            this.SendGen<WorkbookTable>(workbookTableToCreate, cancellationToken)
                .then((result: WorkbookTable)=>{
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
            this.SendGen<WorkbookTable>(null, cancellationToken)
                .then(()=>{
                    resolve();
                })
                .catch((er)=>{
                    reject(er);
                });
        });
    }

    public Get(cancellationToken?: CancellationToken ): Promise<WorkbookTable> {
        return new Promise<WorkbookTable>((resolve, reject)=>{
            this.SendGen<WorkbookTable>(null, cancellationToken)
                .then((result: WorkbookTable)=>{
                    this.InitializeCollectionProperties(result);
                    resolve(result);
                })
                .catch((er)=>{
                    reject(er);
                });
        });

    }

    public Update(workbookTableToUpdate: WorkbookTable, cancellationToken?: CancellationToken ): Promise<WorkbookTable>{
        return new Promise<WorkbookTable>((resolve, reject)=>{
            //TODO convert this
            /*
         this.ContentType = "application/json";
        this.Method = "PATCH";
        var updatedEntity = <Microsoft.Graph.WorkbookTable>  this.Send(WorkbookTableToUpdate, cancellationToken);
        this.InitializeCollectionProperties(updatedEntity);
        return updatedEntity;
            */
        });
    }


    public Expand(value: string) : IWorkbookTableRequest {
        this.QueryOptions.push(new QueryOption("$expand", value));
        return this;
    }


    public Select(value: string) : IWorkbookTableRequest {
        this.QueryOptions.push(new QueryOption("$select", value));
        return this;
    }

    private InitializeCollectionProperties(wt: WorkbookTable) {
        /*
        di.Children = (<any>di).children;
        di.Id = (<any>di).id;
        di.Name = (<any>di).name;
        di.Folder = (<any>di).folder;
        di.Size = (<any>di).size;
        di.WebUrl = (<any>di).weburl;
        */
    }

    
}
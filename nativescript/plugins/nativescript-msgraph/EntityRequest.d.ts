import { IBaseClient } from './IBaseClient';
import { IEntityRequest } from './IEntityRequest';
import { BaseRequest } from './BaseRequest';
import { Option } from './Option';
import { Entity } from './Entity';
import { CancellationToken } from './CancellationToken';
export declare class EntityRequest extends BaseRequest implements IEntityRequest {
    constructor(requestUrl: string, client: IBaseClient, options: Option[]);
    Create(entityToCreate: Entity, cancellationToken?: CancellationToken): Promise<Entity>;
    Delete(cancellationToken?: CancellationToken): void;
    Get(cancellationToken?: CancellationToken): Promise<Entity>;
    Update(entityToUpdate: Entity, cancellationToken?: CancellationToken): Promise<Entity>;
    Expand(value: string): IEntityRequest;
    Select(value: string): IEntityRequest;
    private InitializeCollectionProperties(entityToInitialize);
}

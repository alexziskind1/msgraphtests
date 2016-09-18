import { IBaseRequest } from './IBaseRequest';
import { Entity } from './Entity';
import { CancellationToken } from './CancellationToken';
export interface IEntityRequest extends IBaseRequest {
    Create(entityToCreate: Entity, cancellationToken?: CancellationToken): Promise<Entity>;
    Delete(cancellationToken?: CancellationToken): any;
    Get(cancellationToken?: CancellationToken): Promise<Entity>;
    Update(entityToUpdate: Entity, cancellationToken?: CancellationToken): Promise<Entity>;
    Expand(value: string): IEntityRequest;
    Select(value: string): IEntityRequest;
}

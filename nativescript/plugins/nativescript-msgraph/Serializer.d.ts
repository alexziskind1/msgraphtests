import { ISerializer } from './ISerializer';
export declare class Serializer implements ISerializer {
    DeserializeObject<T>(inputString: string): T;
    SerializeObject(serializeableObject: any): string;
}

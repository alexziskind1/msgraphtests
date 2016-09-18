import * as Microsoft from './Microsoft';
export interface ISerializer extends Microsoft.Graph.ISerializer {
    DeserializeObject<T>(inputString: string): T;
    SerializeObject(serializeableObject: any): string;
}

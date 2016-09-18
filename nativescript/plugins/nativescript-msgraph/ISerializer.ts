import * as Microsoft from './Microsoft';

export interface ISerializer extends Microsoft.Graph.ISerializer {

        /// <summary>
        /// Deserializes the JSON string to an object of the specified type.
        /// </summary>
        /// <typeparam name="T">The deserialization type.</typeparam>
        /// <param name="inputString">The JSON string to deserialize.</param>
        /// <returns>The deserialized object.</returns>
        DeserializeObject<T>(inputString: string): T;

        /// <summary>
        /// Serializes the specified object into a JSON string.
        /// </summary>
        /// <param name="serializeableObject">The object to serialize.</param>
        /// <returns>The JSON string.</returns>
        SerializeObject(serializeableObject: any) : string;
}
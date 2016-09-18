import {ISerializer} from './ISerializer';

export class Serializer implements ISerializer {

    
        /// <summary>
        /// Deserializes the JSON string to an object of the specified type.
        /// </summary>
        /// <typeparam name="T">The deserialization type.</typeparam>
        /// <param name="inputString">The JSON string to deserialize.</param>
        /// <returns>The deserialized object.</returns>
        public DeserializeObject<T>(inputString: string): T {
            if (!inputString) {
                return <T>{};
            }
            
            let parsed = <T>JSON.parse(inputString);

            return parsed;
        }

        /// <summary>
        /// Serializes the specified object into a JSON string.
        /// </summary>
        /// <param name="serializeableObject">The object to serialize.</param>
        /// <returns>The JSON string.</returns>
        public SerializeObject(serializeableObject: any) : string {
            if (!serializeableObject) {
                return null;
            }
            return JSON.stringify(serializeableObject);
        }

}
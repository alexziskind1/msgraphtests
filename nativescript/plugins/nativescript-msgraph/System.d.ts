export interface Guid {
}
export interface MarshalByRefObject {
}
export declare module IO {
    interface Stream extends MarshalByRefObject {
        CanRead: boolean;
        CanSeek: boolean;
        CanTimeout: boolean;
        CanWrite: boolean;
        Length: number;
        Position: number;
        ReadTimeout: number;
        WriteTimeout: number;
    }
}
export declare module Collections {
    module Generic {
        interface KeyValuePair<TKey, TValue> {
            Key: TKey;
            Value: TValue;
        }
    }
}

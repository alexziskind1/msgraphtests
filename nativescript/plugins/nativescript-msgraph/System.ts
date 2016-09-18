export interface Guid {
}
export interface MarshalByRefObject {
}

export module IO {
    export interface Stream extends MarshalByRefObject {
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

export module Collections {
    export module Generic {
        export interface KeyValuePair<TKey, TValue> {
            Key: TKey;
            Value: TValue;
        }
    }
}
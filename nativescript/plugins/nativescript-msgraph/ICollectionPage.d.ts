export interface ICollectionPage<T> extends Array<T> {
    CurrentPage: Array<T>;
    AdditionalData: {
        [str: string]: any;
    };
}

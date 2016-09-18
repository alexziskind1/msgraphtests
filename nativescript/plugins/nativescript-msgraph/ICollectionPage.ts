

export interface ICollectionPage<T> extends Array<T> {


    /// <summary>
    /// The current page of the collection.
    /// </summary>
    CurrentPage : Array<T>;

    AdditionalData: { [str: string]: any; };
}
export class Entity {
    
    /// <summary>
    /// Gets or sets id.
    /// </summary>
    public  Id : string;

    /// <summary>
    /// Gets or sets @odata.type.
    /// </summary>
    public  ODataType: string;

    /// <summary>
    /// Gets or sets additional data.
    /// </summary>

    public AdditionalData: { [str: string]: any; } = { };
    //public IDictionary<string, object> AdditionalData { get; set; }

}
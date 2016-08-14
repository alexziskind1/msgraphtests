"use strict";
var Serializer = (function () {
    function Serializer() {
    }
    /// <summary>
    /// Deserializes the JSON string to an object of the specified type.
    /// </summary>
    /// <typeparam name="T">The deserialization type.</typeparam>
    /// <param name="inputString">The JSON string to deserialize.</param>
    /// <returns>The deserialized object.</returns>
    Serializer.prototype.DeserializeObject = function (inputString) {
        return {};
    };
    /// <summary>
    /// Serializes the specified object into a JSON string.
    /// </summary>
    /// <param name="serializeableObject">The object to serialize.</param>
    /// <returns>The JSON string.</returns>
    Serializer.prototype.SerializeObject = function (serializeableObject) {
        return '';
    };
    return Serializer;
}());
exports.Serializer = Serializer;
//# sourceMappingURL=Serializer.js.map
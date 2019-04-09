"use strict";
/*
 * Data class needs:
 *      - Create (write new file)
 *      - Update (update the file)
 *      - Read (read the file)
 *      - Delete (delete the file)
 */
/**
 * Data management
 * @method create   Creates a new file and sets the value to JSON
 * @method update   Writes JSON to the specified file
 * @method read     Reads from a specified file and returns it as an object
 * @method delete   Deletes a file
 */
var Data;
(function (Data) {
    // directory: string, name: string, content: any, callback: (error) => void
    function create(directory, name, content, callback) {
    }
    Data.create = create;
})(Data || (Data = {}));

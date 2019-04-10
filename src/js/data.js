"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const fs_1 = require("fs");
const util_1 = require("./util");
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
    // : void
    function writeData(directory, name, content, callback) {
        const filename = path_1.join(__dirname, '../../data/', directory, name + '.json');
        fs_1.writeFile(filename, JSON.stringify(content, null, '\t'), callback);
    }
    Data.writeData = writeData;
    // directory: string, name: string 
    // : any
    function readData(directory, name) {
        const filename = path_1.join(__dirname, '../../data/', directory, name + '.json');
        fs_1.readFile(filename, 'utf8', (err, data) => {
            if (err)
                return null;
            return util_1.BotUtil.TryParseJSON(data);
        });
    }
    Data.readData = readData;
    // directory, name 
    // : void|error 
    function deleteData(directory, name) {
        const filename = path_1.join(__dirname, '../../data/', directory, name + '.json');
        fs_1.unlink(filename, (err) => {
            if (err)
                return err;
            else
                return;
        });
    }
    Data.deleteData = deleteData;
    // directory 
    // : void|error 
    function mkDir(directory) {
        const filename = path_1.join(__dirname, '../../data/', directory);
        fs_1.mkdir(filename, (err) => {
            if (err)
                return err;
            else
                return;
        });
    }
    Data.mkDir = mkDir;
})(Data = exports.Data || (exports.Data = {}));

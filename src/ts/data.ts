import { join } from "path";
import { writeFile, readFile, truncate, Dirent, unlink } from "fs";
import { BotUtil } from "./util";

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
export namespace Data {

    // directory: string, name: string, content: any, callback: (error) => void
    // : void
    export function writeData(directory: string, name: string, content: any, callback: (err: NodeJS.ErrnoException) => void): void {
        const filename: string = join(__dirname, '../../data/', directory, name + '.json');
        writeFile(filename, JSON.stringify(content, null, '\t'), callback);

    } 

    // directory: string, name: string 
    // : any
    export function readData(directory: string, name: string): any {
        const filename: string = join(__dirname, '../../data/', directory, name + '.json');
        readFile(filename, 'utf8', (err: NodeJS.ErrnoException, data: string) => {
            if(err)
                return null;
            return BotUtil.TryParseJSON(data);
        })
    } 

    // directory, name 
    // : void|error 
    export function deleteData(directory: string, name: string): void|NodeJS.ErrnoException {
        const filename: string = join(__dirname, '../../data/', directory, name + '.json');
        unlink(filename, (err: NodeJS.ErrnoException) => {
            if(err) 
                return err; 
            else 
                return;
        })
    }

}
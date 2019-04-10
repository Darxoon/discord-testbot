import { join } from "path";
import { writeFile } from "fs";

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
    export function create(directory: string, name: string, content: any, callback: (err: NodeJS.ErrnoException) => void): void {

        const filename = join(__dirname, '../../data/', directory, name + '.json');
        writeFile(filename, JSON.stringify(content, null, '\t'), callback);

    }

}
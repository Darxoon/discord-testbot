export namespace BotUtil {

    export function TryParseJSON(json: string): any {
        try {
            return JSON.parse(json);
        } catch (err) {
            return err;
        }
    }


}
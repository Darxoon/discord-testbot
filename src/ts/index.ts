import { Bot } from "./bot";

namespace CletBot {
    export class Program {

        public static init(): string {

            Bot.start();

            return 'success';
        }



    }
}





console.log(`Program started with mesage: '${CletBot.Program.init()}'`);
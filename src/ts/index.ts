import { Bot } from "./bot";

// invite link: https://discordapp.com/oauth2/authorize?&client_id=565205778248499203&scope=bot&permissions=1229417542

namespace CletBot {
    export class Program {

        public static init(): string {

            Bot.start();

            return 'success';
        }



    }
}





console.log(`Program started with mesage: '${CletBot.Program.init()}'`);
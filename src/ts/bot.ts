import 'discord.js';
import { Client, Message, Guild } from 'discord.js';
import { readFileSync } from 'fs';
import { Data } from './data';


export class Bot {

    static config: Config;

    public static start(): void {
        this.loadConfig(); 


        const client = new Client();

        client.on('ready', () => {
            console.log('Logged in as @' + client.user.tag);
        }); 

        client.on('guildCreate', (guild: Guild) => {
            Data.create('asdf', 'asdf', {}, (error: any) => {})
        })

        client.on('message', (msg: Message) => {

            const   content = msg.content, 
                    author  = msg.author, 
                    channel = msg.channel, 
                    guild   = msg.guild; 
            
            if(author.id !== client.user.id && content.startsWith(this.config.standardPrefix)) {
                console.log(`Command was used by @${author.tag}: ${content}`);
                

                Data.create('test', 'config', this.config, (err: NodeJS.ErrnoException) => {
                    if(err)
                        console.error(err); 
                    console.log('Config was saved!');
                })


            }

        })

        client.login(this.config.secret.token);

        
    }

    static loadConfig(): void {
        let objConfig: any = JSON.parse(readFileSync('./src/config.json', 'utf8'));
        objConfig.secret = JSON.parse(readFileSync('./src/secret.json', 'utf8'));
        this.config = objConfig as Config;
    }


}
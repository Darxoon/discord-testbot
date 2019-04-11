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
            // create directories
            Data.mkDir('servers/' + guild.id); 
            Data.mkDir(`servers/${guild.id}/commands`);
            // copy options.json
            Data.readData('presets', 'options', (err: NodeJS.ErrnoException, data: any) => {
                Data.writeData('servers/' + guild.id, 'options', data, (err: NodeJS.ErrnoException) => {
                    if(err) throw err;
                })    
            })
            // copy commands.json
            Data.readData('presets', 'commands', (err: NodeJS.ErrnoException, data: any) => {
                Data.writeData('servers/' + guild.id, 'commands', data, (err: NodeJS.ErrnoException) => {
                    if(err) throw err;
                })    
            })
        })

        client.on('message', (msg: Message) => {

            const   content = msg.content, 
                    author  = msg.author, 
                    channel = msg.channel, 
                    guild   = msg.guild; 
            
            if(author.id !== client.user.id && content === '?createserver') {
                msg.channel.send("was added lol" + guild.id); 
                Data.mkDir('servers/' + guild.id); 
                Data.readData('presets', 'options', (err: NodeJS.ErrnoException, data: any) => {
                    Data.writeData('servers/' + guild.id, 'options', data, (err: NodeJS.ErrnoException) => {
                        if(err) throw err;
                    })    
                })
                Data.readData('presets', 'commands', (err: NodeJS.ErrnoException, data: any) => {
                    Data.writeData('servers/' + guild.id, 'commands', data, (err: NodeJS.ErrnoException) => {
                        if(err) throw err;
                    })    
                })
                Data.mkDir(`servers/${guild.id}/commands`)
            }

            if(author.id !== client.user.id && content.startsWith(this.config.standardPrefix)) {
                console.log(`Command was used by @${author.tag}: ${content}`);
                



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
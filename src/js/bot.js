"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("discord.js");
const discord_js_1 = require("discord.js");
const fs_1 = require("fs");
const data_1 = require("./data");
class Bot {
    static start() {
        this.loadConfig();
        const client = new discord_js_1.Client();
        client.on('ready', () => {
            console.log('Logged in as @' + client.user.tag);
        });
        client.on('guildCreate', (guild) => {
            // create directories
            data_1.Data.mkDir('servers/' + guild.id);
            data_1.Data.mkDir(`servers/${guild.id}/commands`);
            // copy options.json
            data_1.Data.readData('presets', 'options', (err, data) => {
                data_1.Data.writeData('servers/' + guild.id, 'options', data, (err) => {
                    if (err)
                        throw err;
                });
            });
            // copy commands.json
            data_1.Data.readData('presets', 'commands', (err, data) => {
                data_1.Data.writeData('servers/' + guild.id, 'commands', data, (err) => {
                    if (err)
                        throw err;
                });
            });
        });
        client.on('message', (msg) => {
            const content = msg.content, author = msg.author, channel = msg.channel, guild = msg.guild;
            if (author.id !== client.user.id && content === '?createserver') {
                msg.channel.send("was added lol" + guild.id);
                data_1.Data.mkDir('servers/' + guild.id);
                data_1.Data.readData('presets', 'options', (err, data) => {
                    data_1.Data.writeData('servers/' + guild.id, 'options', data, (err) => {
                        if (err)
                            throw err;
                    });
                });
                data_1.Data.readData('presets', 'commands', (err, data) => {
                    data_1.Data.writeData('servers/' + guild.id, 'commands', data, (err) => {
                        if (err)
                            throw err;
                    });
                });
                data_1.Data.mkDir(`servers/${guild.id}/commands`);
            }
            if (author.id !== client.user.id && content.startsWith(this.config.standardPrefix)) {
                console.log(`Command was used by @${author.tag}: ${content}`);
            }
        });
        client.login(this.config.secret.token);
    }
    static loadConfig() {
        let objConfig = JSON.parse(fs_1.readFileSync('./src/config.json', 'utf8'));
        objConfig.secret = JSON.parse(fs_1.readFileSync('./src/secret.json', 'utf8'));
        this.config = objConfig;
    }
}
exports.Bot = Bot;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("discord.js");
var discord_js_1 = require("discord.js");
var fs_1 = require("fs");
var data_1 = require("./data");
var Bot = /** @class */ (function () {
    function Bot() {
    }
    Bot.start = function () {
        var _this = this;
        this.loadConfig();
        var client = new discord_js_1.Client();
        client.on('ready', function () {
            console.log('Logged in as @' + client.user.tag);
        });
        client.on('guildCreate', function (guild) {
            data_1.Data.create('asdf', 'asdf', {}, function (error) { });
        });
        client.on('message', function (msg) {
            var content = msg.content, author = msg.author, channel = msg.channel, guild = msg.guild;
            if (author.id !== client.user.id && content.startsWith(_this.config.standardPrefix)) {
                console.log("Command was used by @" + author.tag + ": " + content);
                data_1.Data.create('test', 'config', _this.config, function (err) {
                    if (err)
                        console.error(err);
                    console.log('Config was saved!');
                });
            }
        });
        client.login(this.config.secret.token);
    };
    Bot.loadConfig = function () {
        var objConfig = JSON.parse(fs_1.readFileSync('./src/config.json', 'utf8'));
        objConfig.secret = JSON.parse(fs_1.readFileSync('./src/secret.json', 'utf8'));
        this.config = objConfig;
    };
    return Bot;
}());
exports.Bot = Bot;

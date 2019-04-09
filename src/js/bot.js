"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("discord.js");
var discord_js_1 = require("discord.js");
var Bot = /** @class */ (function () {
    function Bot() {
    }
    Bot.start = function () {
        var client = new discord_js_1.Client();
    };
    return Bot;
}());
exports.Bot = Bot;

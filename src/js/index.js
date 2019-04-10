"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bot_1 = require("./bot");
// invite link: https://discordapp.com/oauth2/authorize?&client_id=565205778248499203&scope=bot&permissions=1229417542
var CletBot;
(function (CletBot) {
    var Program = /** @class */ (function () {
        function Program() {
        }
        Program.init = function () {
            bot_1.Bot.start();
            return 'success';
        };
        return Program;
    }());
    CletBot.Program = Program;
})(CletBot || (CletBot = {}));
console.log("Program started with mesage: '" + CletBot.Program.init() + "'");

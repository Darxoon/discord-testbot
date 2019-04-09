"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bot_1 = require("./bot");
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

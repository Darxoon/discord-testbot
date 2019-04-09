"use strict";
var CletBot;
(function (CletBot) {
    var Program = /** @class */ (function () {
        function Program() {
        }
        Program.init = function () {
            return 'success';
        };
        return Program;
    }());
    CletBot.Program = Program;
})(CletBot || (CletBot = {}));
console.log("Program started with mesage: '" + CletBot.Program.init() + "'");

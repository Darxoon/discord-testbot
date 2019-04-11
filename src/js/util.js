"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BotUtil;
(function (BotUtil) {
    function TryParseJSON(json) {
        try {
            return JSON.parse(json);
        }
        catch (err) {
            return err;
        }
    }
    BotUtil.TryParseJSON = TryParseJSON;
})(BotUtil = exports.BotUtil || (exports.BotUtil = {}));

"use strict";
var Config = /** @class */ (function () {
    function Config(owner, standardPrefix, secretToken) {
        this._owner = owner;
        this._standardPrefix = standardPrefix;
        this._secret = new Config.ConfigSecret(secretToken);
    }
    Object.defineProperty(Config.prototype, "owner", {
        get: function () { return this._owner; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Config.prototype, "standardPrefix", {
        get: function () { return this._standardPrefix; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Config.prototype, "secretToken", {
        get: function () { return this._secret.token; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Config.prototype, "secret", {
        get: function () { return this._secret; },
        enumerable: true,
        configurable: true
    });
    return Config;
}());
(function (Config) {
    var ConfigSecret = /** @class */ (function () {
        function ConfigSecret(token) {
            this._token = token;
        }
        Object.defineProperty(ConfigSecret.prototype, "token", {
            get: function () { return this._token; },
            enumerable: true,
            configurable: true
        });
        return ConfigSecret;
    }());
    Config.ConfigSecret = ConfigSecret;
})(Config || (Config = {}));

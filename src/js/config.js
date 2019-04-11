"use strict";
class Config {
    constructor(owner, standardPrefix, secretToken) {
        this._owner = owner;
        this._standardPrefix = standardPrefix;
        this._secret = new Config.ConfigSecret(secretToken);
    }
    get owner() { return this._owner; }
    get standardPrefix() { return this._standardPrefix; }
    get secretToken() { return this._secret.token; }
    get secret() { return this._secret; }
}
(function (Config) {
    class ConfigSecret {
        constructor(token) { this._token = token; }
        get token() { return this._token; }
    }
    Config.ConfigSecret = ConfigSecret;
})(Config || (Config = {}));

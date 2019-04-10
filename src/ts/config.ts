class Config {
    private _owner: string; 
    private _standardPrefix: string; 
    private _secret: Config.ConfigSecret;

    constructor(owner: string, standardPrefix: string, secretToken: string) {
        this._owner = owner; 
        this._standardPrefix = standardPrefix; 
        this._secret = new Config.ConfigSecret(secretToken);
    } 

    public get owner(): string { return this._owner }
    public get standardPrefix(): string { return this._standardPrefix }
    public get secretToken(): string { return this._secret.token }
    public get secret(): Config.ConfigSecret { return this._secret }
    
} 
namespace Config {
    export class ConfigSecret {
        private _token: string; 
        public get token(): string { return this._token }
        constructor(token: string) { this._token = token }
    }
}
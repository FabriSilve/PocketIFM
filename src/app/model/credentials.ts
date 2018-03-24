export class Credentials {

    constructor(
        private email : string,
        private password : string
    ) { }

    public getEmail() : string {
        return this.email;
    }

    public getCryptoPassword() : string {
        return this.email+"salt";
    }
}
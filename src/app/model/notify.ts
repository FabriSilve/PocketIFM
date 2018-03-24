export class Notify {
    public id : number;
    public title : string;
    public body : string;
    public type : string;
    public show : boolean;
    public read : boolean;
    public date : Date;
    public from : string;
    public sent : boolean;

    constructor(
        id : number,
        title : string,
        body : string,
        type : string,
        show : boolean,
        read : boolean,
        date : Date,
        from : string,
        sent : boolean,
    ) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.type = type;
        this.show = show;
        this.read = read;
        this.date = date;
        this.from = from;
        this.sent = sent;
    }
}
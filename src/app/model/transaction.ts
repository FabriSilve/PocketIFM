export class Transaction {
    public id : number;
    public transactionDay : Date;
    public amount : number;
    public type : string;
    public service : string;
    public description : string;
    public serviceDay : Date;

    public outNaz_Cost : number;
    public outMob_Cost : number;
    public outInt_Cost : number;
    public outTot_Cost : number;
    public inNaz_Cost : number;
    public inMob_Cost : number;
    public inInt_Cost : number;
    public inTot_Cost : number;

    public outNaz_Qnt : number;
    public outMob_Qnt : number;
    public outInt_Qnt : number;
    public outTot_Qnt : number;
    public inNaz_Qnt : number;
    public inMob_Qnt : number;
    public inInt_Qnt : number;
    public inTot_Qnt : number;

    public outNaz_Dur : number;
    public outMob_Dur : number;
    public outInt_Dur : number;
    public outTot_Dur : number;
    public inNaz_Dur : number;
    public inMob_Dur : number;
    public inInt_Dur : number;
    public inTot_Dur : number;

    public extended : boolean;
    public details : boolean;
}

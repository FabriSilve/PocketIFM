export class DailyData {
    public performance : number;
    public quantity : number;
    public durations : number;
    public expense : number;
    public credit : number;
    public until : Date;
    public daysLeft : number;

    constructor(
        performance : number,
        quantity : number,
        durations : number,
        expense : number,
        credit : number,
        until : Date,
        daysLeft : number
    ) {
        this.performance = performance;
        this.quantity = quantity;
        this.durations = durations;
        this.expense = expense;
        this.credit = credit;
        this.until = until;
        this.daysLeft = daysLeft;
    }
}
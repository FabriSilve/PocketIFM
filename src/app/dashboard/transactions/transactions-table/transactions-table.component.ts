import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Transaction } from '../../../model/transaction';
import { UserDataService } from '../../../service/user-data.service';

@Component({
  selector: 'transactions-table',
  templateUrl: './transactions-table.component.html',
  styleUrls: ['./transactions-table.component.css']
})
export class TransactionsTableComponent implements OnInit {

  @Input() public transactions : Transaction[];
  @Output() idEmitter : EventEmitter<Transaction>;

  private id : number;
  public numberOfTransactions : number = 10;

  private tabCost : boolean = true;
  private tabQnt : boolean = false;
  private tabDur : boolean = false;

  private idTransaction : number;

  constructor(
    private userDataService : UserDataService
  ) {
    this.idEmitter = new EventEmitter();
  }
 
  ngOnInit() {
    this.idTransaction = this.transactions[0].id;
  }

  private updateId(id : number) {
    this.idTransaction = id;
    var t = this.transactions.filter(t => t.id == id);
    this.userDataService.setSharedTransaction(t[0]);
    this.idEmitter.emit(t[0]);
  }

  private closeOther(id : number) : void {
    if(this.transactions.find(t => t.id == id).type == "Recharge") return;
    this.updateId(id);
    this.transactions.forEach(t => this.closeDescription(t));
  }

  private closeDescription(transaction : Transaction) : void {
    if(transaction.id == this.idTransaction) return;
    transaction.extended = false;
  }

}

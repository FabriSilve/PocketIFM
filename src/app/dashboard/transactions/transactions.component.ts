import { Component, OnInit } from '@angular/core';
import { Transaction } from '../../model/transaction';
import { TransactionsService } from '../../service/transactions.service';

@Component({
  selector: 'transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  public transactions : Transaction[];
  public transactionForComposition : Transaction;

  constructor(private transactionsService : TransactionsService) {
  }

  ngOnInit() {
    this.getTransactions();
  }
  
   private getTransactions() : void {
     this.transactionsService.getTransactions().subscribe(
       data => {
         if(data != null) {
          this.transactions = <Transaction[]> data;
          this.transactionForComposition = this.transactions[0];
         }
       }
     );
   }

   public handleIdEmitter(transaction : Transaction) : void {
     this.transactionForComposition = transaction;
   }

}

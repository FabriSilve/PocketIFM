import { Injectable } from '@angular/core';
import { Transaction } from '../model/transaction';

@Injectable()
export class UserDataService {

  private token : string;
  private sharedTransaction : Transaction;

  constructor() { }

  public setToken(token : string) {
    this.token = token;
  }

  public getToken() {
    return this.token;
  }

  public setSharedTransaction(transaction : Transaction) {
    this.sharedTransaction = transaction;
  }

  public getSharedTransaction() : Transaction {
    return this.sharedTransaction;
  }

}

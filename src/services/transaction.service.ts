import { Injectable } from '@angular/core';
import { Transaction } from '../model/transaction.class';
import { Observable } from 'rxjs/Observable';
import { DataService } from './data.service';

@Injectable()
export class TransactionService{
    public transactions:Array<Transaction> = [];

    constructor(private dataService:DataService){

    }
    saveTransaction(transaction:Transaction):Observable<boolean>{
        console.log(transaction);
        this.transactions.push(transaction);
        return this.dataService.saveTransactions(this.transactions);
    }

    getTransactions(){
        this.dataService.getTransactions().subscribe(data=>{
            this.transactions = data;
        });
    }
}
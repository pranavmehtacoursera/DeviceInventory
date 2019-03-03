import { Injectable } from '@angular/core';
import { Transaction, TransactionType } from '../model/transaction.class';
import { Observable } from 'rxjs/Observable';
import { DataService } from './data.service';
import { DeviceService } from './device.service';


@Injectable()
export class TransactionService{
    public transactions:Array<Transaction> = [];

    constructor(private dataService:DataService,private deviceService:DeviceService){

    }
    saveTransaction(transaction:Transaction):Observable<boolean>{
        return new Observable(observer =>{
            this.transactions.push(transaction);
            this.dataService.saveTransactions(this.transactions).subscribe(result=>{
                if(result){
                    this.deviceService.updateDeviceStatus(transaction).subscribe(val =>{
                        if(val){
                            observer.next(true);
                            observer.complete();
                        }else{
                            observer.error();
                        }
                    });
                }else{
                    observer.error();
                }
            });
        });
    }

    getTransactions(){
        this.dataService.getTransactions().subscribe(data=>{
            this.transactions = data;
        });
    }
}
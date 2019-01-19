import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Device } from '../model/device.model';
import { Observable } from 'rxjs/Observable';
import { Transaction } from '../model/transaction.class';

@Injectable()
export class DataService{

    constructor(private storage:Storage){

    }

     saveDevicesList = (devices:Array<Device>):Observable<any> =>{
         return new Observable(observer =>{
            this.storage.set("devicesList",JSON.stringify(devices)).then(()=>{
                observer.next(true);
            }).catch((err)=>{
                console.log(`Error : ${err}`);
                observer.error(err);
            });

            return {unsubscribe() {}};
         });
        
    }

    saveTransactions = (transactions:Array<Transaction>):Observable<any> =>{
        return new Observable(observer =>{
           this.storage.set("tansations",JSON.stringify(transactions)).then(()=>{
               observer.next(true);
           }).catch((err)=>{
               console.log(`Error : ${err}`);
               observer.error(err);
           });

           return {unsubscribe() {}};
        });
       
   }

    getDevicesList = ():Observable<Array<Device>>=>{
        return new Observable(obsrver =>{
            this.storage.get("devicesList").then(data=>{
                obsrver.next(JSON.parse(data));
                obsrver.complete();
            }).catch(err=>{
                obsrver.error(err);
            });
        });
    }

    getTransactions = ():Observable<Array<Transaction>>=>{
        return new Observable(obsrver =>{
            this.storage.get("transactions").then(data=>{
                obsrver.next(JSON.parse(data));
                obsrver.complete();
            }).catch(err=>{
                obsrver.error(err);
            });
        });
    }
}
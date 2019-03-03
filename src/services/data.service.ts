import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Device } from '../model/device.model';
import { Observable } from 'rxjs/Observable';
import { Transaction } from '../model/transaction.class';


@Injectable()
export class DataService{

    constructor(private storage:Storage){

    }

     saveDevicesList = (devicesList:Array<Device>):Observable<any> =>{
         return new Observable(observer =>{
            this.storage.set("devicesList",JSON.stringify(devicesList)).then(()=>{
                observer.next(true);
            }).catch((err)=>{
                console.log(`Error : ${err}`);
                observer.error(err);
            });

            return {unsubscribe() {}};
         });
        
    }

    updateDevice = (device:Device):Observable<boolean>=>{
        return new Observable(observer =>{
            this.storage.get("devicesList").then(data=>{
                let devicesList = JSON.parse(data);
                if(devicesList){
                    let deviceIndex = devicesList.findIndex(item=> item.deviceId === device.deviceId);
                    if(deviceIndex > -1){
                        devicesList[deviceIndex] = device;
                    }
                }
                observer.next(true);
                observer.complete();
            }).catch(err=>{
                observer.error(err);
            });
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
        return new Observable(observer =>{
            this.storage.get("devicesList").then(data=>{
                observer.next(JSON.parse(data));
                observer.complete();
            }).catch(err=>{
                observer.error(err);
            });
        });
    }

    getTransactions = ():Observable<Array<Transaction>>=>{
        return new Observable(observer =>{
            this.storage.get("transactions").then(data=>{
                observer.next(JSON.parse(data));
                observer.complete();
            }).catch(err=>{
                observer.error(err);
            });
        });
    }
}
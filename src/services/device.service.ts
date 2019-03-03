import { Injectable } from '@angular/core';
import { Device } from '../model/device.model';
import { DataService } from './data.service';
import { Observable } from 'rxjs/Observable';
import { Transaction, TransactionType } from '../model/transaction.class';

@Injectable()

export class DeviceService{
    public devices:Array<Device>;
    

    constructor(private dataService:DataService){
        this.devices = [];
    }

    saveDevice(newDevice:Device):Observable<boolean>{
        this.devices.push(newDevice);
        return this.dataService.saveDevicesList(this.devices);
    }

    updateDeviceStatus(trans:Transaction):Observable<boolean>{
        let deviceIndex = this.devices.findIndex(item=> item.deviceId === trans.trans_deviceId);
        if(deviceIndex > -1){
            this.devices[deviceIndex].isAvailable = trans.trans_type === TransactionType.CHECKIN;
            this.devices[deviceIndex].lastBorrowedBy = trans.trans_borrower;
            this.devices[deviceIndex].lastBorrowedDate = trans.trans_date;
        }
        return this.dataService.updateDevice(this.devices[deviceIndex]);
    }
    getDevices(){
        this.dataService.getDevicesList().subscribe(data=>{
            if(data && data != null){
                this.devices = data;
            }
        });
    }

    
    
}
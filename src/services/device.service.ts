import { Injectable } from '@angular/core';
import { Device } from '../model/device.model';
import { DataService } from './data.service';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class DeviceService{
    public devices:Array<Device>;
    

    constructor(private dataService:DataService){
        this.devices = [];
    }

    saveDevice(newDevice:Device):Observable<boolean>{
        console.log(this.devices);
        this.devices.push(newDevice);
        return this.dataService.saveDevicesList(this.devices);
    }
    getDevices(){
        this.dataService.getDevicesList().subscribe(data=>{
            this.devices = data;
        });
    }

    
    
}
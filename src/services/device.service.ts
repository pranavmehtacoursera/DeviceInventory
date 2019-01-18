import { Injectable } from '@angular/core';
import { Device } from '../model/device.model';

@Injectable()

export class DeviceService{
    public devices:Array<Device>;
    

    constructor(){
        this.devices = [];
    }
    get getDevices():Array<Device>{
        return this.devices
    }

    
    
}
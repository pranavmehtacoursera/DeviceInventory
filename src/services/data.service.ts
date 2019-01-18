import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Device } from '../model/device.model';

@Injectable()
export class DataService{

    constructor(private storage:Storage){

    }

    addDevice = (deviceObj:Device)=>{
        this.storage.set(deviceObj.deviceId,JSON.stringify(deviceObj));
    }

    getDevice = (deviceId):Promise<Device>=>{
        return this.storage.get(deviceId)
    }
}
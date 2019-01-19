import { Component } from '@angular/core';
import { Device } from '../../model/device.model';
import { ViewController } from 'ionic-angular';
import { DeviceService } from '../../services/device.service';
import { UIService } from '../../services/ui.service';

@Component({
    selector: 'device-component',
    templateUrl:'device.component.html'
})

export class DeviceComponent{
    
    public device:Device = {
        deviceId: 0,
        deviceName: '',
        deviceMake: '',
        deviceModel: '',
        deviceSN: '',
        isActive:true,
        isAvailable:true
    };

    constructor(
        private viewCtrl:ViewController, 
        private deviceService:DeviceService,
        private uiService:UIService){
        
    }

    saveNewDevice(){
        this.device.deviceId = new Date().getMilliseconds();
        const newDevice  = new Device(this.device);
        this.deviceService.saveDevice(newDevice).subscribe(val =>{
            if(val){
                this.uiService.showToast("Device Saved!!!");
            }
        })
        this.resetUI();
    }
    closeModal(){
        this.viewCtrl.dismiss();
    }
    resetUI(){
        this.device = {
            deviceId: undefined,
            deviceName: '',
            deviceMake: '',
            deviceModel: '',
            deviceSN: '',
            isActive:true,
            isAvailable:true
        };
    }
}
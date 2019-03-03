import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { DeviceComponent } from '../../components/device/device.component';
import { DeviceService } from '../../services/device.service';
import { TransactionComponent } from '../../components/transaction/transaction.component';
import { Device } from '../../model/device.model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, 
              private modalCtrl:ModalController,
              private deviceService:DeviceService) {

  }

  ngOnInit(){
    this.deviceService.getDevices();
  }

  addNewDevice(){
    // let newDevice = this.modalCtrl.create(DeviceComponent);
    // newDevice.present();
    this.navCtrl.push(DeviceComponent);
  }

  tansaction(device:Device){

    let newDevice = this.modalCtrl.create(TransactionComponent,{deviceObj:device});
    newDevice.present();
  }

}

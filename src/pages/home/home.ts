import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { DeviceComponent } from '../../components/device/device.component';
import { DeviceService } from '../../services/device.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, 
              private modalCtrl:ModalController,
              private deviceService:DeviceService) {

  }

  addNewDevice(){
    let newDevice = this.modalCtrl.create(DeviceComponent);
    newDevice.present();
  }

}

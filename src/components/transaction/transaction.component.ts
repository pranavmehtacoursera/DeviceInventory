import { Component} from '@angular/core';
import { Transaction, TransactionType } from '../../model/transaction.class';
import { NavParams, ViewController } from 'ionic-angular';
import { Device } from '../../model/device.model';

@Component({
    selector: 'transaction-component',
    templateUrl: 'transaction.component.html'
})
export class TransactionComponent{
    public trans = {};
    public trans_type = TransactionType;
    
    constructor(private params: NavParams,private viewCtrl:ViewController){
        let inputDevice:Device = params.get('deviceObj');
        
        this.trans = new Transaction({
            trans_type : inputDevice.isAvailable ? TransactionType.CHECKOUT : TransactionType.CHECKIN,
            trans_date : new Date().toLocaleString(),
            trans_deviceId: inputDevice.deviceId,
            trans_deviceName: inputDevice.deviceName,
            trans_borrower: '',
            trans_witness : ''
        });
    }
    
    saveTrans(){
        
    }
    closeModal(){
        this.viewCtrl.dismiss();
    }
}
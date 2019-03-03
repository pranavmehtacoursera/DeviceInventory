import { Component} from '@angular/core';
import { Transaction, TransactionType } from '../../model/transaction.class';
import { NavParams, ViewController } from 'ionic-angular';
import { Device } from '../../model/device.model';
import { TransactionService } from '../../services/transaction.service';
import { UIService } from '../../services/ui.service';

@Component({
    selector: 'transaction-component',
    templateUrl: 'transaction.component.html'
})
export class TransactionComponent{
    public trans:Transaction;
    public trans_type = TransactionType;
    
    constructor(private params: NavParams,private viewCtrl:ViewController,
        private transService:TransactionService,
        private uiService:UIService){
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
    
    saveTransaction(){
        this.transService.saveTransaction(this.trans).subscribe(result=>{
            if(result){
                this.uiService.showToast("Transaction is Saved!!!");
            }
        })
    }
    closeModal(){
        this.viewCtrl.dismiss();
    }
}
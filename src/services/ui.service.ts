import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Injectable()
export class UIService{

    constructor(public toastCtrl: ToastController) { }
    
    public showToast(message:string){
        const toast = this.toastCtrl.create({
            message: message,
            duration: 3000
          });
          toast.present();
    }
}
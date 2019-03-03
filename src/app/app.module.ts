import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DeviceComponent } from '../components/device/device.component';
import { DataService } from '../services/data.service';
import { DeviceService } from '../services/device.service';
import { UIService } from '../services/ui.service';
import { TransactionComponent } from '../components/transaction/transaction.component';
import { TransactionService } from '../services/transaction.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    DeviceComponent,
    TransactionComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: '__pmdevicedb',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    DeviceComponent,
    TransactionComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DeviceService,
    DataService,
    UIService,
    TransactionService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

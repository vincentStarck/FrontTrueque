import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { NativeStorage } from '@ionic-native/native-storage';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HttpModule } from '@angular/http';
import {DetailsPage} from '../pages/details/details';
import {LoginPage} from '../pages/login/login';
import {AddAccount} from '../pages/account/addAccount';
import { Facebook } from '@ionic-native/facebook';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailsPage,
    LoginPage,
    AddAccount
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailsPage,
    LoginPage,
    AddAccount
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeStorage,
    Facebook,
          
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

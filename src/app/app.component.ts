import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from "ionic-angular";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { NativeStorage } from '@ionic-native/native-storage';
import { HomePage } from '../pages/home/home';
import { SharedService } from '../services/sharedService';
import { User } from '../model/User'


@Component({
  templateUrl: 'app.html',
  providers: [NativeStorage]
})
export class MyApp {
  @ViewChild(Nav) nav;

  constructor(private platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    private nativeStorage: NativeStorage, private sharedService: SharedService) {
    platform.ready().then(() => {
      // Here we will check if the user is already logged in
      // because we don't want to ask users to log in each time they open the app
      let env = this;

       env.nav.push(HomePage);  //Temporal
      // env.nativeStorage.getItem('user')
      //   .then(function (data) {
      //     console.log('User was looged previosly, data user are:', User)
      //     let userLogged = new User(data.email, data.name);
      //     userLogged.picture = data.picture;
      //     env.sharedService.setUser(userLogged);
      //     // user is previously logged and we have his data
      //     // we will let him access the app
      //     env.nav.push(HomePage);
      //     splashScreen.hide();
      //   }, function (error) {
      //     //we don't have the user data so we will ask him to log in
      //     console.log('User has not logget , redirect to loginPage')
      //     env.nav.push(LoginPage);
      //     splashScreen.hide();


      //   });

      statusBar.styleDefault();

    });
  }
}


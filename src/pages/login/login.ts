import { Component } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AddAccount } from '../account/addAccount';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [NativeStorage, Facebook]

})
export class LoginPage {
  public username;
  public password;

  constructor(private nav: NavController, private fb: Facebook, private nativeStorage: NativeStorage) {

  }
  goToHome() {
    this.nav.push(HomePage, { username: this.username });
  }
  createAccount() {
    this.nav.push(AddAccount);

  }

  doFbLogin() {
    let permissions = new Array();
    //the permissions your facebook app needs from the user
    permissions = ['public_profile', 'user_friends', 'email']
    let env = this;


    env.fb.login(permissions)
      .then(function (response) {
        console.log('Logged into Facebook!', response);
        let userId = response.authResponse.userID;
        let params = new Array();

        env.fb.api("/me?fields=name,gender", params)
          .then(function (user) {
            console.log('Getting user from Facebook success', user);
            user.picture = "https://graph.facebook.com/" + userId + "/picture?type=large";
            env.nativeStorage.setItem('user',
              {
                name: user.name,
                gender: user.gender,
                picture: user.picture
              })
              .then(function () {
                env.nav.push(HomePage);
              }, function (error) {
                console.log(error);
              })


          }, function (error) {
            console.log('Error getting user from Facebook', error);
          });

      }, function (error) {
        console.log('Error logging into Facebook', error)
      });

  }
}

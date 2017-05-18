import { Component } from '@angular/core';
import { Facebook } from '@ionic-native/facebook';
import { NativeStorage } from '@ionic-native/native-storage';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AddAccount } from '../account/addAccount';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
    providers:[NativeStorage,Facebook]

})
export class LoginPage {
    public username;
    public password;
    FB_APP_ID: number = 685579308308753;
    constructor(private nav: NavController,private nativeStorage: NativeStorage, private faceBook :Facebook) {
       this.faceBook.browserInit(this.FB_APP_ID, "v2.8");

    }
    goToHome() {
        this.nav.push(HomePage, { username: this.username });
    }
    createAccount() {
        this.nav.push(AddAccount);

    }

     doFbLogin(){
    let permissions = new Array();
    let nav = this.nav;
    //the permissions your facebook app needs from the user
    permissions = ["public_profile"];


    this.faceBook.login(permissions)
    .then(function(response){
      let userId = response.authResponse.userID;
      let params = new Array();

      //Getting name and gender properties
      this.faceBook.api("/me?fields=name,gender", params)
      .then(function(user) {
        user.picture = "https://graph.facebook.com/" + userId + "/picture?type=large";
        //now we have the users info, let's save it in the NativeStorage
        this.nativeStorage.setItem('user',
        {
          name: user.name,
          gender: user.gender,
          picture: user.picture
        })
        .then(function(){
         this.nav.push(HomePage);
        }, function (error) {
          console.log(error);
        })
      })
    }, function(error){
      console.log(error);
    });
  }
}

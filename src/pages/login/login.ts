import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {HomePage} from '../home/home';
@Component({
    selector:'page-login',
    templateUrl:'login.html'
  
})
export class LoginPage{
    public username;
    public password;
    constructor(private nav:NavController){
      

    }
    goToHome(){
        this.nav.push(HomePage,{username:this.username});
    }
}
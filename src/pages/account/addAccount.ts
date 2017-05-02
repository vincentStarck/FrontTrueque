import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';


@Component({
    selector:'page-addAcount',
    templateUrl:'addAccount.html'
  
})
export class AddAccount{
    public username;
    public password;
    constructor(private nav:NavController){
      

    }
   
    createAccount(){

    }
}
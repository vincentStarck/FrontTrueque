import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';


@Component({
    selector:'page-addAcount',
    templateUrl:'addAccount.html'

})
export class AddAccount{
    public username;
    public password;
    public confirmPassword;
    public email;
    constructor(private nav:NavController){


    }

    createAccount(){

      if(this.password == this.confirmPassword){


      }
      else{


      }

    }
}

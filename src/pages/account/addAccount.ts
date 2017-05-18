import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsuarioService } from '../../services/usuarioService';


@Component({
    selector: 'page-addAcount',
    templateUrl: 'addAccount.html',
    providers:[UsuarioService]

})
export class AddAccount {
    public responseAddNewUser;
    public username;
    public password;
    public confirmPassword;
    public email;
    constructor(private nav: NavController, private usuarioService :UsuarioService) {


    }

    createAccount() {

        if (this.password == this.confirmPassword) {
             this.usuarioService.addNewUser({email:this.email,password:this.password}).subscribe(
             data => {this.responseAddNewUser = data.json();},
             err => console.error(err),
               () => console.log('createAccount completed',this.responseAddNewUser)
             );

           
        }
        else {
            alert('!=')

        }

    }
}

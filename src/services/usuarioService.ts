import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class UsuarioService {
    constructor(private http: Http) {

    }
    addNewUser(newUser) {
        console.info('add new user');
        console.info(newUser)
        let response = this.http.post('http://localhost:8080/api/newUser', newUser);
        console.info('response service newUSer',response)
        return response;
    }
}
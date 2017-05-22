import { Injectable } from '@angular/core';
import { User } from '../model/User'
@Injectable()
export class SharedService {


    private user: User
    getUser() {
        return this.user;
    }
    setUser(user: User) {
        this.user = user;

    }
}

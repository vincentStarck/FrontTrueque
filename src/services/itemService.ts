import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Item } from '../model/item';

@Injectable()
export class ItemService {

    public items: [Item]
    constructor(private http: Http) {

    }

    //this function return all items, in dba
    getListItems() {
        //  let items = this.http.get('http://localhost:8080/getItems');

        this.items = [
            new Item('description 1', null),
            new Item('description 2', null),
            new Item('description 3', null),
            new Item('description 4', null)

        ]
      
        return this.items;
        

    }
}
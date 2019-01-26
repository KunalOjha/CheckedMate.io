import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { v4 as uuid } from 'uuid';
import { Item } from '../../models.ts/item.model';

@Injectable()
export class ItemStorageService {

    constructor(private http: Http) {}

    storeItem(item: Item) {
        const userId: string = sessionStorage.getItem('uid')
        const itemId: string = uuid();
        return this.http.put(`https://checkthis-io.firebaseio.com/users/${userId}/to-do/${itemId}.json`, item);
    }
}
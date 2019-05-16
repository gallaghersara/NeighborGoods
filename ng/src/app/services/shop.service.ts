import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../models/item.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http: HttpClient) {

  }
  getItems(): Observable<Item[]> {
    // console.log('shop service clicked') //---------------------- test
    return this.http.get<Item[]>('http://localhost:4000/api/products');
  }
//   getBook(id) {
//   return this.http.get('http://localhost:4000/api/products')
//     .pipe(map(data => {}
//     .find(x => x.id == id)))
    
// }
}

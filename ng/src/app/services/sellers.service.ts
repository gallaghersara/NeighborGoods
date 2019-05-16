import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Seller } from '../models/seller.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SellersService {

  constructor(private http: HttpClient) { }
  getItems(): Observable<Seller[]> {
    // console.log('shop service clicked') //---------------------- test
    return this.http.get<Seller[]>('http://localhost:4000/api/products');
  }
}

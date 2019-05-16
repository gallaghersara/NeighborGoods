import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http:HttpClient) { 
  //   showTodayDate() {
  //     let ndate = new Date();
  //     return ndate;
  //  }
  }
  registerUser(user){
   return this.http.post('http://localhost:4000/api/users', user);
   
  }

  httpdata;

  displaydata(data) {
    console.log(data)
    this.httpdata = data.json()
  }
  // displaydata(data){
  //   this.httpdata = data.json()
  // }
  fchange() {
    console.log('register clicked')
    this.http.get('http://localhost:4000/api/users').subscribe((data) => {
       this.displaydata(data) }, (err) => {
      console.log(err)
    })
  }
}

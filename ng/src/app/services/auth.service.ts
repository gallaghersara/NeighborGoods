import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: any;
  constructor(private http: HttpClient) { }

  registerUser(user) {
    let headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');
    // (url,JSON.stringify({username,password}), { options: { headers: headers; } })
    return this.http.post('http://localhost:4000/users/register', user, { headers: headers })
      // .map(res => res.json())
      .pipe(map(data => { })).subscribe(result => {
        console.log(result);
      });
    // .pipe(map(res => res.json()));
    // .pipe(
    //   map(responce=>responce.json()),
    //   catchError(this.handleError)
    // )
  }
}

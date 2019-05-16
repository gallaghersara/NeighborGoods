import { Component, OnInit } from '@angular/core';
// import { ApiService } from '../services/api.service';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { NgFlashMessageService } from "ng-flash-messages";
import { Router } from '@angular/router'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  fname: String;
  lname: String;
  username: String;
  email: String;
  password: String;
  // cars = [];
  httpdata

  constructor(
    private _vs: ValidateService,
    private _fms: NgFlashMessageService,
    private _as: AuthService,
    private _router: Router
  ) { }
  // constructor(private _as:ApiService) { }

  ngOnInit() {
  }


  // private generateId() {
  //   let str = "";
  //   let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_";

  //   for (var i = 0; i < 10; i++) {
  //     str += possible.charAt(Math.floor(Math.random() * possible.length));
  //   }

  //   return str;
  // }

  // displaydata(data) {
  //   console.log(data)
  //   this.httpdata = data.json()
  // }
  // displaydata(data){
  //   this.httpdata = data.json()
  // }
  // fchange() {

  //   console.log('clicked')
  //    const user = '';
  //   this._as.registerUser(user).subscribe(res=>{
  //     console.log()
  //   })

  // }

  onRegisterSubmit() {
    const user = {
      fname: this.fname,
      lname: this.lname,
      username: this.username,
      email: this.email,
      password: this.password
    };

    //Required Fields
    if (!this._vs.validateRegister(user)) {
      this._fms.showFlashMessage({
        messages: ["Please fiil in all fields"],
        dismissible: false,
        timeout: 2000,
        type: 'danger'
      });
      return false
    }

    //Required Email
    if (!this._vs.validateEmail(user.email)) {
      this._fms.showFlashMessage({
        messages: ["Please use a valid email"],
        dismissible: false,
        timeout: 2000,
        type: 'danger'
      });
      return false
    }
    //RegisterUser user
    this._as.registerUser(user),(data => {
      if (data.success) {
        ({
          messages: ["You are now registerd and log in"],
          dismissible: false,
          timeout: 2000,
          type: 'saccess'
        })
        // this._router.navigate(['/login'])
      } else {
        ({
          messages: ["Somthing went wromg"],
          dismissible: false,
          timeout: 2000,
          type: 'danger'
        })
        // this._router.navigate(['/register'])
      }
    })

  }
}
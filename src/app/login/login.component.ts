import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

import { LoginService, LoginResponse } from '../service/login.service';
import { Credentials } from '../model/credentials';
import { COOKIE_NAME } from '../const/const'
import { UserDataService } from '../service/user-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public error : string = " ";
  public email : string;
  public pass : string;

  constructor(
    private userDataService : UserDataService,
    private cookieService : CookieService,
    private loginService : LoginService,
    private router: Router) { }

  ngOnInit() {}

  public tryLogin() : void {
    this.error = "";
    var mailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(this.email == null || this.email == "" ) {
      this.error = "Inserire indirizzo mail";
      return;
    }
    if( !mailRegex.test(String(this.email).toLowerCase())) {
      this.error = "Indirizzo non valido";
      return;
    }

    if(this.pass == null || this.pass == "" ) {
      this.error = "Inserire password";
      return;
    }
    if(this.pass.length < 8) {
      this.error = "Password troppo corta";
      return;
    }

    var credentials = new Credentials(this.email, this.pass);
    this.loginService.login(credentials)
      .subscribe(res =>this.loginResult(<LoginResponse> res));
  }

  private loginResult(res : LoginResponse) : void {
    this.error = res.message;
    if(res.result) {
      this.cookieService.set(COOKIE_NAME, res.token);
      this.userDataService.setToken(res.token);
      this.router.navigate(['/dashboard']);
    }
    
  }

}

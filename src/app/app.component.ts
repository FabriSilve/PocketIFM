import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UserDataService } from './service/user-data.service';
import { Router } from '@angular/router';
import { COOKIE_NAME } from './const/const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public showCookieAlert : boolean = true;

  constructor(
    private cookieService : CookieService,
    private userDataService : UserDataService,
    private router : Router
  ) {
    if(this.cookieService.check(COOKIE_NAME)) {
      var tkn = this.cookieService.get(COOKIE_NAME);
      this.userDataService.setToken(tkn);
      this.router.navigate(['/dashboard']);
      this.showCookieAlert = false;
    }
  }
  
  public closeCookieAlert() {
    this.showCookieAlert = false;
  }
}

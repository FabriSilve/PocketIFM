import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { COOKIE_NAME } from '../const/const';
import { Router } from '@angular/router';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  public menu : boolean = false;

  constructor(
    private cookieService : CookieService,
    private router: Router
  ) { }

  public logout() : void {
    this.cookieService.delete(COOKIE_NAME);
    this.router.navigate(['/login']);
  }
}

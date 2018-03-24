import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public containerStyle() : any {
    return {
      'background' : 'url(assets/notification-light.jpg)',
      'height': '20%',
      'beckgraund-attachment': 'fixed',
      'background-repeat':'no-repeat',
      'background-size': 'cover',
      'background-position': 'center',
      'width': '200px'
    }
  }

}

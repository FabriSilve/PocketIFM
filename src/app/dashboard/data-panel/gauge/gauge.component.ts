import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.css']
})
export class GaugeComponent implements OnInit {

  @Input() public value : number;
  public rotation : number;

  private 

  constructor() {
  }

  ngOnInit() {
    var degree = (this.value*180/100 > 180) ? 180 : this.value*180/100;
    this.rotation = (degree < 15)? 195 : 180 + degree;
  }

  public setStyle() : any {
    return {
      'transform' : 'rotate('+this.rotation+'deg)'
    }
  }

}

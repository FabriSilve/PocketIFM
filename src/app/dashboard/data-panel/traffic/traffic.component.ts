import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { TrafficFlag, TrafficData } from '../../../model/traffic';
import { TrafficService } from '../../../service/traffic.service';

@Component({
  selector: 'traffic',
  templateUrl: './traffic.component.html',
  styleUrls: ['./traffic.component.css']
})
export class TrafficComponent implements OnInit {

  @Input() public durActive : boolean;
  @Input() public trafficFlag : TrafficFlag;

  private chartWidth : number;
  private chartHeight : number;
  private label : boolean = true;

  @ViewChild('trafficChart') trafficChart;
  public trafficData : TrafficData = new TrafficData();
  private trafficServer : TrafficData;
  private interval : number = 7;

  private getTrafficData() : void {
    this.trafficService.getTraffic().subscribe(
      data => { 
        if(data != null) {
          this.trafficServer = <TrafficData> data;
          this.trafficDraw();
        }
      }
    );
  }
  private trafficDraw() : void {
    this.trafficData.week_calls = this.trafficChartItem(this.trafficServer.week_calls);
    this.trafficData.week_dur = this.trafficChartItem(this.trafficServer.week_dur);
    this.trafficData.weeks_calls = this.trafficChartItem(this.trafficServer.weeks_calls);
    this.trafficData.weeks_dur = this.trafficChartItem(this.trafficServer.weeks_dur);
    this.trafficData.month_calls = this.trafficChartItem(this.trafficServer.month_calls);
    this.trafficData.month_dur = this.trafficChartItem(this.trafficServer.month_dur);
  }
  private trafficChartItem(dataTable : object) : object {
    return {
      chartType: 'ColumnChart',
      dataTable: dataTable,
      options: {
        chartArea : { left : '10%', top: '5%', bottom: '20%', right: '5%', },
        backgroundColor: { fill: 'trasparent'},
        height: this.chartHeight, width: this.chartWidth,
        legend: { position: 'bottom'},
        animation:{
          duration: 1000,
          easing: 'out',
          startup: true
        },
        colors : ['#99b3ff', '#3366ff', '#0033cc']
      }
    };
  }

  private incrementInterval() : void {
    switch(this.interval) {
      case 7 :
        this.trafficShowWeeks();
        break;
      case 14 :
        this.trafficShowMonth();
        break;
      case 30 : break;
      default :
        this.trafficShowWeek();
        break;
    }
    this.trafficDraw();
  }

  private decrementInterval() : void {
    switch(this.interval) {
      case 7 :
        break;
      case 14 :
        this.trafficShowWeek();
        break;
      case 30 :
        this.trafficShowWeeks();
        break;
      default : this.interval = 30;
    }
    this.trafficDraw();
  }
  public trafficShowWeek() : void {
    this.interval = 7;
    if(this.durActive) 
      this.trafficFlag = TrafficFlag.WEEK_DUR;
    else
      this.trafficFlag = TrafficFlag.WEEK_CALLS;
  }
  public trafficShowWeeks() : void {
    this.interval = 14;
    if(this.durActive) 
      this.trafficFlag = TrafficFlag.WEEKS_DUR;
    else
      this.trafficFlag = TrafficFlag.WEEKS_CALLS;
  }
  public trafficShowMonth() : void {
    this.interval = 30;
    if(this.durActive) 
      this.trafficFlag = TrafficFlag.MONTH_DUR;
    else
      this.trafficFlag = TrafficFlag.MONTH_CALLS;
  }

  constructor(
    private trafficService : TrafficService,
  ) {
    var landscape = true;
    if(screen.availWidth < screen.availHeight) landscape = false;
    if (screen.availWidth <= 640) { 
      this.chartWidth = screen.availWidth*0.9;
      this.label = false;
    } else if (screen.availWidth > 640 && screen.availWidth <= 768){ 
      this.chartWidth = screen.availWidth*0.80;
    } else if (screen.availWidth > 768 && screen.availWidth <= 1024){ 
      this.chartWidth = screen.availWidth*0.8;
    } else if(screen.availWidth > 1024) {
      this.chartWidth = screen.availWidth*0.70;
    }
    if(landscape) {
      this.chartHeight = screen.availHeight*0.35;
    } else {
      this.chartHeight = this.chartWidth*0.5;
    }
    
  }

  ngOnInit() {
    this.getTrafficData();
  }

}

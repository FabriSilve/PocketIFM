import { Component, OnInit } from '@angular/core';
import { DailyData } from '../../model/daily-data';
import { DataPanelService } from '../../service/data-panel.service';
import { TrafficFlag } from '../../model/traffic';

@Component({
  selector: 'data-panel',
  templateUrl: './data-panel.component.html',
  styleUrls: ['./data-panel.component.css']
})
export class DataPanelComponent implements OnInit {

 //DAILYDATA
 private prestazione : object;
 private credito : object;
 public dailyDataServer : DailyData;
 private daysLeft : number;
 private until : Date;
 private quantity : number;
 private durations : number;

 private getDailyData() : void {
   this,this.dataPanelService.getNotification().subscribe(
     data => {
       if(data != null) {
         this.dailyDataServer = <DailyData> data,
         this.dailyDataDraw();
       }
     });
 }
 private dailyDataDraw() : void {
 
   this.daysLeft =  this.dailyDataServer.daysLeft;
   this.until = this.dailyDataServer.until;
   this.quantity = this.dailyDataServer.quantity;
   this.durations = this.dailyDataServer.durations;
 }

 private dailyDataClick(value : boolean) : void {
   if (this.durActive == value) return;
   this.durActive = value;
   if (this.trafficFlag % 2 == 0) 
     this.trafficFlag--; 
   else
     this.trafficFlag++;
 }

 //TRAFFIC
 public durActive : boolean = false;
 public trafficFlag : TrafficFlag = TrafficFlag.WEEK_CALLS;

 constructor(
   private dataPanelService : DataPanelService) {
  }
 
  ngOnInit() {
    this.daysLeft = 0;
    this.getDailyData();
  }  

}

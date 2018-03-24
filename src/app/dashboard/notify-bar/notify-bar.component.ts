import { Component, OnInit } from '@angular/core';
import { Notify } from '../../model/notify';
import { NotificationService } from '../../service/notification.service';
import { UserDataService } from '../../service/user-data.service';

@Component({
  selector: 'notify-bar',
  templateUrl: './notify-bar.component.html',
  styleUrls: ['./notify-bar.component.css']
})
export class NotifyBarComponent implements OnInit {

  public id : string;
  private notificationToShow : Notify[];
  private notificationNumber : number;

  public notification : Notify[];

  constructor(
    private userService : UserDataService,
    private notificationService : NotificationService
  ) {
  }

  ngOnInit() {
    this.getNotification();
    this.updateData();
  }

  private getNotification() : void {
    this.notificationService.getNotification().subscribe(
      data => {
        if(data != null && (<Notify[]> data).length > 0) {
          this.notification = <Notify[]> data;
          this.notificationNumber = this.notification.filter(notify => notify.read === false).length;
          this.NotificationToShowInit();
        }
      }
    );
  }

  public close( id : string) : void {
    this.NotificationToShowInit();
  }

  private CloseAll() : void {
    this.notificationToShow.forEach( (notify) => { notify.show = false });
    this.NotificationToShowInit();
  }

  private NotificationToShowInit() : void {
    this.notificationToShow = this.notification.filter(notify => notify.show === true && notify.read === false);
  }

  //Update Data every 60 sec 
  private updateData() {
    setInterval(() => {
      this.getNotification();
    }, 60000);
  }

}

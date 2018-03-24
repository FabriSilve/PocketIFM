import { Component, OnInit } from '@angular/core';
import { Notify } from '../model/notify';
import { NotificationService } from '../service/notification.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  public notificationToShow : Notify[] = [];
  public notification : Notify[] = []; 
  private notifyToRead : string = null;
  public notifySelected : Notify;

  public search : string = "";

  constructor(
    private route: ActivatedRoute,
    private notificationService : NotificationService,
    //private userData : UserDataService
  ) {
    //this.id = userData.getUserId();
  }

  ngOnInit() {
    if(this.route.snapshot.paramMap.get('id') != null )
      this.notifyToRead = this.route.snapshot.paramMap.get('id');
    this.getNotification();
    this.updateData();
  }

  private getNotification() : void {
    this.notificationService.getNotification().subscribe(
      data => {
        if(data != null && (<Notify[]> data).length > 0) {
          this.notification = <Notify[]> data;
          this.notificationToShow = this.notification;
          if(this.notifyToRead != null) this.selectNotify(Number(this.notifyToRead));
          else {
            var lastId = 0;
            this.notificationToShow.forEach(n => { if (n.id > lastId) {lastId = n.id; }});
            this.selectNotify(lastId);
          }
        }
      });
  }

  private selectNotify(id : number) : void {
    this.notifySelected = this.notificationToShow.find(notify => notify.id === id);
    this.notifySelected.read = true;

    this.notificationService.readNotify(this.notifySelected);
  }

  public deleteNotify(notify : Notify) : void {
    this.notification = this.notification.filter(n => n !== notify);
    this.notificationToShow = this.notification;
    this.notificationService.deleteNotify(notify).subscribe();
  }

  public notificationSearch(event : any) {
    this.notificationToShow = this.notification.filter(n => String(n.title).toLowerCase().indexOf(String(event.target.value).toLowerCase()) >= 0 );
  }

  public clearSearch() : void {
    this.search = "";
    this.notificationToShow = this.notification;
  }

  private updateData() {
    setInterval(() => {
      this.getNotification();
    }, 10*1000);
  }

  public containerStyle() : any {
    return {
      'background' : 'url(assets/notification-light.jpg)',
      'background-repeat':'no-repeat',
      'background-size': 'cover',
      'background-position': 'left',
      'width': '100%',
      'height': '100%',
      'padding-top':'10px',
      'position': 'fixed',
      'top':'5%',
      'left':'0',
      'z-index': '-2',
    }
  }

  public listStyle() : any {
    var height = (screen.width > 990)? '90vh' : '45vh';
    return {
      'height': height,
      'overflow-y': 'scroll',
    }
  }

}

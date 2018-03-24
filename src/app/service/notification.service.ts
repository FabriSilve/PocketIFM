import { Injectable } from '@angular/core';
import { Notify } from '../model/notify';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { NOTIFICATION } from '../const/const';
import { UserDataService } from './user-data.service';

@Injectable()
export class NotificationService {

  private token : string;
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http : HttpClient,
    private dataService : UserDataService
  ) {
    this.token = dataService.getToken();
    this.addNotify();
  }

  /**
   * ONLY FOR DYNAMIC PRESENTATION
   */
  private cont : number = 0;
  private id : number = 4;
  public addNotify() : void {
    setInterval(() => {
      var notify : Notify = null;
      var idAdded = this.id++;
      switch(this.cont) {
        case 0: 
          notify = new Notify(idAdded,'Successo!','Notifica azione eseguita con successo',"success",true,false,new Date(), "Admin",false);
          this.cont++;
          break;
        case 1:
          notify = new Notify(idAdded,'Critico!','Notifica importante di situazione critica',"danger",true,false,new Date(), "Admin",false);
          this.cont++;
          break;
        case 2:
          notify = new Notify(idAdded,'Attenzione!','Siamo vicini ad una situazione critica',"warning",true,false,new Date(), "Admin",false);
          this.cont++;
          break;
        default:
          notify = new Notify(idAdded,'Comunicazione','Comunicazione standard all\'utente',"default",true,false,new Date(), "Admin",false);
          this.cont = 0;
      }
      this.http.post<Notify>(NOTIFICATION, notify, this.httpOptions).pipe(
        tap((n : Notify)=> console.log("Notify "+n.id+" added")),
        catchError(this.handleError<Notify>("NOTIFY_POST"))
      ).subscribe();
    }, 45*1000);
  }

  public getNotification() : Observable<Notify[]> {
    return this.http.get<Notify[]>(NOTIFICATION)
    .pipe(
      tap(result => console.log("NOTIFICATION")),
      catchError(this.handleError<Notify[]>('NOTIFICATION_GET', [] ))
    );
  }

  public readNotify(notify : Notify) : void {
    notify.read = true;
    this.http.put(NOTIFICATION, notify, this.httpOptions).pipe(
      tap(_ => console.log("Notify "+notify.id+" read")),
      catchError(this.handleError<any>('NOTIFY_PUT'))
    )
  }

  public deleteNotify(notify : Notify) : Observable<Notify> {
    var url : string = NOTIFICATION+"/"+notify.id;
    return this.http.delete<Notify>(url, this.httpOptions).pipe(
      tap(_ => console.log("Notify "+notify.id+" deleted")),
      catchError(this.handleError<Notify>("NOTIFy_DELETE"))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation);
      console.error(error);
      return of(result as T);
    };
  }

}

const notify0 = new Notify(0,'Successo!','Notifica azione eseguita con successo',"success",true,false,new Date(), "Admin",false);
const notify1 = new Notify(1,'Critico!','Notifica importante di situazione critica',"danger",true,false,new Date(), "Admin",false);
const notify2 = new Notify(2,'Attenzione!','Siamo vicini ad una situazione critica',"warning",true,false,new Date(), "Admin",false);
const notify3 = new Notify(3,'Comunicazione','Comunicazione standard all\'utente',"default",true,false,new Date(), "Admin",false);
export const NOTIFICATION_RESPONSE : Notify[] = [notify0, notify1, notify2, notify3 ];

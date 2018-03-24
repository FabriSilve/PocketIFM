import { Injectable } from '@angular/core';
import { DailyData } from '../model/daily-data';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { UserDataService } from './user-data.service';
import { DATAPANEL } from '../const/const';
import { Observable } from 'rxjs/Observable';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Injectable()
export class DataPanelService {

  private token : string;
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http : HttpClient,
    private dataService : UserDataService
  ) {
    this.token = dataService.getToken();
  }

  public getNotification() : Observable<DailyData> {
    return this.http.get<DailyData>(DATAPANEL)
    .pipe(
      tap(result => console.log("DATAPANEL")),
      catchError(this.handleError<DailyData>('DATAPANEL_GET', null))
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

//TODO dynamic
var days = Math.floor(Math.random() * 15) + 5;
var date = new Date(new Date().getTime() + days*24 * 60 * 60 * 1000);
export const DATAPANEL_RESPONSE = new DailyData(
  Math.floor(Math.random() * 90) + 15,
  Math.floor(Math.random() * 500) + 100,
  Math.floor(Math.random() * 600) + 200,
  198,
  Math.floor(Math.random() * 90) + 15,
  date,
  Math.floor(Math.random() * 20) + 7
);

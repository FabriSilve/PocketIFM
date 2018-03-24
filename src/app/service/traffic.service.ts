import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { UserDataService } from './user-data.service';
import { Observable } from 'rxjs/Observable';
import { TrafficData } from '../model/traffic';
import { TRAFFIC } from '../const/const';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Injectable()
export class TrafficService {

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

  public getTraffic() : Observable<TrafficData> {
    return this.http.get<TrafficData>(TRAFFIC)
    .pipe(
      tap(result => console.log("TRAFFIC")),
      catchError(this.handleError<TrafficData>('TRAFFIC_GET', null))
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
function dataToString(d : Date) : string {
  var weekDay = ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"];
  var month = ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"];

  return weekDay[d.getDay()] + " " + d.getDate() + ", " + month[d.getMonth()];
}
export const TRAFFIC_RESPONSE : TrafficData = {
  week_calls : [
    [ "Data", "Inbound", "Outbound", "Total" ],
    [ dataToString(new Date(new Date().getTime() - 24 * 60 * 60 * 1000)), 182, 168, 350 ],
    [ dataToString(new Date(new Date().getTime() - 2*24 * 60 * 60 * 1000)), 212, 167, 379 ],
    [ dataToString(new Date(new Date().getTime() - 3*24 * 60 * 60 * 1000)), 164, 177, 341 ],
    [ dataToString(new Date(new Date().getTime() - 4*24 * 60 * 60 * 1000)), 351, 154, 505 ],
    [ dataToString(new Date(new Date().getTime() - 5*24 * 60 * 60 * 1000)), 249, 134, 383 ],
    [ dataToString(new Date(new Date().getTime() - 6*24 * 60 * 60 * 1000)), 197, 201, 398 ],
    [ dataToString(new Date(new Date().getTime() - 7*24 * 60 * 60 * 1000)), 224, 134, 358 ]
  ],
  week_dur : [
    [ "Data", "Inbound", "Outbound", "Total" ],
    [ dataToString(new Date(new Date().getTime() - 24 * 60 * 60 * 1000)), 102, 98, 200 ],
    [ dataToString(new Date(new Date().getTime() - 2*24 * 60 * 60 * 1000)), 173, 105, 278 ],
    [ dataToString(new Date(new Date().getTime() - 3*24 * 60 * 60 * 1000)), 124, 95, 219 ],
    [ dataToString(new Date(new Date().getTime() - 4*24 * 60 * 60 * 1000)), 98, 124, 222 ],
    [ dataToString(new Date(new Date().getTime() - 5*24 * 60 * 60 * 1000)), 150, 134, 284 ],
    [ dataToString(new Date(new Date().getTime() - 6*24 * 60 * 60 * 1000)), 161, 106, 267 ],
    [ dataToString(new Date(new Date().getTime() - 7*24 * 60 * 60 * 1000)), 98, 104, 202 ],
  ],
  weeks_calls : [
    [ "Data", "Inbound", "Outbound", "Total" ],
    [ dataToString(new Date(new Date().getTime() - 24 * 60 * 60 * 1000)), 604, 407, 1011 ],
    [ dataToString(new Date(new Date().getTime() - 7*24 * 60 * 60 * 1000)), 784, 694, 1478 ],
    [ dataToString(new Date(new Date().getTime() - 2*7*24 * 60 * 60 * 1000)), 876, 428, 1404 ],
    [ dataToString(new Date(new Date().getTime() - 3*7*24 * 60 * 60 * 1000)), 768, 641, 1409 ],
    [ dataToString(new Date(new Date().getTime() - 4*7*24 * 60 * 60 * 1000)), 603, 408, 1011 ],
    [ dataToString(new Date(new Date().getTime() - 5*7*24 * 60 * 60 * 1000)), 732, 685, 1417 ],
    [ dataToString(new Date(new Date().getTime() - 6*7*24 * 60 * 60 * 1000)), 896, 654, 1550 ]
  ],
  weeks_dur : [
    [ "Data", "Inbound", "Outbound", "Total" ],
    [ dataToString(new Date(new Date().getTime() - 24 * 60 * 60 * 1000)), 604, 407, 1011 ],
    [ dataToString(new Date(new Date().getTime() - 7*24 * 60 * 60 * 1000)), 784, 694, 1478 ],
    [ dataToString(new Date(new Date().getTime() - 2*7*24 * 60 * 60 * 1000)), 876, 428, 1404 ],
    [ dataToString(new Date(new Date().getTime() - 3*7*24 * 60 * 60 * 1000)), 768, 641, 1409 ],
    [ dataToString(new Date(new Date().getTime() - 4*7*24 * 60 * 60 * 1000)), 603, 408, 1011 ],
    [ dataToString(new Date(new Date().getTime() - 5*7*24 * 60 * 60 * 1000)), 732, 685, 1417 ],
    [ dataToString(new Date(new Date().getTime() - 6*7*24 * 60 * 60 * 1000)), 896, 654, 1550 ]
  ],
  month_calls : [
    [ "Data", "Inbound", "Outbound", "Total" ],
    [ dataToString(new Date(new Date().getTime() - 24 * 60 * 60 * 1000)), 604, 407, 1011 ],
    [ dataToString(new Date(new Date().getTime() - 30*24 * 60 * 60 * 1000)), 784, 694, 1478 ],
    [ dataToString(new Date(new Date().getTime() - 2*30*24 * 60 * 60 * 1000)), 876, 428, 1404 ],
    [ dataToString(new Date(new Date().getTime() - 3*30*24 * 60 * 60 * 1000)), 768, 641, 1409 ],
    [ dataToString(new Date(new Date().getTime() - 4*30*24 * 60 * 60 * 1000)), 603, 408, 1011 ],
    [ dataToString(new Date(new Date().getTime() - 5*30*24 * 60 * 60 * 1000)), 732, 685, 1417 ],
    [ dataToString(new Date(new Date().getTime() - 6*30*24 * 60 * 60 * 1000)), 896, 654, 1550 ]
  ],
  month_dur : [
    [ "Data", "Inbound", "Outbound", "Total" ],
    [ dataToString(new Date(new Date().getTime() - 24 * 60 * 60 * 1000)), 604, 407, 1011 ],
    [ dataToString(new Date(new Date().getTime() - 30*24 * 60 * 60 * 1000)), 784, 694, 1478 ],
    [ dataToString(new Date(new Date().getTime() - 2*30*24 * 60 * 60 * 1000)), 876, 428, 1404 ],
    [ dataToString(new Date(new Date().getTime() - 3*30*24 * 60 * 60 * 1000)), 768, 641, 1409 ],
    [ dataToString(new Date(new Date().getTime() - 4*30*24 * 60 * 60 * 1000)), 603, 408, 1011 ],
    [ dataToString(new Date(new Date().getTime() - 5*30*24 * 60 * 60 * 1000)), 732, 685, 1417 ],
    [ dataToString(new Date(new Date().getTime() - 6*30*24 * 60 * 60 * 1000)), 896, 654, 1550 ]
  ]
}
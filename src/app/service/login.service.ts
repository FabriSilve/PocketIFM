import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders, HttpEvent } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Credentials } from '../model/credentials';
import { CREDENTIALS } from '../mock/CREDENTIALS';
import { LOGIN } from '../const/const';

@Injectable()
export class LoginService {

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http : HttpClient
  ) { }

  //GET
  public login(credentials : Credentials) : Observable<LoginResponse> {
    return this.http.get<LoginResponse>(LOGIN)
    .pipe(
      tap(result => console.log("LOGIN")),
      catchError(this.handleError('LOGIN', new LoginResponse(false, "Server Error", null) ))
    );
  }

  /*POST
  public login(credentials : Credentials) : Observable<LoginResponse> {
    return this.http.post<LoginResponse>(LOGIN, credentials, this.httpOptions).pipe(
      tap(result => console.log("LOGIN")),
      catchError(this.handleError('LOGIN ERROR:', new LoginResponse(false, "Server Error", null)))
    );
  }*/

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation);
      console.error(error);
      return of(result as T);
    };
  }
  
}

export class LoginResponse {
  public result : boolean;
  public message : string;
  public token : string;

  constructor(result : boolean, message : string, token : string) {
    this.result = result;
    this.message = message;
    this.token = token;
  }
}

export const LOGIN_RESPONSE = new LoginResponse(true, "Effettuo Login...", "q1w2e3");

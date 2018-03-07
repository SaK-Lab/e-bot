import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { catchError } from 'rxjs/operators';

// Models
import { SignInResults } from '../models/SignInResult';
import { Login } from '../models/Login';




@Injectable()
export class LoginService {
  ROOT_URL = 'http://localhost:4000/api';

  constructor(
      private _http: HttpClient
  ) { }

  signIn(requestBody: Login): Observable<SignInResults> {
    return this._http.post<SignInResults>(`${this.ROOT_URL}/signin/`, requestBody);
  }
}

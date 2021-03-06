import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { catchError } from 'rxjs/operators';

// Models
import { SignInResults } from '../models/SignInResult';
import { Login } from '../models/Login';
import { Signup } from '../models/Signup';





@Injectable()
export class AuthService {
  ROOT_URL = 'http://localhost:4000/api';

  constructor(
      private _http: HttpClient
  ) { }

  getToken(): string|boolean {
      const token = localStorage.getItem('token') || false;
      return token;
  }

  signIn(requestBody: Login): Observable<SignInResults> {
    return this._http.post<SignInResults>(`${this.ROOT_URL}/signin/`, requestBody);
  }

  signUp(requestBody: Signup): Observable<any> {
    return this._http.post<Observable<any>>(`${this.ROOT_URL}/signup`, requestBody);
  }
}

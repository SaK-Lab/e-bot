import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs/observable';




@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private _auth: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = this._auth.getToken() ? request.clone({
          setHeaders: {
            Authorization: `Bearer ${this._auth.getToken()}`
          }
      }) : request;

      return next.handle(request);
  }

}

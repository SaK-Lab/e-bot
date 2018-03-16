import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { Think } from '../models/Think';
import { ThinkResults } from '../models/ThinkResult';





@Injectable()
export class ThinkService {
  ROOT_URL = 'http://localhost:4000/api';

  constructor(
      private _http: HttpClient
  ) { }

  getThinks(): Observable<any> {
    return this._http.get(`${this.ROOT_URL}/ones`);
  }

  postThink(requestBody: Think): Observable<ThinkResults> {
    return this._http.post<ThinkResults>(`${this.ROOT_URL}/ones`, requestBody);
  }

  deleteThink(id: number): Observable<any> {
    return this._http.delete<any>(`${this.ROOT_URL}/ones/${id}`);
  }

}

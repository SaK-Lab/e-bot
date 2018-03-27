import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { tap, map } from 'rxjs/operators';

// Models
import { Think } from '../models/Think';
import { ThinkResults } from '../models/ThinkResult';
import { Msg } from '../models/Msg';
import { MsgResponseItems } from '../models/MsgResponseItems';




@Injectable()
export class ThinkService {
  ROOT_URL = 'http://localhost:4000/api';

  constructor(
    private _http: HttpClient
  ) { }

  getThinks(): Observable<Msg[]> {
    return this._http.get<MsgResponseItems>(`${this.ROOT_URL}/ones`).pipe(
      map(x => x.data));
  }

  postThink(requestBody: Think): Observable<ThinkResults> {
    return this._http.post<ThinkResults>(`${this.ROOT_URL}/ones`, requestBody);
  }

  deleteThink(id: number): Observable<any> {
    return this._http.delete<any>(`${this.ROOT_URL}/ones/${id}`);
  }

}

import { Injectable } from '@angular/core';
import { Msg } from '../models/Msg';
import { MsgItemComponent } from './msg-item/msg-item.component';
import { ThinkService } from '../thinklist/think.service';
import { Observable } from 'rxjs/Observable';
import { MsgItem } from './msg-item';
import { map } from 'rxjs/operators';


@Injectable()
export class MsgService {

  constructor(private _ThinkService: ThinkService) { }

  getMsgs(): Observable<MsgItem[]> {
    return this._ThinkService.getThinks().pipe(
      map(ones => {
        return ones.map(
          one => this.makeMsg(one)
        );
      })
    );
  }

  makeMsg(one: Msg): MsgItem {
    return new MsgItem(MsgItemComponent, one);
  }

}

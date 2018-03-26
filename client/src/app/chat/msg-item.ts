import { Type } from '@angular/core';
import { Msg } from '../models/Msg';


export class MsgItem {
  constructor( public component: Type<any>, public msgs: Msg) { }
}

import { Injectable } from '@angular/core';

@Injectable()
export class MsgService {

  constructor() { }

  getMsgs(array:[]){
    array.forEach(x => console.log(x));
  }

}

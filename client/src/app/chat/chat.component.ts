import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';

// Models
import { ThinkResult } from '../models/ThinkResult';
import { Msg } from '../models/Msg';
import { MsgItem } from './msg-item';

// Service
import { ThinkService } from '../thinklist/think.service';
import { MsgService } from './msg.service';






@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, AfterViewInit {

  msgs: MsgItem[] = [];



  constructor(
    private _thinkService: ThinkService,
    private _MsgService: MsgService
  ) { }

  ngAfterViewInit() {

  }

  ngOnInit() {
    // Make MsgItem Component List and Assing to msgs
    this._MsgService.getMsgs().subscribe(
      succ => {
        this.msgs = succ;
        console.log(this.msgs)
      }
    )
  }

}

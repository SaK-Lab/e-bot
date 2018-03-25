import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ThinkService } from '../thinklist/think.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';

// Models
import { ThinkResult } from '../models/ThinkResult';
import { MsgItem } from '../models/MsgItem';






@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, AfterViewInit {

  counter = 0;
  thinkArray: MsgItem[];
  currentMsg: string;
  currentMsgId: number;

  @ViewChild('btn') btn: ElementRef;

  constructor(private _thinkService: ThinkService) { }

  ngAfterViewInit() {
    const btn$ = Observable.fromEvent(
      this.btn.nativeElement, 'click'
    ).subscribe(
      succ => {
        console.log('EventEmit');
      },
      err => console.log(err),
      () => console.log('done')
    );
  }

  ngOnInit() {
    console.log(this.counter);
    this._thinkService.getThinks()
      .subscribe(
        succ => {
          console.log(succ);
          this.thinkArray = succ;
          this.currentMsg = this.thinkArray[this.counter]['content'];
          this.currentMsgId = this.thinkArray[this.counter]['id'];
          console.log(this.thinkArray);
        },
        err => console.log(err),
        () => console.log('done')
      );
  }

  nextMsg(): void {
    if (this.counter < this.thinkArray.length - 1) {
      this.currentMsg = this.thinkArray[this.counter].content;
    } else {
      this.currentMsg = '-';
    }
  }

  increment(): void {
    this.counter++;
    console.log(this.counter);
    this.nextMsg();
  }

  delete(id): void {
    this._thinkService.deleteThink(this.thinkArray[this.counter].id)
      .subscribe(
        succ => {
          console.log(succ);
        },
        err => console.log(err),
        () => console.log('done')
      );
    this.nextMsg();
  }


}

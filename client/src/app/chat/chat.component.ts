import { Component, OnInit } from '@angular/core';
import { ThinkService } from '../thinklist/think.service';
import { ThinkResult } from '../models/ThinkResult';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  counter = 0;
  thinkArray: [ThinkResult];
  currentMsg: string;
  currentMsgId: number;

  constructor(private _thinkService: ThinkService) { }

  ngOnInit() {
    console.log(this.counter);
    this._thinkService.getThinks()
      .subscribe(
        succ => {
          this.thinkArray = succ['data'];
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

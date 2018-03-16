import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ThinklistInputComponent } from './thinklist-input/thinklist-input.component';
import { ThinkService } from './think.service';
import { Observable } from 'rxjs/observable';
import { Think } from '../models/Think';
import { ThinkResults } from '../models/ThinkResult';

@Component({
  selector: 'app-thingslist',
  templateUrl: './thinklist.component.html',
  styleUrls: ['./thinklist.component.css']
})
export class ThinklistComponent implements OnInit {

    firstName = 'heyhey';
    thinkList: Array<any>;
    postThinkData: Think;

    toggleInput = false;

  constructor(
      private _thinkService: ThinkService
  ) { }

  ngOnInit() {
      this.getList()
        .subscribe(
            succ => {
                this.thinkList = succ.data.reverse();
                console.log(this.thinkList);
            },
            err => console.log(err),
            () => console.log('done' + this.thinkList)
        );
  }

  getList(): Observable<any> {
    return this._thinkService.getThinks();
  }

  sendItem(item: string) {
    this.postThinkData = {
      one : {
        content: item
      }
    };
    return this._thinkService.postThink(this.postThinkData)
      .subscribe(
        succ => {
          this.thinkList.push(succ.data);
        },
        err => console.log(err),
        () => console.log('done')
      );
  }

  showInput(){
    this.toggleInput = true;
  }

  hideInput(){
    this.toggleInput = false;
  }

}

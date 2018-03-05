import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ThinklistInputComponent } from './thinklist-input/thinklist-input.component';


@Component({
  selector: 'app-thingslist',
  templateUrl: './thinklist.component.html',
  styleUrls: ['./thinklist.component.css']
})
export class ThinklistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addThinkInput(): void {
      console.log('click');
  }

}

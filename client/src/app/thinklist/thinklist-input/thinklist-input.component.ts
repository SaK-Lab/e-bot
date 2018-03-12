import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-thinklist-input',
  templateUrl: './thinklist-input.component.html',
  styleUrls: ['./thinklist-input.component.css']
})
export class ThinklistInputComponent implements OnInit {
  @Output() item = new EventEmitter<string>();

  data = '';

  constructor() { }

  ngOnInit() {}

  onclick() {
    this.item.emit(this.data);
  }
}

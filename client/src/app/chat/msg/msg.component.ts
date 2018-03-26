import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver, AfterContentInit } from '@angular/core';
import { MsgHostDirective } from '../../msg-host.directive';
import { MsgItem } from '../msg-item';
import { Msg } from '../../models/Msg';


@Component({
  selector: 'app-msg',
  templateUrl: './msg.component.html',
  styleUrls: ['./msg.component.css']
})
export class MsgComponent implements OnInit, AfterContentInit {
  @Input() msgs: MsgItem[];
  currentIndex = -1;
  @ViewChild(MsgHostDirective) msgHost: MsgHostDirective;

  constructor(
    private _componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit() {
    setTimeout(()=>{
      console.log(this.msgs);
      this.loadComponent();
    }, 3000)
  }
  ngAfterContentInit() {
  }

  loadComponent() {
    if (this.currentIndex > this.msgs.length) { return false; }
    this.currentIndex = this.currentIndex + 1;
    const currentMsgItem = this.msgs[this.currentIndex];

    const componentFactory = this._componentFactoryResolver.resolveComponentFactory(currentMsgItem.component);
    const viewContainerRef = this.msgHost.viewContainerRef;

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<any>componentRef.instance).msgs = currentMsgItem.msgs;
  }

}

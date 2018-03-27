import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver, AfterContentInit } from '@angular/core';
import { MsgHostDirective } from '../../msg-host.directive';
import { MsgItem } from '../msg-item';
import { Msg } from '../../models/Msg';
import { ThinkService } from '../../thinklist/think.service';


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
    private _componentFactoryResolver: ComponentFactoryResolver,
    private _thinkService: ThinkService
  ) { }

  ngOnInit() {
    // TODO: Resolverの導入
    setTimeout(() => {
      this.loadComponent();
      console.log(this.msgs);
    }, 500)
  }
  ngAfterContentInit() {
  }

  loadComponent(callback?: Function) {
    if (this.currentIndex > this.msgs.length) { return false; }
    this.currentIndex = this.currentIndex + 1;
    const currentMsgItem = this.msgs[this.currentIndex];

    const componentFactory = this._componentFactoryResolver.resolveComponentFactory(currentMsgItem.component);
    const viewContainerRef = this.msgHost.viewContainerRef;

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<any>componentRef.instance).msgs = currentMsgItem.msgs;
    console.log(this.currentIndex);
    console.log(componentRef.instance.msgs.id);
    if (callback) { callback(); }
  }

  sendDeleteOneReqest(index: number) {
    const id = this.msgs[index].msgs.id;
    this._thinkService.deleteThink(id)
      .subscribe(
        succ => console.log(succ),
        err => console.error(err)
      );
  }

}

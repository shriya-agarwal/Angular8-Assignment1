import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subject, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  destroy = new Subject();
  timer : number;
  t;
  v;

  @Output() counter = new EventEmitter<number>();

  rxjsTimer = timer(1000, 1000);

  constructor() { }

  ngOnInit() { 
    this.t = setInterval(function() {
      this.v++;
    })
    this.rxjsTimer.pipe(takeUntil(this.destroy)).subscribe(val => {
      this.timer = val;

  });
}

  sendData() {
    this.counter.emit(this.timer);
    this.destroy.next();
    this.destroy.complete();
  }

}

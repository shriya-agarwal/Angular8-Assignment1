import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subject, timer } from 'rxjs';import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {

  destroy = new Subject();
  timer : number;
  stopClicked: boolean= false;

  @Output() counter = new EventEmitter<number>();

  rxjsTimer = timer(1000, 1000);

  constructor() { }

  ngOnInit() {
    this.rxjsTimer.pipe(takeUntil(this.destroy)).subscribe(val => {
      this.timer = val;
  });
}

  stopTimer() {
    this.counter.emit(this.timer);
    this.stopClicked = true;
    this.destroy.next();
    this.destroy.complete();
  }
}

import { Component, OnInit } from '@angular/core';
import { Mobile } from '../models/mobile';

@Component({
  selector: 'app-mobile',
  template: `<h1>{{ mobile.mobileName }}</h1>

  <h3>Ram : {{ mobile.mobileRam }}</h3>
  <h3>Storage : {{ mobile.mobileStorage }}</h3>
  <h3>Camera : {{ mobile.mobileCamera }}</h3>
  <h3>Battery : {{ mobile.mobileBattery }}</h3>
  <h3>Display : {{ mobile.mobileDisplay }}</h3>
  `,
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {

  mobile : Mobile;

  constructor() { 
    this.mobile = new Mobile("OnePlus 7T", "8gb", 128, 48, 3800, "16.64cm");
  }

  ngOnInit() {
  }

}

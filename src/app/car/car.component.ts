import { Component, OnInit } from '@angular/core';
import { Car } from '../models/car';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  carModel: Car;

  constructor() { 
    this.carModel = new Car("Mahindra Scorpio", "white", 7, "diesel", 15, 2179);
  }

  ngOnInit() {
  }

}

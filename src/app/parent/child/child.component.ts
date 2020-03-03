import { Component, OnInit, Input } from '@angular/core';
import { location } from 'src/app/models/location';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() childLocation : location;
  
  constructor() { }

  ngOnInit() {
  }

}

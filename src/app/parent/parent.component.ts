import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../models/student';
import { location } from '../models/location';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  student : Student;
  location : location;

  constructor() {
    this.location = new location("Manikonda", "Telangana", "Hyderabad", 500089, "India");
    this.student = new Student("Harsh", 17, "male", "17-11-2002", this.location);
   }

  ngOnInit() {
  }


}

import { location } from './location';

export class Student {
    name: string;
    age: number;
    gender: string;
    dob: string;
    location: location;

    constructor(name:string, age:number, gender:string, dob:string, location:location) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.dob = dob;
        this.location = location;
    }
}
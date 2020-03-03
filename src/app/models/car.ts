export class Car {
    carName : string;
    carColour : string;
    carSeats : number;
    carFuelType : string;
    carMileage : number;
    carEngine : number;

    constructor(carName: string, carColour: string, carSeats: number, carFuelType: string, 
        carMileage: number, carEngine:number) {
            this.carName = carName;
            this.carColour = carColour;
            this.carSeats = carSeats;
            this.carFuelType = carFuelType;
            this.carMileage = carMileage;
            this.carEngine = carEngine;
    }

}
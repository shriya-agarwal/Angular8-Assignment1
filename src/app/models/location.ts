export class location {
    address: string;
    state: string;
    city :string;
    pin: number;
    country: string;

    constructor(address:string, state:string, city:string, pin:number, country:string) {
        this.address = address;
        this.state = state;
        this.city = city;
        this.pin = pin;
        this.country = country;
    }
}
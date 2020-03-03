export class Mobile {
    mobileName : string;
  mobileRam : string;
  mobileStorage : number;
  mobileCamera : number;
  mobileBattery : number;
  mobileDisplay : string;

  constructor(mobileName,mobileRam, mobileStorage, mobileCamera, mobileBattery, mobileDisplay) {
      this.mobileName = mobileName;
      this.mobileRam = mobileRam;
      this.mobileStorage = mobileStorage;
      this.mobileCamera = mobileCamera;
      this.mobileBattery = mobileBattery;
      this.mobileDisplay = mobileDisplay;
  }
}
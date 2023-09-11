import { Dog } from "./class2";

export class Bulldog extends Dog {
    constructor(name: string, breed: string) {
      super(name, breed);
    }
  
    guard() {
      console.log(`${this.name} is guarding.`);
    }
  }
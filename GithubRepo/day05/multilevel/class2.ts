import { Animal } from "./class1";

export  class Dog extends Animal {
    breed: string;
  
    constructor(name: string, breed: string) {
      super(name);
      this.breed = breed;
    }
  
    bark() {
      console.log(`${this.name} is barking.`);
    }
  }
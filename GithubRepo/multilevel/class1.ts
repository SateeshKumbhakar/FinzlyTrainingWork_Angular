export class Animal {
    name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  
    eat() {
      console.log(`${this.name} is eating.`);
    }
  }
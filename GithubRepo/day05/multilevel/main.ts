import { Animal } from "./class1";
import { Dog } from "./class2";
import { Bulldog } from "./class3";



const animal = new Animal("Animal");
const dog = new Dog("Buddy", "Golden Retriever");
const bulldog = new Bulldog("Spike", "Bulldog");


// Call methods
animal.eat(); // Output: Animal is eating.
dog.eat();    // Output: Buddy is eating.
dog.bark();   // Output: Buddy is barking.
bulldog.eat(); // Output: Spike is eating.
bulldog.bark();// Output: Spike is barking.
bulldog.guard();// Output: Spike is guarding.
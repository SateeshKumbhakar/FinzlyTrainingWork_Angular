"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var class1_1 = require("./class1");
var class2_1 = require("./class2");
var class3_1 = require("./class3");
var animal = new class1_1.Animal("Animal");
var dog = new class2_1.Dog("Buddy", "Golden Retriever");
var bulldog = new class3_1.Bulldog("Spike", "Bulldog");
// Call methods
animal.eat(); // Output: Animal is eating.
dog.eat(); // Output: Buddy is eating.
dog.bark(); // Output: Buddy is barking.
bulldog.eat(); // Output: Spike is eating.
bulldog.bark(); // Output: Spike is barking.
bulldog.guard(); // Output: Spike is guarding.

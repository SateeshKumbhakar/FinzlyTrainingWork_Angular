"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getData = function (name, age, role) {
    console.log("with parameter  with return type ");
    return name + " " + age + " " + role;
};
console.log(getData("Sateesh", 21, "developer"));
var getData1 = function (name, age, role) {
    console.log("with parameter  without return type ");
    console.log(name, age, role);
};
getData1("Sateesh", 21, "developer");
var getData2 = function () {
    return "without parameter but with return type getData2";
};
console.log(getData2());
var getData3 = function () {
    return "lamda without parameter but with return type getData2";
};
console.log(getData3());
var getData4 = function () {
    return "lamda  without parameter and return type  getData 4";
};
console.log(getData4());
var getData5 = function (name) {
    return "lambda  with parameter and without retur type getData5" + name;
};
console.log(getData5("Sateesgh is passed as the parameter"));

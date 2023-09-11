"use strict";
// task display class data using advanced feature of TS
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeWork = void 0;
var HomeWork = /** @class */ (function () {
    function HomeWork(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    HomeWork.prototype.display = function () {
        console.log("".concat(this.name, " ").concat(this.age, " ").concat(this.salary));
    };
    return HomeWork;
}());
exports.HomeWork = HomeWork;
var homeWork = new HomeWork("Sateesh", 123, 12345);
homeWork.display();

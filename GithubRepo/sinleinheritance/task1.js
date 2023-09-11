"use strict";
/*
  single level
  multilevel
  access function in different package


*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(id, name) {
        this.id = id;
        this.name = name;
    }
    Employee.prototype.showData = function () {
        console.log("\n         Employee Data :: ".concat(this.id, "...> ").concat(this.name, "\n    "));
    };
    return Employee;
}());
exports.Employee = Employee;

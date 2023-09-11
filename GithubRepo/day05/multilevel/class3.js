"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bulldog = void 0;
var class2_1 = require("./class2");
var Bulldog = /** @class */ (function (_super) {
    __extends(Bulldog, _super);
    function Bulldog(name, breed) {
        return _super.call(this, name, breed) || this;
    }
    Bulldog.prototype.guard = function () {
        console.log("".concat(this.name, " is guarding."));
    };
    return Bulldog;
}(class2_1.Dog));
exports.Bulldog = Bulldog;

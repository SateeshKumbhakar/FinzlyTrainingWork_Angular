"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var classemanager_1 = require("./classemanager");
var manager = new classemanager_1.Manager(1001, "Sateesh", 123, "sales");
manager.displayManagerData();
console.log(manager.id);
console.log(manager.name);
console.log(manager.mid);
console.log(manager.category);

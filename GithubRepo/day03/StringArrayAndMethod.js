// Create a dynamic string  array perform all operation.
var stringArra = [];
//console.log(stringArra); // []
// Methods of Array
//1 push ==> Add to the last position
stringArra.push("sk"); // ['sk']
stringArra.push("ravi"); //['sk','ravi]
stringArra.push("praveen"); //['sk','ravi','praveen']
stringArra.push("jivan", "sahid", "sashi");
stringArra.push("jivan", "sahid", /*.....*/ "sashi");
console.log(stringArra);
/*
    2 pop ==>
    remove item from last position
    return that element(array length modified)
    return undefinded if array is empty
    mutating method
    this value will be === new array with remove element



*/
stringArra.pop(); // stringArra.slice(0,-1);
console.log(stringArra);
/*
    3 shift (pop)
    remove first element

*/
stringArra.shift();
/*
   4 unshift(push)
   add elements at starting
*/
stringArra.unshift("A", "B"); // 
/*
  5 splice

*/
//6 foreach
stringArra.forEach(function (ele) { return console.log(ele); });
//
var mapArra = stringArra.map(function (ele, index) {
    console.log("Map ".concat(index, " and ").concat(ele));
    return "Map ".concat(index, " and ").concat(ele);
});
console.log(mapArra);
//7 slice
// 8 reverse

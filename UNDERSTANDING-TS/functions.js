"use strict";
function addF(n1, n2) {
    return n1 + n2;
}
function printResult1(num) {
    console.log("Result: " + num);
}
printResult1(addF(5, 12));
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
var combineValues;
combineValues = addF;
// combineValues = printResult;
console.log(combineValues(8, 8));
addAndHandle(10, 20, function (result) {
    console.log(result);
    return result;
});

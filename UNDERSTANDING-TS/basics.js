"use strict";
function add(n1, n2, showResult, phrase) {
    //   if (typeof n1 !== "number" || typeof n2 !== "number") {
    //     throw new Error("Incorrect Input!");
    //   }
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return n1 + n2;
    }
}
var number1 = 2.8;
var number2 = 5;
var printResult = true;
var resultPhrase = "Result is: ";
add(number1, number2, printResult, resultPhrase);

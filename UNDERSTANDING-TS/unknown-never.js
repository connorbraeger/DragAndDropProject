"use strict";
var userInput;
var userNameEx;
userInput = 5;
userInput = "Max";
if (typeof userInput === "string") {
    userNameEx = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("An error occurred!", 500);

let userInput: unknown;
let userNameEx: string;

userInput = 5;
userInput = "Max";
if (typeof userInput === "string") {
  userNameEx = userInput;
}

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError("An error occurred!", 500);

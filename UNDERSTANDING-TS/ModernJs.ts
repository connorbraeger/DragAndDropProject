//const userName = "Max";
// userName= 'Maxil';
//let age = 30;

//age = 29;

// function add(a: number, b: number) {
//   let result;
//   result = a + b;
//   return result;
// }

// const add = (a: number, b: number = 1) => a + b;

// console.log(add(2, 5));

// const printOutput = (output: number | string) => {console.log(output);}
//Same As
// const printOutput: (a: number | string) => void = (output) =>
//   console.log(output);

// const button = document.querySelector("button");

// if (button) {
//   button.addEventListener("click", (event) => console.log(event));
// }

// printOutput(add(5));

const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking"];

// activeHobbies.push(hobbies[0], hobbies[1]);
activeHobbies.push(...hobbies);

const person = {
  firstName: "Max",
  age: 30,
};

//This copies the address of person, not the full person i.e. a shallow copy
// const copiedPerson = person;

const copiedPerson = { ...person };

const add = (...numbers: number[]) => {
  let result = 0;
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, result);
};

const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);

const [hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log(hobbies, hobby1, hobby2);

const { firstName: userName, age } = person;

console.log(userName, age);

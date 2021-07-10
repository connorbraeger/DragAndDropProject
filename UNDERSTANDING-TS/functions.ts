function addF(n1: number, n2: number) {
  return n1 + n2;
}

function printResult1(num: number): void {
  console.log("Result: " + num);
}

printResult1(addF(5, 12));

function addAndHandle(n1: number, n2: number, cb: (arg1: number) => void) {
  const result = n1 + n2;
  cb(result);
}

let combineValues: (a: number, b: number) => number;

combineValues = addF;
// combineValues = printResult;

console.log(combineValues(8, 8));

addAndHandle(10, 20, (result) => {
  console.log(result);
  return result;
});

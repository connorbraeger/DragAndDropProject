// const names: Array<string> = [];
// // names[0].split(' ');

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("this is done!");
//   }, 2000);
// });

// promise.then((data) => {
//   data.split("");
// });

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

//console.log(merge({ name: "Connor" }, { age: 26 }));
// const mergedObject = merge({ name: "Connor" }, { age: 26 }) as {
//   name: string;
//   age: number;
// };
const mergedObject = merge({ name: "Connor" }, { age: 26 });
console.log(mergedObject.age);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Has no value.";
  if (element.length === 1) {
    descriptionText = "Has 1 element";
  } else if (element.length > 1) {
    descriptionText = `Has ${element.length} elements`;
  }
  return [element, descriptionText];
}

console.log(countAndDescribe("Hi there"));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}
extractAndConvert({ name: "Connor" }, "name");

class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Connor");
textStorage.addItem("Amanda");
textStorage.removeItem("Amanda");

console.log(textStorage.getItems);

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

//const names: Readonly<string[]> = ["Connor", "Amanda"];
//names.push("James");

// interface Person {
//   name: string;
//   age: number;

//   greet(phrase: string): void;
// }

// let user1: Person;

interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};
console.log(add.toString());

interface Named {
  readonly name?: string;
  outputName?: string;
}
interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  age = 30;

  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }
  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + " " + this.name);
    } else {
      console.log("Hi");
    }
  }
}

let user1: Greetable;
user1 = new Person("Connor");

user1.greet("hello");

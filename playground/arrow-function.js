// Arrow functions vs regular functions
// Arrow functions do not bind a "this" keyword
// Arrow functions do not bing an "arguments" object

var square = x => x * x;
console.log(square(9));

var user = {
  name: 'Andrew',
  sayHi: () => {
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`);
  },
  sayHiAlt () {
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`);
  }
};

user.sayHi();
user.sayHiAlt(1, 2, 3);

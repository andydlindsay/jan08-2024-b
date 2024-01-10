const key = 'value';
// const more = 42;

const myFunc = function() {
  // const more = 'something else';
  console.log(more);
  console.log('this in myFunc', this);
};

myFunc();

const demo = {
  friends: [1,2,3],
  anotherObj: {},
  myFunc: function() {}
};

// this

// arrow functions do NOT create the `this` variable

let student = {
  firstName: 'alice',
  lastName: 'wonderland',
  sayMyName: function() {
    console.log(this);
    console.log(`My full name is ${this.firstName} ${this.lastName}`);
    console.log('My full name is ' + this.firstName + ' ' + this.lastName);
  }
};

const copy = student;

student = null;

copy.sayMyName();

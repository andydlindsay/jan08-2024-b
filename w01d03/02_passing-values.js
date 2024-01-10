// passing primitives to a function gives them a copy
// const doubleIt = function(num) {
//   num = num * 2;
//   console.log('inside function', num); // 84
// };

// const myNum = 42;

// console.log('before the function call', myNum); // 42

// doubleIt(myNum);

// console.log('after the function call', myNum); // 42

// objects are passed by reference
const modifyObject = function(obj) {
  obj.firstName = 'Bob';
  console.log('inside the function', obj); // 'Bob'
};

const myObj = {
  firstName: 'Alice'
};

myObj = [];

console.log('before the function call', myObj); // 'Alice'

modifyObject(myObj);

console.log('after the function call', myObj); // 'Bob' // 'Alice'

// const obj = {
//   a: 1,
//   b: 'hello',
//   c: true,
//   friend: {
//     firstName: 'alice',
//   }
// };

// // const copy = obj;
// const copy = {
//   ...obj,
//   a: 2,
//   friend: {
//     ...obj.friend,
//     firstName: 'bob',
//   }
// };

// // copy.friend.firstName = 'bob';

// // copy.a = 2;

// console.log(obj);
// console.log(copy);
// console.log(obj === copy);

const arr = [1,2,3];
const arr2 = [4,5,6];

// const copy = arr;
const copy = [
  ...arr2,
  ...arr,
];

// copy.push(4);

const myArgs = [copy, arr, 'hello'];

// console.log(arr);
console.log(...myArgs);

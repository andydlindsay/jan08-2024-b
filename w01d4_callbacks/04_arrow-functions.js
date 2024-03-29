// // const sayHello = function(name) {
// //   return `hello there ${name}`;
// // };

// const runMyFunction = function(callback) {
//   callback('Monkey Fuzz!');
// };

// // advantages of arrow functions
// // 1. no need for the "function" word
// // 2. single argument no need for parens
// // 3. if only one line of code, you can omit curly braces

// runMyFunction( arg1 => console.log('arg1',arg1) );

// runMyFunction( function(arg1){console.log('arg1',arg1)} ); // 


// // 4. arrow functions without curly braces automatically return whatever is to the right of the arrow
// // this is sort of like ... // if (true) console.log('hello');

// // Note the GOTCHA: if you're using the word 'this'

// const sayHello = name => `hello there ${name}`;

// const result = sayHello('Tommy!');
// console.log('Result:',result);

// // // function() {}
// // // () => {}


const printer = arg1 => console.log('arg1',arg1);

const incrementer1 = (x) => { console.log('x', x); return (x + 1); };
const incrementer2 = x => x;

console.log('return value of i1', incrementer1(4));
console.log('return value of i2', incrementer2(9));
console.log('i2', incrementer2);


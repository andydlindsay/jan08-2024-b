const promiseGenerator = require('./promise-generator');
const returnPromise = promiseGenerator.returnPromise;

const promise = returnPromise('first promise', 3444);
console.log('promise:', promise);

console.log('first');
console.log('second');

// Not the best way to do this
// setTimeout(()=>{
//   console.log('promise 6 seconds later:', promise);
// }, 6000);

//
// The RIGHT way to do this
//

promise
  .then((data) => {
    console.log('third');
    // const newData = 'another thing';
    // console.log("newData:",newData);
    console.log('data:', data);
		return returnPromise('monkeyFuzz', 2000);
  }) // <--- that is just a function call. no magic there!
  .then((param) => {
    console.log('it is alive!', param);
  });

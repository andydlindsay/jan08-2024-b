const functions = require('./promise-generator');

const returnPromise = functions.returnPromise;
const returnRejectedPromise = functions.returnRejectedPromise;

// throw new Error('ooooops');

returnPromise('one',1000)
  .then((data) => {
    console.log('1:', data);
    return returnPromise('two',1000);
  })
  .catch((err) => {
    // throw err;
    console.log('different err:',err);
  })
  .then((data) => {
    console.log('2:', data);
    return returnPromise('three',1000);
  })
  .then((data) => {
    console.log('3:', data);
    return returnRejectedPromise('four',1000);
  })
  .then((data) => {
    console.log('4:', data);
    return returnPromise('five',1000);
  })
  .then((data) => {
    console.log('5:', data);
    return returnPromise('six',1000);
  })
  .catch((err) => {
    // throw err;
    console.log('err:', err);
  });

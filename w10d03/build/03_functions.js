"use strict";
// return value, params, name
const myFunc = (name, age = 42) => {
    // return 'hello';
    // return null;
};
const returnVal = myFunc('dean', 2);
myFunc('dean');
const returningPromise = (age) => {
    return new Promise((resolve) => {
        resolve('hello');
    });
};
returningPromise(10)
    .then((data) => { });
const higherOrderFunc = (callback) => {
    callback('alice');
};
higherOrderFunc(() => { return 42; });

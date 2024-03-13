// return value, params, name

const myFunc = (name: string, age: number = 42): void => {
  // return 'hello';
  // return null;
};

const returnVal = myFunc('dean', 2);
myFunc('dean');

const returningPromise = (age: number): Promise<string> => {
  return new Promise((resolve) => {
    resolve('hello');
  });
};

returningPromise(10)
  .then((data) => {})

const higherOrderFunc = (callback: (name: string) => number): void => {
  callback('alice');
};

higherOrderFunc((name) => { return 42; });

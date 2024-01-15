const sayHello = function(name) {
  return `hello there ${name}`;
};

const myFaveNum = 42;

module.exports = sayHello;
// module.exports = [sayHello, myFaveNum];
// module.exports = {
//   sayHello: sayHello,
//   myFaveNum: myFaveNum
// };

// module.exports.sayHello = sayHello;
// module.exports.myFaveNum = myFaveNum;

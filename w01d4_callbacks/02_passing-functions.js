// callback;
//   a function that gets passed to another function
//   to be invoked by that second function


// // higher order function (HOF)
// // a function that accepts another function as an argument


function processor(arg1, anything){
  // does some stuff

  anything();

}

processor(1, function(){ console.log('monkey') });



// const sayHello = function(name) {
//   console.log(`hello there ${name}`);
// };



const sayHello2 = function(name) {
  console.log("sayHello2 logs:",`hola!! ${name}`);
};





// const addTwo = function(num) {
//   console.log(num + 2);
// };

// runMe(sayHello2);






// runMe(addTwo);

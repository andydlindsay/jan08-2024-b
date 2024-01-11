// we would like to have a program that inputs 
// the commandline arguments and adds them

// inputs

// console.log('process.argv', process.argv);
// console.log('process.argv[1]', process.argv[1]);

// processing

// loop over the elements of the array
// of arguments, starting at the third

let cummulativeTotal = 0;

for (let ii = 2; ii < process.argv.length; ii++) {
	// console.log('ii', ii);
	console.log('process.argv[ii]', process.argv[ii]);
	let num = Number(process.argv[ii]);
	cummulativeTotal = cummulativeTotal + num;
}

// outputs
console.log('num1', cummulativeTotal);


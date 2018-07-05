/*
	Chapter 2. The nature of functions.
*/
"use strict"



/*
	The ... operator

	When used in function definition, like f(...args), it gathers arguments into
	array

	When used in calling a function, like f(...[1, 2, 3]), it unpacks array
*/

// all arguments are gathered into array args
function f(...args){
	console.log(`There are ${args.length} elements in the array.`);
	console.log(`First element is ${args[0]}`);
}

f();
f(1, 2, 3);
f([1,2,3]);			// considered as one argument
f(...[1, 2, 3]);	// same as f(1, 2, 3)



// first 2 arguments go to x, y, rest are gathered into array args
function g(x, y, ...args){
	console.log(`x = ${x}, y = ${y}`);
	console.log(`${args.length} elements in array, args[0] = ${args[0]}`)
}

g();
g(1);
g(1, 2);
g(1, 2, 3);



/*
	Named arguments.

	JavaScript does not support named arguments the way other languages do,
	such as,

	function f(x, y, z) {...}

	f(y=2)	// the python way to just pass y, but doesn't work in JavaScript.

	JavaScript supports destructure object parameters, like below:
*/
function f({x, y} = {}) {	// define as f({x, y}) {...} doesn't work, leads to
							// TypeError during compile time: cannot destructure
							// property 'x' of 'undefined', meaning the compiler
							// tries to destructure before the function is called.
							// 
							// Therefore we must give it a default value.
							// 
	console.log(`x = ${x}, y = ${y}`);
}

f({y: 2});	// x = undefined, y = 2

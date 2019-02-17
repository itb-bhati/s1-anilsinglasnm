function foo(a1 = [ 1, 3, 2 ], ...restParams) {
	var [ a11, a12, a13 = 2 ] = a1;
	var [ a21, ...spreadValues ] = restParams[0];

	return [ a13, ...spreadValues ];
}

function bar() {
	var a1 = [ 2, 4 ];
	var a2 = [ 6, 8, 10, 12 ];

	return foo(a1, a2);
}

console.log(
	bar().join("") === "281012"
);

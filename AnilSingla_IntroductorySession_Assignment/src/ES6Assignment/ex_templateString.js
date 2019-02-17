function upper(strings,...values) {
	return strings.toUpperCase();
}

var name = "kyle",
	twitter = "getify",
	classname = "es6 workshop";

console.log(
	`Hello ${upper(name)} (@${upper(twitter)}), welcome to the ${upper(classname)}!` ===
	"Hello KYLE (@GETIFY), welcome to the ES6 WORKSHOP!"
);

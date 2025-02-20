//Hoisting Name function
console.log(greet("John"));

function greet(name) {
	return "Hello, " + name;
}

//Declaration
let add = function (a,b){
    return a+b;
}
let result = add(3,4)
console.log("Result : ", result);

//named function expression
let mply = function multiplyNumber(a,b){
    return a* b ;
}

res = mply(4,5);
console.log(res);
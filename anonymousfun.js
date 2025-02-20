const greet = function(name){
    return "Hello , " + name;
}
console.log(greet("Marry"));

function add(a, b) {
    return a + b;
}

console.log(add(5, 3)); // Output: 8

function multiply (x,y){
    return x*y;
}
let result = multiply(4,5);
console.log(result);

//check scope
var glovar = 'I am global';
function checkScope (){
    let localvar = 'I am local';
    console.log(glovar);
    console.log(localvar);
}

checkScope();
console.log(glovar);
//console.log(localvar);
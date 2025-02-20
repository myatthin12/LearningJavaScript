const number = [1,2,3,4,5]

const double = number.map(num => num*2);
console.log(double)
console.log(number)

//index
const numbers = [10,20,"apple"]
const newarr = numbers.map((num,index) => `Index ${index}: ${num}`)
console.log(newarr)

//obj to map

const users = [
    {name : "Ma Ma" , age : 20},
    {name : "Mg Mg" , age : 20},
    {name : "Ko Ko" , age : 20}
];

const nameOnly = users.map(usr => usr.name);
console.log (nameOnly);

//to upper case
const fruits = ["apple", "banana","orange"];
const upperCase = fruits.map(name => name.toUpperCase());
console.log(upperCase);
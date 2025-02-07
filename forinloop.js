// const person = {
//     name :"Aung Aung",
//     age : 25,
//     city: "Yangon"
// }

// for(let key in person){
//     console.log(person[key])
// }

const student = {
    name : "Su Su",
    mark:{
        maths : 85,
        eng : 88
    }
};

for( let per in student.mark){
    console.log(per + ": "+ student.mark[per])
}

const person ={
    name : "Mya Mya",
    age : 22
}

Object.keys(person).forEach(key1 => {
    console.log(key1 + ": " + person[key1])
})
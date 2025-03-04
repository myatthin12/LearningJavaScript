// Promise = An Object that manages asynchronous operations.
//                    Wrap a Promise Object around {asynchronous code}
//                    "I promise to return a value"

// DO THESE CHORES IN ORDER

// 1. WALK THE DOG
// 2. CLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH

function walkTheDog(){
    return new Promise((resolve,reject) =>{
        let walkwithDog = true;
        setTimeout(()=>{
            if(walkwithDog){
                resolve("You walked with the dog. 🐶")
            }else{
                reject("You didn't walk with the dog 😡")
            }
        },1500)    
    })
}

function cleanTheKitchen(){
    return new Promise((resolve,reject)=>{
        let cleankitchen = true;

        setTimeout(() => {
            if (cleanTheKitchen){
                resolve("You cleaned the kitchen 👨🏼‍🍳")
            }else{
                reject("You didn't clean the kitchen 😡")
            }
        }, 2500);

        
    })
}

function takeOutTheTrash(){
    return new Promise((resolve,reject)=>{
        let trashTakenout = false;

        setTimeout(() => {
            if(trashTakenout){
                resolve("You took out the trash 🗑️")
            }else{
                reject("You didn't take out the trash 😡")
            }
        }, 1000);

        
    })
}

walkTheDog()
    .then((message)=>{console.log(message); return cleanTheKitchen()})
    .then((message)=>{console.log(message);return takeOutTheTrash()})
    .then((message)=>{console.log(message);console.log("You finished all chores")})
    .catch((error)=>{console.log(error)});
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
        let trashTakenout = true;

        setTimeout(() => {
            if(trashTakenout){
                resolve("You took out the trash 🗑️")
            }else{
                reject("You didn't take out the trash 😡")
            }
        }, 1000);

        
    })
}

async function doChores(){
    try{
        const walkTheDogResult = await walkTheDog();
        console.log(walkTheDogResult);

        const cleanTheKitchenResult = await cleanTheKitchen();
        console.log(cleanTheKitchenResult);

        const takeOutTheTrashResult = await takeOutTheTrash();
        console.log(takeOutTheTrashResult);

    }catch(error){
        console.error(error)
    }
}

doChores();
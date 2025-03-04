let promise = new Promise((resolve, reject)=>{
    let success = true;

    if(success){
        resolve("Task CompletedCompleted🐸!");
    }else{
        reject("Task Failed🐶");
    }
});

console.log(promise);



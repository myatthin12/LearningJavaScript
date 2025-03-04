function getUserData(userID){
    return new Promise((resolve,reject)=> {
        console.log("Fetching User Data ...");

        setTimeout(()=>{
            let serverOnline = true;
            if(serverOnline){
                resolve(`User Data for ID: ${userID}`);
            }else{
                reject("Server Down! Please try again later")
            }
        },3000);
    });
}

getUserData(101)
    .then((data)=>{
        console.log(data);
    })
    .catch((err)=>{
        console.log(err)
    });
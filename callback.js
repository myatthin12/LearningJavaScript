function maths(a,b,callback){
   let ans = a+b;
    callback(ans);
}

function ret(result){
    console.log("The result is :" + result)
}

maths(4,25,ret);
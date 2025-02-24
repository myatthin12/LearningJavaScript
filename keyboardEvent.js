const inputData = document.getElementById("inputField");
const outputData = document.getElementById("output");

inputData.addEventListener("keydown",function(event){
    console.log("Keydown : ", event.key );
});

inputData.addEventListener("keyup", function(event){
    outputData.innerText = inputData.value;
    console.log("KeyUp : ",event.key);
});




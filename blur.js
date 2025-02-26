const email = document.getElementById("email");
email.addEventListener("focus",function(event){
    email.style.backgroundColor="lightblue";
});

email.addEventListener("blur",function(event){
    email.style.backgroundColor = "white";
});
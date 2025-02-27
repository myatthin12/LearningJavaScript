const menu = document.getElementById("menu");
menu.addEventListener("click",function(){
    if(event.target.tagName ==="LI"){
        alert("You Clicked On : "+ event.target.innerText);
    }
});
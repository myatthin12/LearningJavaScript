const mouseEvent = document.getElementById("box");
mouseEvent.addEventListener("mouseover",function(){
    mouseEvent.style.backgroundColor = "green";
});
mouseEvent.addEventListener("mousedown",function(){
    mouseEvent.style.backgroundColor = "blue";
});
mouseEvent.addEventListener("mouseout",function(){
    mouseEvent.style.backgroundColor = "pink";
});
mouseEvent.addEventListener("mouseup",function(){
    mouseEvent.style.backgroundColor = "red";
});
mouseEvent.addEventListener("dblclick",function(){
    mouseEvent.style.backgroundColor = "lightblue";
});
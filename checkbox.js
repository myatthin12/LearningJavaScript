const checkbox = document.getElementById("agree");
const output = document.getElementById("output");

checkbox.addEventListener("change",function(){
    if(checkbox.checked){
        output.innerText = "You have aggreed";
    }else{
        output.innerText = "You have not aggreed";
    }
}
);
const gender = document.querySelectorAll('input[name=gender]');
const res  = document.getElementById("optgender");

gender.forEach(result =>{
    result.addEventListener("change",function(){
        res.innerText = "Selected Gender : " + this.value;
    });
});
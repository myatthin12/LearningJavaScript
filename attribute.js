const attr = document.querySelector('input[name="username"]');

if(attr){
    console.log("Name : ",attr.value);
}else {
    console.log("Element not found")
}
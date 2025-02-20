const query1 = document.querySelector(".item");
console.log("Query1 : ",query1.innerText);

const allQuery = document.querySelectorAll(".item");
allQuery.forEach(element => {
    console.log("All Query : ",element.innerText);
});
let arr = [
    {quote : "i am boy" , person : "Mustafa"},
    {quote : "i am boy boy" , person : "SIR"},
    {quote : "i am boy boy boy" , person : "ARYAN"},
    {quote : "i am boy boy boy boy" , person : "AROZ"},
    {quote : "i am boy boy boy boy boy" , person : "ALLOO"}
]

let quo = document.querySelectorAll(".jio")[0].firstElementChild;
let p = document.querySelectorAll(".jio")[0].firstElementChild.nextElementSibling;

let r= document.getElementById("we1");
r.addEventListener("click" , function(){ 
    let ind = Math.floor(Math.random() * arr.length);
    quo.innerHTML = arr[ind].quote;
    p.innerHTML = arr[ind].person;
});
const pb = document.querySelector(".pb");
const btn = document.querySelector(".btn");


let elements = document.querySelectorAll(".num");
for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", function() {
function randomNum() {
const num = Math.floor(Math.random() * 69) + 1;
elements[i].innerText = num
}randomNum()
}) 
}

function randomNumPb() {
const numpb = Math.floor(Math.random() * 26) + 1;
pb.innerText = numpb
}

btn.addEventListener("click", function (){

randomNumPb()
})




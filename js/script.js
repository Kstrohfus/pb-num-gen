
const one = document.querySelector(".one");
const pb = document.querySelector(".pb");
const btn = document.querySelector(".btn");

    

function randomNum() {
const num =Math.floor(Math.random() * 26) + 1;
one.innerText = num
}

function randomNumPb() {
const numpb =Math.floor(Math.random() * 26) + 1;
pb.innerText = numpb
}

btn.addEventListener("click", function (){
randomNum()
randomNumPb()
})


// Different ways...Need to figure out to lump elements into function...

// let numElements = document.querySelectorAll([".one", ".two", ".three", ".four", ".five", ".pb"])

// let numElements = [...document.getElementsByClassName("num")];

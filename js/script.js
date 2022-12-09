
let one = document.querySelector(".one")
let pb = document.querySelector(".pb")
const btn = document.querySelector(".btn")

function randomNum() {
    const num = Math.floor(Math.random() * 69) + 1;
one.innerText = num
}

function randomNumPb() {
const pbNum =Math.floor(Math.random() * 26) + 1;
pb.innerText = pbNum
}

btn.addEventListener("click", function (){
randomNum()
randomNumPb()
})

//let numElements = [".one", ".two", ".three", ".four", ".five", ".pb"]//
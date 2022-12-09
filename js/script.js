let one = document.querySelector(".one")
let pb = document.querySelector(".pb")

function randomNum() {
    const num = Math.floor(Math.random() * 69) + 1;

one.innerText = num
}
randomNum()

function randomNumPb() {
const pbNum =Math.floor(Math.random() * 26) + 1;

pb.innerText = pbNum
}
randomNumPb()


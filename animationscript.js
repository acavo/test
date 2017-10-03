let char = document.querySelector("img.kappa");
let shakeButton = document.querySelector("#shake");
let moveButton = document.querySelector("#move");
let fadeButton = document.querySelector("#fade");
let jumpButton = document.querySelector("#jump");
let fallButton = document.querySelector("#fall");
let moveInButton = document.querySelector("#moveIn");
let talkButton = document.querySelector("#talk");
let mirrorButton = document.querySelector("#mirror");
let spinButton = document.querySelector("#spin");
let randomButton = document.querySelector("#random");

shakeButton.addEventListener('click', makeShake)
moveButton.addEventListener('click', makeMove)
fadeButton.addEventListener('click', makeFade)
jumpButton.addEventListener('click', makeJump)
fallButton.addEventListener('click', makeFall)
moveInButton.addEventListener('click', makeMoveIn)
talkButton.addEventListener('click', makeTalk)
mirrorButton.addEventListener('click', makeMirror)
spinButton.addEventListener('click', makeSpin)
randomButton.addEventListener('click', makeRandom)

function makeShake(){
    console.log("make shake");
    char.classList.toggle("shakeCSS");
}
function makeMove(){
    console.log("make move");
    char.classList.toggle("moveCSS");
}
function makeFade(){
    console.log("make fade");
    char.classList.toggle("fadeCSS");
}
function makeJump(){
    console.log("make jump");
    char.classList.toggle("jumpCSS");
}
function makeFall(){
    console.log("make fall");
    char.classList.toggle("fallCSS");
}
function makeMoveIn(){
    char.classList.toggle("moveInCSS");
}
function makeTalk(){
    char.classList.toggle("talkCSS");
}
function makeMirror(){
    char.classList.toggle("mirrorCSS");
}
function makeSpin(){
    char.classList.toggle("spinCSS");
}
function makeRandom(){
    char.classList.toggle("randomCSS");
}

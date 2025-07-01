let screen = document.querySelector('.screen');
let button = document.querySelector('#copy')
let button2 = document.querySelector('#clip')


function getRandomHexColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
};
function setRandomColor() {
    color=getRandomHexColor();
    if (screen) {
        screen.style.backgroundColor = color;
        screen.textContent = color;
    }
};
button.addEventListener("click",setRandomColor);
button2.addEventListener('click', ()=>{navigator.clipboard.writeText(color)});
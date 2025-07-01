let screen = document.getElementsByClassName('screen');
let button = document.querySelector('#change');


function getRandomHexColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
};
function setRandomColor() {
        screen[0].style.backgroundColor = color = getRandomHexColor();
        screen[0].textContent = color;
        screen[1].style.backgroundColor = color =getRandomHexColor();
        screen[1].textContent = color;
        screen[2].style.backgroundColor = color =getRandomHexColor();
        screen[2].textContent = color;
        screen[3].style.backgroundColor = color =getRandomHexColor();
        screen[3].textContent = color;
        screen[4].style.backgroundColor = color =getRandomHexColor();
        screen[4].textContent = color;
};

button.addEventListener("click",setRandomColor);

let ScreenArr = Array.from(screen); 
//  When using getElementsByClassName in JavaScript, it returns an HTMLCollection, which is an array-like object. 
// However, it’s not a real array,so you can't directly use .forEach() on it unless you convert it to an array.

ScreenArr.forEach((sr)=>{
    sr.addEventListener(
        "click",()=>{navigator.clipboard.writeText(sr.textContent)}
    )
})
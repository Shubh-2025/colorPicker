let screen = document.getElementsByClassName('screen');
let button = document.querySelector('#change');
let full =document.querySelector(".F");
let picker = document.getElementById('pick');

full.addEventListener("click", () => {
    screen[2].requestFullscreen(); 
});

picker.addEventListener("input",(pick)=>{
    screen[2].style.backgroundColor=screen[2].firstElementChild.textContent=pick.target.value;

});

document.addEventListener("fullscreenchange",()=>{
      if (!document.fullscreenElement) {
        console.log("Exited fullscreen");
        full.style.display = "flex"; // show the button again
    } else {
        console.log("Entered fullscreen");
        full.style.display = "none"; // hide the button while in fullscreen
    }
})

function getRandomHexColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}

function setRandomColor() {
        screen[0].style.backgroundColor = color = getRandomHexColor();
        screen[0].firstElementChild.textContent=color;
        screen[1].style.backgroundColor = color =getRandomHexColor();
        screen[1].firstElementChild.textContent = color;
        screen[2].style.backgroundColor = color =getRandomHexColor();
        screen[2].firstElementChild.textContent = color;
        screen[3].style.backgroundColor = color =getRandomHexColor();
        screen[3].firstElementChild.textContent = color;
        screen[4].style.backgroundColor = color =getRandomHexColor();
        screen[4].firstElementChild.textContent = color;
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
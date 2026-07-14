let hero_bg = document.querySelector(".hero-bg");


let message = "Username: Pega Developer"
let hiddenMessage = document.createElement('div')
hiddenMessage.innerHTML = message;
hiddenMessage.className = "hidden-message"


let testMessage = "Creating UI that sparks joy!"
testMessage.className = "test-message"




function powerOn(){
  window.addEventListener("load", () => {
  setTimeout(() => {
 screen1.style.backgroundColor = "white";
 screen1.style.boxShadow = "0px 0px 100px white"

  },2000)
 
  setTimeout(() => {
    screen1.append(hiddenMessage);
    typeWriter();
     screen1.style.backgroundColor = "black";
 screen1.style.boxShadow = "0px 0px 7px white"

  }, 6000)
  })
}

let screenMessage = document.getElementById("screen1");
var i = 0;

function typeWriter() {

  if(i < testMessage.length) {
    screen1.innerHTML += testMessage.charAt(i);
    i++;
    setTimeout(typeWriter, 500);
  }
}


powerOn();

 

let screens = document.getElementById("screens");
let desk = document.getElementById("desk");
let curtains = document.getElementById("curtains");
let wall = document.getElementById("wall");
let dev = document.getElementById("dev");
let skyline = document.getElementById("skyline");
let moon = document.getElementById("moon");
let screen1 = document.getElementById("screen1");
let shadow = document.getElementById("shadow");



// hero_bg.append(desk);


let moveName = () => {
  window.addEventListener("scroll", () => {
    let scrollValue = window.scrollY * 1;
    desk.style.top = scrollValue * .3 + "px";
    dev.style.top = scrollValue * .2 + "px";
    moon.style.top = scrollValue * .7 + "px";
    skyline.style.top = scrollValue * .5 + "px";
     shadow.style.bottom = scrollValue * .9 + "px";
    // screen1.style.top = scrollValue  + "px";
  })
}


// const heroObserver = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting == true && entry.target.className == "logo") {
//       // entry.target.classList.add("show-logo");
//       if(entry.target.childNodes[0].className == "joy"){
//         entry.target.childNodes[0].classList.add("show-joy");
//       }

//     } else 
//     entry.target.classList.remove("show-logo");
//     entry.target.childNodes[0].classList.add("show-joy")


//   });
// });

// heroObserver.observe(logo, joy);













moveName()
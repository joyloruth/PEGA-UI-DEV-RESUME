let hero_bg = document.querySelector(".hero-bg");
let joy = document.createElement("div");
let loruth = document.createElement("div");

joy.innerHTML = "Joy";
joy.className = "joy";
loruth.innerHTML = "LoRuth";
loruth.className = "loruth";
let message = "Creating UI that sparks joy!"
let hiddenMessage = document.createElement('div')
hiddenMessage.innerHTML = message;
hiddenMessage.className = "hidden-message"

hero_bg.append(joy, loruth, hiddenMessage);

 

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






let moveName=()=>{
  window.addEventListener("scroll", ()=>{
    let scrollValue = window.scrollY * 3 ;
joy.style.right = scrollValue + "px";
loruth.style.left = scrollValue + "px";

})}
  






moveName()
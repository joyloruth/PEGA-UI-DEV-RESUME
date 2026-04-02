let portfolioSection = document.getElementById("portfolio");
let projectTitle = document.querySelector(".card-title");
let projectDesc = document.querySelector(".card-text");
let projectImg = document.querySelector(".card-img");

let left_cert = document.querySelector(".left");
let middle_cert = document.querySelector(".main");
let right_cert = document.querySelector(".right");

let prev_button = document.querySelector(".prev");
let next_button = document.querySelector(".next");

let projects = [
    { title: "Burger Bistro", desc: "1", img: "red" },
    { title: "Little Alchemy", desc: "2", img: "orange" },
    { title: "Rocket Animation", desc: "", img: "yellow" },
    { title: "Office Animation", desc: "4", img: "green" },
  ];
  

let count = 0;

function updateCounter() {
  left_cert.innerHTML = projects[count].desc;
  left_cert.style.backgroundColor = projects[count - 1].img;

  middle_cert.style.backgroundColor = projects[count].img;
  middle_cert.innerHTML = projects[count].desc;

  right_cert.style.backgroundColor = projects[count + 1].img;
  right_cert.innerHTML = projects[count + 1].desc;
}


prev_button.addEventListener("click", () => {
  count--;
  if (count < 0) {
    count = projects.length - 1;
  }
  updateCounter();
});

next_button.addEventListener("click", () => {
  count++;
  if (count >= projects.length) {
    count = 0;
  }
  updateCounter();
});

setInterval(() => {
  // projectImg.style.transform = "translateX(0px)"
  // projectImg.style.backgroundColor = projects[count].img;
  // left_side.style.backgroundColor = projects[count+1].img;
  // right_side.style.backgroundColor = projects[count-1].img;
  // projectTitle.style.transform = "translateX(0px)"
}, 500);

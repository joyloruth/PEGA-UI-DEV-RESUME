let skills_section = document.getElementById("skills");

let pillBox = document.createElement("div");
pillBox.className = "pillBox"
let skillSet = [
  { tag: "full-stack", skill_name: "Pega", img:"pega.png" },
  { tag: "back-end", skill_name: "SQL" , img:"sql.png"},
  { tag: "front-end", skill_name: "Java", img:"java.png" },
  { tag: "full-stack", skill_name: "Javascript", img:"javascript.png" },
  { tag: "front-end", skill_name: "React", img:"react.png" },
  { tag: "front-end", skill_name: "CSS", img:"css.png" },
  { tag: "full-stack", skill_name: "HTML", img:"html.png"},
  { tag: "back-end", skill_name: "Bootsrap", img:"bootstrap.png" },
  { tag: "front-end", skill_name: "Figma", img:"figma.png" },
  
  
  // { tag: "back-end", skill_name: "SQL" },
  // { tag: "front-end", skill_name: "CSS" },
  // { tag: "front-end", skill_name: "UI/UX" },
  // { tag: "full-stack", skill_name: "Debugging" },
  // { tag: "back-end", skill_name: "SQL" },
  // { tag: "front-end", skill_name: "CSS" },
  // { tag: "front-end", skill_name: "Javascript" }
];
skillSet.forEach((skill) => {
  let pill = document.createElement("img");
  pill.className = "pill";
  pill.src = "./images/skills/" + skill.img
  pillBox.append(pill)
  skills_section.append(pillBox);
});
// about_me.className = "about-me";

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

// let moveName=()=>{
//   window.addEventListener("scroll", ()=>{
//     let scrollValue = window.scrollY * 3 ;
// joy.style.right = scrollValue + "px";
// loruth.style.left = scrollValue + "px";

// setInterval(()=>{console.log(scrollValue)}, 1000)

// })}

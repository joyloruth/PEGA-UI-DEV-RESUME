let projectsSection = document.getElementById("projects");
let projectContainer = document.createElement("project-container");

projectContainer.classList.add("project-container");
projectsSection.append(projectContainer);

let projectsList = [
  {
    title: "Alchemy Web Game",
    img: "./images/chemistry.png",
    tag: ["JavaScript", "CSS", "Dark/Light Mode"],
    description:
      "Drag & drop elements to mix and discover new elements. Dark / Light mode.",
    link: "https://joyloruth.github.io/Alchemy_2_Web_Game/pages/loader.html",
  },
  {
    title: "Rocket Animation",
    img: "./images/rocket.png",
    description: "A smooth CSS only rocket animation.",
    tag: ["CSS", "Original Art"],
    link: "https://joyloruth.github.io/RocketAnimation",
  },

  {
    title: "Burger Bistro",
    img: "./images/burger.png",
    description:
      "A full stack restaurant website demo. Includes login, sessions, APIs.",
    tag: ["PHP", "CSS", "SQL", "API"],
    link: "https://joyloruth.com/BurgerBistro-Ecommerce/",
  },
  {
    title: "Office Space Animation",
    img: "./images/office.png",
    tag: ["CSS", "JavaScript", "Animation"],
    description: "An interactive office space animation short. ",
    link: "https://joyloruth.github.io/OfficeSpace/",
  },
];

projectsList.forEach((element) => {
  let projectCard = document.createElement("div");
  let projectLogo = document.createElement("img");
  let projectTitle = document.createElement("div");
  let projectDesc = document.createElement("div");
  let projectTag = document.createElement("div");
  let projectLink = document.createElement("img");

  element.tag.forEach((er) => {
    let projectTagElement = document.createElement("div");
    projectTagElement.classList.add("project-tag-ele");
    projectTagElement.innerHTML = er;
    projectTag.append(projectTagElement);
  });

  projectCard.classList.add("project-card");
  projectLogo.classList.add("project-img");
  projectDesc.classList.add("project-desc");
  projectTitle.classList.add("project-title");
  projectTag.classList.add("project-tag");
  projectLink.classList.add("project-link");

  projectLogo.src = element.img;
  projectTitle.innerHTML = element.title;
  projectDesc.innerHTML = element.description;
  projectLink.src = "./images/arrow.png";
  projectLink.addEventListener("click", () => {
    window.open(element.link, "_blank");
  });

  projectContainer.append(projectCard);
  projectCard.append(projectLogo);
  projectCard.append(projectTitle);
  projectCard.append(projectDesc);
 

  projectCard.append(projectTag);
  projectCard.append(projectLink);
});

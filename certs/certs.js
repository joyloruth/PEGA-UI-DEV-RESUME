certifications_list = [
  {
    issuer:"Pegasystems",
    desc:"Demonstrates advanced Pega development skills, including complex application design, integrations, and enterprise-level solutions.",
    date: "2025",
    title: "Certified Pega Senior System Architect (CSSA)",
    img: "./images/pega-cert.png",
    link:"https://academy.pega.com/verify-certification?email=joyloruth%40gmail.com"
  },
  {
    issuer:"Pegasystems",
    desc:"Demonstrates foundational skills in building Pega applications, case types, data models, and workflows.",
    date: "2022",
    title: "Certified Pega System Architect (CSA)",
    img: "./images/pega-cert.png",
    link:"https://academy.pega.com/verify-certification?email=joyloruth%40gmail.com" 
  },
  {
    issuer:"Pegasystems",
   desc:"Demonstrates the ability to translate business needs into Pega solutions through process design, requirements gathering, and workflow analysis.",
    date: "2022",
    title: "Certified Pega Business Architect (CBA)",
    img: "./images/pega-cert.png", 
    link: "https://academy.pega.com/verify-certification?email=joyloruth%40gmail.com"  
  },
  {
    issuer:"Tennessee State University",
    desc:"",
    date: "Spring 2019",
    title: "Bachelor of Science (B.S)",
    img: "./images/tsu.png", 
    link:"https://www.tnstate.edu/"
  }
];

let certifications = document.getElementById("certifications");

let create_badge = (item, index) => {
  let badge = document.createElement("div");
  badge.className = "cert-badge";
  certifications.append(badge);
  
  let title = document.createElement("h2");
  title.className = "title";
  title.innerHTML = item.title

  let desc = document.createElement("p");
  desc.className = "cert-desc";
  desc.innerHTML = item.desc

  let date = document.createElement("h3");
  date.className = "issued";
  date.innerHTML = item.date;

  let issuer = document.createElement("h3");
  issuer.className = "issuer";
  issuer.innerHTML =   item.issuer;

  let cert_link = document.createElement("img");
  cert_link.className = "cert-link";
  cert_link.src = "./images/arrow.png";
  cert_link.target = "_blank"

  cert_link.addEventListener('click', ()=>{
    window.open(item.link)
  })

  let img = document.createElement("img");
  img.className = "cert-img";
  img.src = item.img

  badge.append( img,title, issuer, date, desc, cert_link);
};

certifications_list.forEach((cert) => {
  create_badge(cert);
});

let badges = document.querySelectorAll(".cert-badge");

const certifications_observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const index = Array.from(badges).indexOf(entry.target);
    if (entry.isIntersecting) {
      if (entry.target.className == "badge") {
          entry.target.classList.add("show-badge");   
      } else {
        entry.target.classList.add("show-badge");
      }
    } else {
      entry.target.classList.remove("show-badge");
    }
  }, ((threshold = 1,delay = "2000s")));
},{threshold:.5});

badges.forEach((badge) => {
  certifications_observer.observe(badge);
});

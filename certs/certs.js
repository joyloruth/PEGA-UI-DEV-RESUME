certifications_list = [
  {
    issuer:"Pegasystems",
    level:"Advanced",
    date: "2025",
    title: "Certified Pega Senior System Architect",
    img: "/images/pega-senior-system-arc.png",
    link:"http://www.google.com"
  },
  {
    issuer:"Pegasystems",
    level:"Advanced",
    date: "2022",
    title: "Certified Pega System Architect",
    // img: "/images/pega-system-arc.png",
    link:"pega.com"

  },
  {
    issuer:"Pegasystems",
    level:"Advanced",
    date: "2022",
    title: "Certified Pega Business Architect",
    // img: "/images/pega-business-arc.png", 
    link:"pega.com"
  },
  {
    issuer:"Tennessee State University",
    level:"Advanced",
    date: "Spring 2019",
    title: "Bachelor of Science",
    img: "/images/pega-business-arc.png", 
    link:"pega.com"
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

  let date = document.createElement("h3");
  date.className = "issued";
  date.innerHTML = item.date;

  let issuer = document.createElement("h3");
  issuer.className = "issuer";
  issuer.innerHTML =   item.issuer;

  let cert_link = document.createElement("a");
  cert_link.className = "cert-link";
  // cert_link.innerHTML = "<img src='" + item.img + "'></img>"
  cert_link.href = item.link
  cert_link.target = "_blank"

  // let img = document.createElement("img");
  // img.className = "img";
  // img.src = item.img

  badge.append( title, issuer, date, cert_link);
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

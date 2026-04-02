pega_experiences_list = [
  {
    company: "Accenture Federal Srvs",
    position: "Pega Developer",
    date: "02/2025 - present",
    desc1: "Developed and enhanced Pega PRPC applications (v7.x–8.8), building case types, UI sections, and decision rules to support scalable business workflows",
    desc2: "Utilized Dev Studio, SQL Server, JavaScript, and CSS to debug issues, optimize data handling, and enhance user interface performance and responsiveness",
    desc3: "Troubleshot and resolved complex production defects across UI and backend layers, fixing high-volume UI bugs and improving overall application stability",
  },
  {
    company: "Mantech INTL",
    position: "Pega Developer",
    date: "07/2023 - 06/2024",
    desc1: "Engineered a SOAP API integration with an external federal service, leveraging connectors, data pages, and activities to ensure secure, accurate, and compliant data exchange.",
    desc2: "Developed a centralized Pega data structure using inheritance, dynamic classes, and data pages, reducing redundancy by 30% and improving system performance by 25%.",
    desc3: ""
  },
  {
    company: "Skillstorm",
    position: "Jr. Pega Developer",
    date: "11/2021 - 05/2023",
    desc1: "Collaborated on Pega Robotics implementation to parse critical keywords from complex documents, increasing productivity by over 70%.",
    desc2: "Customized Pega login interface by configuring browser requester, access groups, and editing CSS/HTML for backgrounds, buttons, text, logos, and favicons, improving usability for unauthorized users.",
    desc3: "Developed and customized reports using Report Definitions and keyed data pages with joins, filters, and aggregations, enabling stakeholders to track KPIs and make data-driven decisions.",
  },
];

let pega_experience = document.getElementById("pega-experience");

let create_card = (item) => {
  let card = document.createElement("div");
  card.className = "card";
  pega_experience.append(card);

  let date = document.createElement("h3");
  date.className = "date";
  date.innerHTML = item.date;

  let position = document.createElement("h1");
  position.className = "position";
  position.innerHTML = item.position;

  let company = document.createElement("h2");
  company.className = "company";
  company.innerHTML = item.company;

  let desc1 = document.createElement("li");
  desc1.className = "desc";
  desc1.innerHTML = item.desc1;


  let desc2 = document.createElement("li");
  desc2.className = "desc";
  desc2.innerHTML = item.desc2;
 
  
  let desc3 = document.createElement("li");
  desc3.className = "desc";
  desc3.innerHTML = item.desc3;
 
  card.append(position, date,company, desc1, desc2,desc3);
};

pega_experiences_list.forEach((pega_experiences_list_item) => {
  create_card(pega_experiences_list_item);
});

let pega_experiences = document.querySelectorAll(".card");





const pega_experience_observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const index = Array.from(pega_experiences).indexOf(entry.target);
    if (entry.isIntersecting) {
      if (entry.target.className == "card") {
       
        entry.target.classList.add("show-pega-experience");
         
        entry.target.childNodes[0].classList.add("show-position")

      }
      //  else {
      
      //   entry.target.classList.add("odd-pega-experience");
      // }
    } else {
      entry.target.classList.remove("show-pega-experience");
      entry.target.childNodes[0].classList.remove("show-position")
      // entry.target.classList.remove("odd-pega-experience");
    }
  },{threshold:.50});
});

pega_experiences.forEach((pega_experience) => {

  pega_experience_observer.observe(pega_experience);
});

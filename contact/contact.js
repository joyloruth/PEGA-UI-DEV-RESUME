let socials = document.querySelectorAll(".contact_socials")

const contactObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting == true && entry.target.className == "contact_socials") {
      entry.target.classList.add("show_social");             
       
      //  if(entry.target.childNodes[0]){    

    } else  
    entry.target.classList.remove("show_social")

    // entry.target.childNodes[0].classList.add("show-joy")

  });
},);
 
socials.forEach(((social, i)=>{ 
  social.style.transitionDelay = `${i * 0.15}s`;            
contactObserver.observe(social)   
}))
   
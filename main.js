const nav = document.querySelector("nav");
const faqs = document.querySelectorAll(".faq");
const navMenu = document.querySelector(".nav__menu");
const btnOpenMenu = document.querySelector("#open-menu-btn");
const btnCloseMenu = document.querySelector("#close-menu-btn");
const teams = document.querySelectorAll(".team");

window.addEventListener("scroll", () => {
  nav.classList.toggle("window-srcoll", window.scrollY > 50);
});

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    if (faq.classList[1] === "open") {
      faq.classList.remove("open");
    } else {
      removeOpenFaq();
      faq.classList.add("open");
    }
    const icon = faq.querySelector(".faq__icon i");
    if (icon.className === "uil uil-plus") {
      icon.className = "uil uil-minus";
    } else {
      icon.className = "uil uil-plus";
    }
  });
});

function removeOpenFaq() {
  faqs.forEach((faq) => {
    faq.classList.remove("open");
  });
}

// window.addEventListener('resize', function(event){
//   var newWidth = window.innerWidth;
//   if(newWidth < 1023){
//     navMenu.style.display = "flex";
//     btnCloseMenu.style.display = "none";
//     btnOpenMenu.style.display = "none";
//     console.log(newWidth)
//   }
// });

  btnOpenMenu.addEventListener("click",()=>{
    navMenu.style.display = "flex";
    btnCloseMenu.style.display = "inline-block";
    btnOpenMenu.style.display = "none";
  });
  
  btnCloseMenu.addEventListener("click",()=>{
    navMenu.style.display = "none";
    btnCloseMenu.style.display = "none";
    btnOpenMenu.style.display = "inline-block";
  });

// teams.forEach((team)=>{
//   team.addEventListener("mouseover",()=>{
//     const team__social = team.querySelector(".team__social");
//     team__social.style.opacity = "1";
//   });
// });

//   teams.forEach((team)=>{
//     team.addEventListener("mouseout",()=>{
//       const team__social = team.querySelector(".team__social");
//       team__social.style.opacity = "0";
//     });

// });


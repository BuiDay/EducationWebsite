const nav = document.querySelector("nav");
const faqs = document.querySelectorAll(".faq");

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

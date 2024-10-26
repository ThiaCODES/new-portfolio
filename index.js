const menubtn = document.querySelector(".fa-bars");
const navbar = document.querySelector("ul");
const links = document.querySelectorAll(".link");

menubtn.addEventListener("click", (e) => {
  e.preventDefault();
  navbar.classList.toggle("column-display");
});
links.forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("column-display");
    links.forEach((item) => {
      item.classList.remove("active");
      link.classList.add("active");
    });
  });
});

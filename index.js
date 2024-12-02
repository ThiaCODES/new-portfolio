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

//scroll function
let calcScroll = () => {
  const scroll = document.querySelector(".scroll");
  const scrollBtn = document.querySelector(".scroll p");
  let value = document.documentElement.scrollTop;

  const scrollDif =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrollValue = Math.floor((value / scrollDif) * 100);
  console.log(scrollValue);
  if (value > 300) {
    scroll.style.display = "flex";
  } else {
    scroll.style.display = "none";
  }
  scroll.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scroll.style.background = `conic-gradient( orange ${scrollValue}% ,white ${scrollValue}%  )`;
};

window.onscroll = calcScroll;
window.onload = calcScroll;

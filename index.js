const menubtn = document.querySelector(".fa-bars");
const navbar = document.querySelector("ul");
const links = document.querySelectorAll(" .unordered a, .sidebar a");
const sidenav = document.querySelector(".sidebar");

const unorderedlist = document.querySelector(".list");

function showList() {
  unorderedlist.classList.toggle("list");
  navbtn.classList.toggle("fa-xmark");
}

function showBar() {
  sidenav.style.display = "flex";
}
links.forEach((item) => {
  item.addEventListener("click", () => {
    sidenav.style.display = "none";
    links.forEach((link) => {
      link.classList.remove("active");
      item.classList.add("active");
    });
  });
});
function closeBar() {
  sidenav.style.display = "none";
}

//scroll function
let calcScroll = () => {
  const scroll = document.querySelector(".scroll");
  const scrollBtn = document.querySelector(".scroll p");
  let value = document.documentElement.scrollTop;

  const scrollDif =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrollValue = Math.floor((value / scrollDif) * 100);

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

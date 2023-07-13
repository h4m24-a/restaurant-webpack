import createMenuPage from "./menu";
import createRestaurantHomePage from "./restaurant";

const createTabs = () => {
  const content = document.querySelector("#content");
  const navDiv = document.createElement("div");
  navDiv.classList.add("navDiv");

  const navbar = document.createElement("div");
  navbar.setAttribute("id", "navbar");

  // Tabs
  const logo = document.createElement("img");
  const div1 = document.createElement("div");
  const div2 = document.createElement("div");

  // Setting id's
  logo.setAttribute("id", "logo");
  div1.setAttribute("id", "homeButton");
  div2.setAttribute("id", "menuButton");

  // Setting classes
  div1.classList.add("navText");
  div2.classList.add("navText");

  // Text of tabs
  logo.src =
    "https://t3.ftcdn.net/jpg/04/75/85/06/360_F_475850614_NV7T6VRqGASmv4p3QQwIZoMmDhFXzQVL.jpg";
  div1.textContent = "Home";
  div2.textContent = "Menu";

  navDiv.appendChild(logo);
  navDiv.appendChild(div1);
  navDiv.appendChild(div2);
  content.appendChild(navDiv);

  navbar.appendChild(div1);
  navbar.appendChild(div2);
  content.appendChild(navbar);
  navDiv.appendChild(navbar);

  div1.addEventListener("click", () => {
    clearContent();
    createRestaurantHomePage();
  });

  div2.addEventListener("click", () => {
    clearContent();
    createMenuPage();
  });
};

function clearContent() {
  const content = document.querySelector("#content");
  const newDiv = document.querySelector(".page-content");
  const homeDiv = document.querySelector(".homeDiv");
  const topdishDiv = document.querySelector(".topdishDiv");
  const newsletterDiv = document.querySelector(".newsletterDiv")
  const footerDiv = document.querySelector(".footerDiv")
  if (newDiv) {
    content.removeChild(newDiv);
  }
  if (homeDiv) {
    content.removeChild(homeDiv);
  }

  if (topdishDiv) {
    content.removeChild(topdishDiv);
  }
  if (newsletterDiv) {
    content.removeChild(newsletterDiv);
  } if (footerDiv) {
    content.removeChild(footerDiv)
  }
}
export default createTabs;

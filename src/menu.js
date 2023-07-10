
const createMenuPage = () => {
const content = document.querySelector("#content");
const newDiv = document.createElement("div");
newDiv.classList.add("page-content");

const heading = document.createElement("h1");
heading.textContent = "Our Menu";

const menuList = document.createElement("ul");

const menuItem1 = document.createElement("li");
menuItem1.textContent = "California Pizza";

const menuItem2 = document.createElement("li");
menuItem2.textContent = "Sicilian Pizza";

const menuItem3 = document.createElement("li");
menuItem3.textContent = "Margherita Pizza";

menuList.appendChild(menuItem1)
menuList.appendChild(menuItem2)
menuList.appendChild(menuItem3)

newDiv.appendChild(heading)
newDiv.appendChild(menuList)
content.appendChild(newDiv)
}


export default createMenuPage;
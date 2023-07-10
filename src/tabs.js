import createContactPage from "./contact";
import createMenuPage from "./menu";
import createRestaurantHomePage from "./restaurant";



const createTabs = () => {
    const content = document.querySelector("#content");
    
    // Tabs
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    const div3 = document.createElement("div");


    // Setting id's
    div1.setAttribute("id", "homeButton");
    div2.setAttribute("id", "menuButton");
    div3.setAttribute("id", "contactButton");


    // Setting classes
    div1.classList.add("tab");
    div2.classList.add("tab");
    div3.classList.add("tab");
    

    // Text of tabs
    div1.textContent = "Home";
    div2.textContent = "Menu";
    div3.textContent = "Contact";


    content.appendChild(div1);
    content.appendChild(div2);
    content.appendChild(div3);

    div1.addEventListener('click', () => {
        clearContent()
        createRestaurantHomePage();
    })

    div2.addEventListener('click', () => {
        clearContent()
        createMenuPage();
    })

    div3.addEventListener('click', () => {
        clearContent()
        createContactPage();
    })
    
}

function clearContent() {
    const content = document.querySelector("#content");
    const newDiv = document.querySelector(".page-content");
    if (newDiv) {
        content.removeChild(newDiv);
    }
}
export default createTabs;
import createContactPage from "./contact";
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
    const div3 = document.createElement("div");
 


    // Setting id's
    logo.setAttribute("id", "logo")
    div1.setAttribute("id", "homeButton");
    div2.setAttribute("id", "menuButton");
    div3.setAttribute("id", "contactButton");


    // Setting classes
    div1.classList.add("navText");
    div2.classList.add("navText");
    div3.classList.add("navText");
    

    // Text of tabs
    logo.src = 'https://t3.ftcdn.net/jpg/04/75/85/06/360_F_475850614_NV7T6VRqGASmv4p3QQwIZoMmDhFXzQVL.jpg';
    div1.textContent = "Home";
    div2.textContent = "Menu";
    div3.textContent = "Contact";


    navDiv.appendChild(logo)
    navDiv.appendChild(div1);
    navDiv.appendChild(div2);
    navDiv.appendChild(div3);
    content.appendChild(navDiv)
    
    navbar.appendChild(div1);
    navbar.appendChild(div2);
    navbar.appendChild(div3);
    content.appendChild(navbar)
    navDiv.appendChild(navbar)
    
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
    const homeDiv = document.querySelector(".homeDiv");
    if (newDiv) {
        content.removeChild(newDiv);
    }
    else if (homeDiv) {
        content.removeChild(homeDiv);
    }
}
export default createTabs;

const createMenuPage = () => {
    const content = document.querySelector("#content");
    const newDiv = document.createElement("div");
    newDiv.classList.add("page-content");
    
    const heading = document.createElement("h1");
    heading.textContent = "Our Menu";
    heading.classList.add("heading");
    
    const startersList = document.createElement("ul");
    startersList.classList.add("menu-list");
    const startersHeading = document.createElement("h2");
    startersHeading.textContent = "Starters";
    
    const mainDishesList = document.createElement("ul");
    mainDishesList.classList.add("menu-list");
    const mainDishesHeading = document.createElement("h2");
    mainDishesHeading.textContent = "Main Dishes";
    
    const dessertsList = document.createElement("ul");
    dessertsList.classList.add("menu-list");
    const dessertsHeading = document.createElement("h2");
    dessertsHeading.textContent = "Desserts";
    
    const beveragesList = document.createElement("ul");
    beveragesList.classList.add("menu-list");
    const beveragesHeading = document.createElement("h2");
    beveragesHeading.textContent = "Beverages";
    
    const starterItem1 = document.createElement("li");
    starterItem1.textContent = "Starter 1";
    
    const starterItem2 = document.createElement("li");
    starterItem2.textContent = "Starter 2";
    
    const mainDishItem1 = document.createElement("li");
    mainDishItem1.textContent = "Main Dish 1";
    
    const mainDishItem2 = document.createElement("li");
    mainDishItem2.textContent = "Main Dish 2";
    
    const dessertItem1 = document.createElement("li");
    dessertItem1.textContent = "Dessert 1";
    
    const dessertItem2 = document.createElement("li");
    dessertItem2.textContent = "Dessert 2";
    
    const beverageItem1 = document.createElement("li");
    beverageItem1.textContent = "Beverage 1";
    
    const beverageItem2 = document.createElement("li");
    beverageItem2.textContent = "Beverage 2";
    
    startersList.appendChild(starterItem1);
    startersList.appendChild(starterItem2);
    
    mainDishesList.appendChild(mainDishItem1);
    mainDishesList.appendChild(mainDishItem2);
    
    dessertsList.appendChild(dessertItem1);
    dessertsList.appendChild(dessertItem2);
    
    beveragesList.appendChild(beverageItem1);
    beveragesList.appendChild(beverageItem2);
    
    newDiv.appendChild(heading);
    newDiv.appendChild(startersHeading);
    newDiv.appendChild(startersList);
    newDiv.appendChild(mainDishesHeading);
    newDiv.appendChild(mainDishesList);
    newDiv.appendChild(dessertsHeading);
    newDiv.appendChild(dessertsList);
    newDiv.appendChild(beveragesHeading);
    newDiv.appendChild(beveragesList);
    
    content.appendChild(newDiv);
}


export default createMenuPage;
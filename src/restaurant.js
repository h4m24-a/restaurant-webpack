const createRestaurantHomePage = () => {
  const content = document.querySelector("#content");
  const homeDiv = document.createElement("div");
  homeDiv.classList.add("homeDiv");

  const homeText = document.createElement("div");
  homeText.classList.add("homeText");
  
  const topdishDiv = document.createElement("div");
  topdishDiv.classList.add("topdishDiv");

  
  // Heading
  const headline = document.createElement("h1");
  headline.innerText = "Provide the best food for you!";
  headline.classList.add("headline");
  homeDiv.appendChild(homeText);
  homeText.appendChild(headline);

  // Text
  const pText = document.createElement("p");
  pText.innerText =
    " We've been serving up delicious, authentic Italian food since 1999!";
  pText.classList.add("pText");
  homeText.appendChild(pText);
  
  // button
  const orderButton = document.createElement("button");
  orderButton.innerText = "Reserve date!";
  orderButton.classList.add("orderButton");
  homeText.appendChild(orderButton);


  // Image
  const heroImage = document.createElement("img");
  heroImage.src =
    "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60";
  heroImage.classList.add("heroImage");
  homeDiv.appendChild(heroImage);


  content.appendChild(homeDiv);

  // Dishes you'd like text
  const topdishText = document.createElement("h1");
  topdishText.innerText ="Dishes you might like!";
  topdishText.classList.add("topdishText");
  
  content.appendChild(topdishDiv);
  content.appendChild(topdishText);
  topdishDiv.appendChild(topdishText);


  
// Create a new div to contain the cards
const cardContainer = document.createElement("div");
cardContainer.classList.add("cardContainer");

// Add cards to the container
const card1 = createCard("https://media.istockphoto.com/id/1264953582/photo/fried-fish-fillet-with-spinach.jpg?s=612x612&w=0&k=20&c=N29KUcQps07qq9nYXd2JOByhsqLUrXCKpwTMjaJpz0s=", "Fried fish fillet with spinach", "Pan fried fish with succulent flesh and golden crispy skin, with a pile of indulgent, creamed spinach. ", "£19.99");
const card2 = createCard("https://media.istockphoto.com/id/501503356/photo/meat-steak-with-mushrooms.jpg?s=612x612&w=0&k=20&c=KiB7ZhBiOA9mfpad9jDduUeWH-BGbwmnS4TUFgm3RrY=", "Meat steak with mushrooms", "Steak and Mushrooms is a perfectly juicy steak cooked in a skillet with a garlic herb butter and mushrooms.", "£24.99");
const card3 = createCard("https://media.istockphoto.com/id/1224394653/photo/italian-pasta-carbonara-with-bacon.jpg?s=612x612&w=0&k=20&c=m9JrpscJf6RoE0qGj-tmmJMky4MX-bDaPInnN6gdLBs=", "Talian pasta carbonara with bacon ", "Spaghetti Carbonara, one of the most famous Pasta Recipes of Roman Cuisine, ", "£18.99");
cardContainer.appendChild(card1);
cardContainer.appendChild(card2);
cardContainer.appendChild(card3);

topdishDiv.appendChild(cardContainer);

// Function to create a card
function createCard(imageUrl, headingText, paragraphText, priceText) {
  const card = document.createElement("div");
  card.classList.add("card");

  // Create image element
  const image = document.createElement("img");
  image.src = imageUrl;
  image.classList.add("card-image");
  card.appendChild(image);

  // Create h1 element
  const heading = document.createElement("h1");
  heading.innerText = headingText;
  heading.classList.add("card-heading");
  card.appendChild(heading);

  // Create p element
  const paragraph = document.createElement("p");
  paragraph.innerText = paragraphText;
  paragraph.classList.add("card-paragraph");
  card.appendChild(paragraph);

    // Create price element
    const price = document.createElement("p");
    price.innerText = priceText;
    price.classList.add("card-price");
    card.appendChild(price);

  

  return card;
}

  
};

export default createRestaurantHomePage;

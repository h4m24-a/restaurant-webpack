const createRestaurantHomePage = () => {
  const content = document.querySelector("#content");
  const homeDiv = document.createElement("div");
  homeDiv.classList.add("homeDiv");

  const homeText = document.createElement("div");
  homeText.classList.add("homeText");

  // Heading
  const headline = document.createElement("h1");
  headline.innerText = "Provide the best food for you!";
  headline.classList.add("headline");
  homeDiv.appendChild(headline);

  // button
  const orderButton = document.createElement("button");
  orderButton.innerText = "Reserve date!";
  orderButton.classList.add("orderButton");
  content.appendChild(homeDiv);

  // Text
  const pText = document.createElement("p");
  pText.innerText =
    " We've been serving up delicious, authentic Italian food since 1999!";
  pText.classList.add("pText");
  content.appendChild(homeDiv);

  homeDiv.appendChild(homeText);
  homeText.appendChild(headline);
  homeDiv.appendChild(orderButton);
  homeText.appendChild(pText);
  homeText.appendChild(orderButton);

  // Image
  const heroImage = document.createElement("img");
  heroImage.src =
    "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60";
  heroImage.classList.add("heroImage");
  homeDiv.appendChild(heroImage);
};

export default createRestaurantHomePage;

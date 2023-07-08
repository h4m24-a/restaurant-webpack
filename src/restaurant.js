
const createRestaurantHomePage = () => {
    const content = document.querySelector("#content");
    const newDiv = document.createElement("div");
    newDiv.classList.add("page-content");

     // Heading
     const headline = document.createElement("h1");
     headline.innerText = "Restaurant Webpack Example!";
     newDiv.appendChild(headline);
     
 
     // Image
     const image = document.createElement("img");
     image.src = 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60';
     image.height = '300';
     newDiv.appendChild(image);
 
     // Text
     const pText = document.createElement("p");
     pText.innerText = "Reserve a table today with a simple text!";
     newDiv.appendChild(pText);
     content.appendChild(newDiv);
}

export default createRestaurantHomePage;
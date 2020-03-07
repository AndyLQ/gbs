let data = [
  {
    price: "4.900.000 kr",
    street: "Vestergade",
    city: "Aarhus",
    size: "90m2",
    imgURL:
      "https://images-cdn.boligportal.dk/prod/public/05b525e6-4f5d-4307-be8f-45bd52d69fdc/w1024.jpg"
  },
  {
    price: "4.900.000 kr",
    street: "Kildeagervej",
    city: "Hasselager",
    size: "90m2",
    imgURL:
      "https://images-cdn.boligportal.dk/prod/public/05b525e6-4f5d-4307-be8f-45bd52d69fdc/w1024.jpg"
  },
  {
    price: "4.900.000 kr",
    street: "Borresovej",
    city: "Risskov",
    size: "90m2",
    imgURL:
      "https://images-cdn.boligportal.dk/prod/public/05b525e6-4f5d-4307-be8f-45bd52d69fdc/w1024.jpg"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  data.forEach(house => {
    const cardList = document.querySelector(".posts__list");
    const cardContainer = document.createElement("div");
    const cardIMG = document.createElement("div");
    const cardText = document.createElement("div");
    const price = document.createElement("div");
    const street = document.createElement("p");
    const city = document.createElement("p");
    const size = document.createElement("p");
    cardList.appendChild(cardContainer);
    cardContainer.setAttribute("class", "post");
    cardContainer.append(cardIMG);
    cardIMG.setAttribute("class", "post__imgbox");
    cardIMG.append(cardText);
    cardText.setAttribute("class", "post__textbox");
    cardText.append(price);
    cardText.append(street);
    cardText.append(city);
    cardText.append(size);
    price.innerHTML = house.price;
    price.setAttribute("class", "post__textbox__price");
    street.innerHTML = house.street;
    street.setAttribute("class", "post__textbox__street");
    city.innerHTML = house.city;
    city.setAttribute("class", "post__textbox__city");
    size.innerHTML = house.size;
    size.setAttribute("class", "post__textbox__size");
  });
});

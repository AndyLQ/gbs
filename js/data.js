document.addEventListener("DOMContentLoaded", () => {
  fetch("json/houses.json")
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      data.houses.forEach(house => {
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
});

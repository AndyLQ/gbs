document.addEventListener("DOMContentLoaded", () => {
  fetch("json/houses.json")
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data.houses);
      data.houses.forEach(house => {
        const cardList = document.querySelector(".posts__list");
        const cardContainer = document.createElement("a");
        const cardIMG = document.createElement("div");
        const cardText = document.createElement("div");
        const price = document.createElement("div");
        const street = document.createElement("p");
        const city = document.createElement("p");
        const size = document.createElement("p");
        const id = house.id;
        const locationIcon = document.createElement("i");
        const sizeIcon = document.createElement("i");

        locationIcon.setAttribute("class", "fas fa-map-marker-alt");
        sizeIcon.setAttribute("class", "fas fa-ruler-combined");

        cardList.appendChild(cardContainer);
        cardContainer.setAttribute("class", "post");
        cardContainer.setAttribute("data-id", id);
        cardContainer.setAttribute("href", "housepage.html");
        cardContainer.setAttribute(
          "onclick",
          "getID(this.getAttribute('data-id'))"
        );
        cardContainer.append(cardIMG);
        cardIMG.setAttribute("class", "post__imgbox");
        cardIMG.style.backgroundImage = "url('" + house.imgURL + "')";

        cardIMG.append(cardText);
        cardText.setAttribute("class", "post__textbox");
        cardText.append(price);
        cardText.append(street);
        cardText.append(locationIcon);
        cardText.append(city);
        cardText.append(sizeIcon);
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

function getID(data_id) {
  localStorage.setItem("currenthouse", data_id);
}
